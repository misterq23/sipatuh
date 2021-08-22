var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        user: 'dirahasiakan',
        password: 'dirahasiakan',
        server: 'localhost',
        database: 'PARU'
    });

    return conn;
};

module.exports = connect;
