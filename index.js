import  express  from "express";
const app = express();
import { db } from "./dataBase/db.js";
import authRoutes from './routes/authRoutes.js'

app.use(express.json())
app.use("/auth", authRoutes)
db()

app.listen(3000, console.log("conectado"))

