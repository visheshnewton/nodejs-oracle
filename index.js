const dbcon = require('./dbconfig.js');
const oracledb = require('oracledb');

console.log('Getting path set for oracle');
oracledb.initOracleClient({libDir: 'C:\\WORK\\instantclient\\instantclient_21_13'});

Connection = null;

async function dbconnect(){
    connection = await oracledb.getConnection(dbcon);
    response = await connection.execute('SELECT FUNC_NAME from IP_FUNCTION WHERE FUNC_ID = \'F039\'');
    console.log(response.rows);
    // Connection.execute('delete/insert');
    // Connection.execute('commit')

}

async function disconnect(){
    if(Connection){
        Connection.close();
    }
}

try{
    dbconnect();
}catch(err){
    console.log(err);
}finally{
    disconnect();
}
