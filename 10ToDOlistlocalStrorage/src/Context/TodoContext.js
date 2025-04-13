import { createContext , useContext  } from "react";

export const TodoContext = createContext( {
 Todos : [
    {
        id: 1 ,
        todoi: msm , 
        Complete : false ,
    }
    
 ] ,
 addToDo : (Todo) => {} ,
 upDate : ( id , Todo) => {} ,
 deleteToDo : (id) =>{} ,
 ToggleEvent : ()=>{}

 }) 

export const useToDo =() => {
    return useContext (TodoContext)
}
export const Todoprovider = Todoprovider 