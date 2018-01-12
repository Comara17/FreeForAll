//User schema file
//Thanks to Gustavo Domaradzki for this tutorial
const mongoose = require('mongoose'),
        bcrypt = require('bcrypt');

//Create a new user schema with a username, password, and listed items array
const Schema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        require: true
    },

    items: [{}]

});

//If the password is created or modified on a user object, the password is salted
Schema.pre('save', function (next) {
    const user = this;

    if (this.isModified('password') || this.isNew) {
            bcrypt.genSalt(10, (error, salt) => {
                if (error) return next(error);
        
            bcrypt.hash(user.password, salt, (error, hash) => {
                if (error) return next(error);
                user.password = hash;
                next();
            });
        });
    } else {
            return next();
     }
});

//Using bcrypt, we can compare a salted password to a string entered in a field
Schema.methods.comparePassword = function (password, callback) {
    bcrpyt.compare(password, this.password, (error,matches) => {
        if (error) return callback(error);
        callback(null, matches);
    });
};

//Create the user model
mongoose.model('User', Schema);