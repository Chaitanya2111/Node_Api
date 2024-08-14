var config = require('./dbconfig');
const sql =  require('mssql');

async function getEmployee(){
    try{
        console.log("im here");
        let Emp = await sql.connect(config);
        let Employee = await Emp.request().query("select*from emp");
        return Employee.recordsets;
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    getEmployee : getEmployee
}