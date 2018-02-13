const mongoose = require('mongoose'),
      UserModel = require('@FreeForAllModels/user');
    //   ItemModel = require('@FreeForAllModels/item');
      

const models = {
  User: mongoose.model('User')
//   Item: mongoose.model('Item'),
  
}

module.exports = models;