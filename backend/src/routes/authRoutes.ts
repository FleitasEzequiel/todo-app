import { Router } from "express";
import { loginHandler, registerHandler, sessionHandler } from "../controllers/authController";
import { userHandler } from "../middlewares/userHandler";


const Auth = Router()
// prefix: /auth/
Auth.post("/signup",registerHandler)
Auth.post("/login",loginHandler)
Auth.get("/session",userHandler, sessionHandler)
export default Auth