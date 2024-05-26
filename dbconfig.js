module.exports = {
    user: 'ipfm',
    password: 'password',
    connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING || '192.168.1.78/orcl',
    externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false

};