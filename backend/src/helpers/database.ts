import { MongoClient, WithId,Document, Filter, WithoutId,OptionalId} from "mongodb";
import { uri,options } from "./uri";
 
const client = () : MongoClient => 
   new MongoClient(uri,options);

/*Esto de acá es un Objeto para usar la base de datos 
 Por ejemplo si querés obtener todo de una colección/tabla le ponés 
 db.get() 
*/
const db =
{
   "insert":async(schema:string,document:OptionalId<Document>) => await client().db("glucontrol").collection(schema).insertOne(document).finally(()=>client().close()),
   "get":async(schema:string) : Promise<WithId<Document>[]>=>(await client().db("glucontrol").collection(schema).find({}).toArray().finally(()=>client().close())),
   "getOne":async (schema:string, target:Filter<Document>) : Promise<WithId<Document> | null>=>client().db("glucontrol").collection(schema).findOne(target).finally(()=>client().close()),
   "change":async(schema:string,target:Filter<Document>,document:WithoutId<Document>) : Promise<WithId<Document> | null>  => client().db("glucontrol").collection(schema).findOneAndReplace(target,document).finally(()=>client().close()),
   "delete":async(schema:string,document:Filter<Document>) => client().db("glucontrol").collection(schema).findOneAndDelete(document).finally(()=>client().close())
}

export default db