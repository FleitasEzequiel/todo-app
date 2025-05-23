import {Router} from "express";
import { addEventHandler, deleteEventHandler, getEventHandler, getEventsHandler } from "../controllers/Events";
import { userHandler } from "../middlewares/userHandler";


// prefix : Events/
const Events : Router = Router()

Events.get("/",getEventsHandler)
Events.get("/read/:id",getEventHandler)
Events.post("/", userHandler, addEventHandler)
Events.delete("/delete/:id",userHandler, deleteEventHandler)

export default Events;
