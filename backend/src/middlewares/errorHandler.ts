import { ErrorRequestHandler } from "express";


//Esto de acá si detecta un error te lo envía como respuesta al fetch
const errorHandler : ErrorRequestHandler = (error:any,req,res,next) =>{
    console.log("Path:",req.path,error)
    res.status(500).send("Error:" + error.message)
}

export default errorHandler