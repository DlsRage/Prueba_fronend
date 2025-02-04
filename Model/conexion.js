import mongoose from "mongoose";

export const ConexionMongo = async () => {
    try {
        await mongoose.connect('mongodb+srv://Eric:spc525nc@fullstack.f7lfr.mongodb.net/prueba')
        console.log("Properly Connected")
    } catch (e) {
        console.log(e)
    }
    process.on('SIGINT', async () => {
        await mongoose.connection.close()
        process.exit(0)
    })
}
