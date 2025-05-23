import db from "../helpers/database"
import { Document, Filter, ObjectId, OptionalId } from "mongodb"
import { compareHash } from "../utils/bcrypt"


//Estos son las llamadas a la DB que se usan en el controlador de autenticación
export const userExists = async(VALUE: Filter<Document>) =>  !(await db.getOne("usuarios",VALUE) === null)

export const addUser = async(USER: OptionalId<Document>) => ((await db.insert("usuarios",{"Nombre":USER.Nombre,"Email":USER.Email,"Contrasenia":USER.Contrasenia})).acknowledged)

export const loginUser = async(USER: Filter<Document>) => 
    db.getOne("usuarios",{"Email":USER.Email}).then(async (user)=>user === null ? null : await compareHash(USER.Contrasenia,user.Contrasenia) ? user : false )

export const getSession = async(ID: string) => db.getOne("usuarios",{_id:ObjectId.createFromHexString(ID)})