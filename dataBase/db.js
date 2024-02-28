import mongoose from "mongoose";

export const db = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/login")
        console.log("conectado a la base de datos login")
    } catch (error) {
        console.log(error)
        
    }
}