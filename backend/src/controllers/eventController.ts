import {addEvent, getEvent, getEvents} from "../services/Events"
import catchErrors from "../utils/catchErrors";
import { CREATED, OK } from "../const/statusCodes";
import { ObjectId } from "mongodb";


//Esto de acá es una función para crear un ID de Mongo
const createObjectId = (id: string ):ObjectId => ObjectId.isValid(id) ? ObjectId.createFromHexString(id) : false

const getEventsHandler = catchErrors(
    async(req,res,next)=>{
        //Acá va la lógica de obtener un SOLO evento.
    }
)

const getEventHandler = catchErrors(
    async(req,res,next)=>{
        //Acá va la lógica de agarrar todos los eventos.
    }
)

const addEventHandler = catchErrors(
    async(req,res,next)=>{
        //Acá va la lógica de agregar un evento.
    }
)


const deleteEventHandler = catchErrors(
    async(req,res,next)=>{
        //Acá va la lógica de eliminar el Evento.
    }
)

export {getEventsHandler, getEventHandler,addEventHandler,deleteEventHandler}