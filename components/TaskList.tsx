import { useContext, useState } from "react";
import { taskContext } from "./context/taskContext";
import { StyleSheet, Text, View } from "react-native";

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
    const {tasks} = useContext(taskContext)
    return(
        <>
            { tasks.map((el)=><View style={styles.items}><Text>{el}</Text></View>)}
        </>
    )
}