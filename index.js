import  express  from "express";
const app = express();
import { db } from "./dataBase/db.js";
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import "dotenv/config.js"

app.use(express.json())

app.use("/todo", todoRoutes)
app.use("/auth", authRoutes)
db()

app.listen(3000, console.log("conectado"))

