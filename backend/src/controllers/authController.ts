import catchErrors from "../utils/catchErrors"

const registerHandler = catchErrors(
async (req,res) =>{
    //Acá va la lógica de registro
})

const loginHandler = catchErrors(
    async (req,res,_next)=>{
        //Acá va la lógica de Inicio de Sesión
    }
)

const sessionHandler = catchErrors(
    async (req,res,next) =>{
        //Acá va la lógica para enviarle la Sesión al frontend
    }
)   

export {registerHandler,sessionHandler,loginHandler}