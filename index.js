const dbcon = require('./dbconfig.js');
const oracledb = require('oracledb');

oracledb.initOracleClient({libDir: 'C:\\work\\instantclient\\instantclient_21_13'});

async function dbconnect(){
    Connection = await oracledb.getConnection(dbcon);
    Connection.execute('select sysdate from dual');
    // Connection.execute('delete/insert');
    // Connection.execute('commit')

}

