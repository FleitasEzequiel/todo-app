import { taskContext } from "./taskContext";
import { ReactElement, useContext, useState } from "react";

export const Provider = ({children}) => {
    const [tasks, setTasks] = useState([{
        "set":"hola",
        "tasks":["Cómo estás"]
    }])
    console.log("provider:",tasks)
    const addTasks = (task : {set:string,task:string}) : void => {
    console.log(tasks)
    const newArray = tasks.map((list )=>{return {...list, "tasks": ["chipue","chipue2"]}})
    console.log("antes que nada:", newArray)
    setTasks(newArray)
    }
        // console.log("nuevo task",tasks)
    const removeTask = (target: string): void =>{
        // setTasks((state)=>{
        //     console.log("acá",state)
        // })
    }
    return(
        <taskContext.Provider value={{addTasks,removeTask, tasks,}}>
            {children}
        </taskContext.Provider>
    )
}