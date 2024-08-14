const sql = require("mssql/msnodesqlv8");

var config = {
    server : "MSI\\SQLEXPRESS",
    database :"ChaitanyaDb",
    driver : "msnodesqlv8",
    user : "sa",
    password : "12345678",
    options:{
        trustedConnection : true
    },
    port :3000
}


module.exports = config;