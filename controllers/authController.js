import { User } from "../models/authModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const Register = async (req,res) => {
    const {username, password, email} = req.body
    
    try {
    const existingEmail = await User.findOne({email:email})
    if(existingEmail){
        res.status(400).json({message:"este Email ya existe"})
    }
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const credentials= new User({
        username: username,
        password: hashPassword,
        email: email
    })
    await credentials.save()
    res.status(200).json({message: "registro creado"}, credentials)
} catch (error) {
    res.status(500).json({message:" ha habido algun error"})    
}
}

export const Login  = async (req,res ) => {
    const {email, password} =req.body
    try {
        const user = await User.findOne({email:email})
        if(!user){
            return res.status(400).json({message:" email invalido"})
        }else{
            const validPassword = await bcrypt.compare(password, user.password)
            if(!validPassword){
                return res.status(400).json({message:"contraseña incorrecta"})
            }
        }
        const token = jwt.sign({
            email: email,
            role: user.role,
        }, process.env.SECRET_KEY)
        await res.header({
            "auth":token
        })
        res.status(200).json({message:"login correcto", token})
    } catch (error) {
        res.status(500).json({message:" ha habido algun error"}) 
    }
}
