module.exports = (mongoose, config) => {
    const database = mongoose.connection;
    mongoose.Promise = Promise;
    mongoose.connect(config.database, {
        useMongoClient: true,
        promiseLibrary: global.Promise
    });
    database.on('error', error => console.log(`Connection to FreeForAll database failed: ${error}`));
    database.on('connected', () => console.log('Connected to FreeForAll database'));
    database.on('disconnected', () => console.log('Disconnected from FreeForAll database'));
    process.on('SIGINT', () => {
        database.close(() => {
            console.log('FreeForAll terminated, connection closed');
            process.exit(0);
        })
    });
};