import { Request,Response,NextFunction} from "express"
type asyncController = (req:Request,res:Response,next:NextFunction) => Promise<void>


//Este de acá es un try catch que se usa en todos los controladores y que está así acá para que sea más legibles en los controladores
const catchErrors = 
(controller: asyncController) : asyncController =>  
    async (req,res,next) =>{
        try {
            await controller(req , res , next)  
        } catch (error) {
            next(error);
        }
    }

export default catchErrors