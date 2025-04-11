import { taskContext } from "./taskContext";
import { ReactElement, useContext, useState } from "react";

export const Provider = ({children}) => {
    const [tasks, setTasks] = useState(["Hola"])
    console.log("provider:",tasks)
    const addTasks = (newTask : string) : void => {
        setTasks((state)=>[...state,newTask])
        console.log("nuevo task",tasks)
    }
    const removeTask = (target: string): void =>{
        setTasks((state)=>state.filter((el)=>el !== target))
    }
    return(
        <taskContext.Provider value={{addTasks,removeTask, tasks,}}>
            {children}
        </taskContext.Provider>
    )
}