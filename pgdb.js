const pg = require('pg');
const credentials = require('./credentials');
var config = {
    user: credentials.username,
    database: credentials.database,
    password: credentials.password,
    host: credentials.server,
    port: 5432,
    max:10,
    idleTimeoutMillis: 30000,
}

const pool = new pg.Pool(config);

pool.on('error', function(err,client){
    console.error('idle client error', err.message, err.stack);
});

module.exports.pool = pool;

module.exports.query = function(text, values, callback){
    console.log('query:',text , values);
    return pool.query(text, values ,callback);
};

module.exports.connect = function(callback){
    return pool.connect(callback);
};