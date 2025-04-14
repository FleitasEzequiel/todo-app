import { useContext, useState } from "react";
import { taskContext } from "./context/taskContext";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export const List = () =>{
    const styles = StyleSheet.create({
      "items":{
        backgroundColor: "blue",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:150,
        height:60,
        flexDirection:"column",
        gap:20
      }  
    })
    const {tasks, removeTask} = useContext(taskContext)
    const touchHandler = (set,task) =>{
      removeTask({
        "set":set,
        "task":task
      })
    }
    return(
        <>
            { tasks.map((conjunto,index)=><View>{conjunto.tasks.map((tarea)=><TouchableHighlight onPress={(e)=>touchHandler(conjunto.set,tarea)}><View style={styles.items}><Text>{tarea}</Text></View></TouchableHighlight>) } </View>)}
        </>
    )
}