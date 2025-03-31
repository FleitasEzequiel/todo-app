import { taskContext } from "./taskContext";
import { ReactElement, useContext, useState } from "react";

export const Provider = ({children}) => {
    const [tasks, setTasks] = useState(["Hola"])
    const addTasks = (newTask : string) : void => {
        setTasks((state)=>[...state,newTask])
        console.log(tasks)
    }
    return(
        <taskContext.Provider value={{addTasks, tasks}}>
            {children}
        </taskContext.Provider>
    )
}