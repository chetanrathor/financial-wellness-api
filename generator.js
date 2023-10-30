require('dotenv').config()
module.exports = {
    getPort : ()=>Number(process.env.PORT) ?? 3000 ,
    getENV : ()=> process.env.NODE_ENV ?? 'local',
    getMongoDbUrl :()=>process.env.MONGO_DB_URL ?? 'mongodb+srv://devchetanrathor:Rathor3899@cluster0.jbfhih2.mongodb.net/?retryWrites=true&w=majority'

}