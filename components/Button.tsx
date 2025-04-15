import { View,Button,TextInput, StyleSheet,Text } from "react-native"
import { useState,useContext } from "react"
import { taskContext } from "./context/taskContext"

const Component = () =>{
    const [nombre, setNombre] = useState("")
    const {addTasks} = useContext(taskContext)
    const handler =() =>{
        addTasks({
            "set":"hola",
            "task": nombre
        })
    }
    const style1 = StyleSheet.create({
        button:{
            backgroundColor:"blue",
        }
    })
    return(
        <View style={style1.button}>
            <TextInput inputMode="text" onChangeText={(text)=>setNombre(text)} className="yo"/>
            <Button title={`Añadir Tarea ${nombre}`} onPress={()=>handler()}/>
        </View>
    )
}
export default Component