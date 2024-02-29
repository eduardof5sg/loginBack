import { User } from "../models/authModel.js"

export const verifyRole = async(req,res,next)=> {
    const id= req.user._id
    const userRole = await User.findById(id)
    
    if(userRole.role !== req.user.role){
        res.status(401).json({message:"intentas hackearme?"})
    }next()
}