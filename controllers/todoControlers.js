import { Todo } from "../models/todoModels.js";

//CONTROLADOR METODO GET
export const getTodo = async(req, res) => {//parametros require & response
    try {
        const todos = await Todo.find();
        res.status(200).json(todos); //la respuesta es un status correcto si todo va bien, y lo devuelve en forma de json de nuestra const
        console.log(todos)
    } catch (error) {
        res.status(500).json({message: "Se fue todo a la wuea", error})
    }
};

//CONTROLADOR METODO CREATE 
export const createTodo = async (req, res) => {
    const {title, task,type} = req.body; //cosas que va a buscar dentro del body del model
    try {
        const todo = new Todo ({ //new keys para guardar nueva iteracion
            title: title,
            task: task,
            type: type
        })
        await todo.save() //variable en la que se guardan
        res.status(200).json({message: "Todo joya", todo});
    } catch (error) {
        res.status(500).json({message: "Se fue todo a la wuea", error})
    }
}