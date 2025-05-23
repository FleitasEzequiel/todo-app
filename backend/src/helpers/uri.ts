import {ServerApiVersion} from "mongodb"

//Acá le tenemos que pasar la información de la base de datos de mongo
export const uri = ""

//Estos son opciones extras
export const options = 
{
    serverApi: {
      version: ServerApiVersion.v1,
      strict: false,
      deprecationErrors: true,
    },
  }