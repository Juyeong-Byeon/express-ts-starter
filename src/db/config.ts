const DBConfig = process.env.MODE==="PRODUCT"
?{
    host: 'localhost',
    user: 'dbuser',
    password: 's3kreee7'
}:{
    host: 'localhost',
    user: 'dbuser',
    password: 's3kreee7'
}

export {DBConfig}