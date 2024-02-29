import mongoose from "mongoose";

export const db = async() => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION)
        console.log("conectado a la base de datos login")
    } catch (error) {
        console.log(error)
        
    }
}