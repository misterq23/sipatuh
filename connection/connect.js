var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        user: 'sa',
        password: 'P@ssw0rd',
        server: 'localhost',
        database: 'PARU'
    });

    return conn;
};

module.exports = connect;