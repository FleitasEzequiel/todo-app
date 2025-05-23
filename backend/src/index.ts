import * as express from "express"
import Events from "./routes/eventRoutes"
import Auth from "./routes/authRoutes"
import * as cors from "cors"
import errorHandler from "./middlewares/errorHandler"
import * as cookieParser from "cookie-parser"
const app = express()

//Middlewwares
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin:["http://localhost:5173"]
}))

//Rutas
app.use("/events/",Events)
app.use("/auth/",Auth)

//Este es el middleware de los errores
app.use(errorHandler)
app.listen(8080,()=>{    
    console.log("Server is running on port 32000")
})