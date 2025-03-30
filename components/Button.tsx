import { View,Button,TextInput, StyleSheet,Text } from "react-native"
import { useState } from "react"

const Component = () =>{
    const [nombre, setNombre] = useState("")
    const style1 = StyleSheet.create({
        button:{
            backgroundColor:"blue",
        }
    })
    return(
        <View style={style1.button}>
            <TextInput inputMode="text" onChangeText={(text)=>setNombre(text)} className="yo"/>
            <Button title={`Añadir Tarea ${nombre}`} onPress={()=>console.log("holis")}>
                </Button> 
        </View>
    )
}
export default Component