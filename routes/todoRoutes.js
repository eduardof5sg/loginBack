import express from "express";
import {createTodo, getTodo} from "../controllers/todoControlers.js";
import { authMiddleware } from "../middelware/authMiddelware.js";
import { verifyRole } from "../middelware/roleMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware,verifyRole, getTodo); //metodo get
router.post("/", createTodo); //metodo post

export default router;