import { Document, WithoutId, ObjectId } from "mongodb"
import db from "../helpers/database"


//Estos son las llamadas a la DB que se usan en el controlador de eventos
const getEvents = async() => db.get("articulos")
const getEvent = async(TARGET: WithoutId<Document>) => await db.getOne("articulos",TARGET)
const addEvent = async(DOCUMENT: WithoutId<Document>) => await db.insert("articulos",DOCUMENT)
const deleteEvent = async(TARGET: ObjectId) => await db.delete("articulos",{"_id":TARGET})
export {getEvents,getEvent,addEvent}