// rafce te despliega la base de un componente de react
import { useState } from "react"

const ToDoList = () => {
    const [inputValue, setInputValue] = useState('')//como es un input hay que poner comillas para que este vacío


  return (
    <div>
        <h1>Lista de tareas</h1>
        <input 
            type="text" 
            value={inputValue} 
            // onChange={(evento) => setInputValue(evento.target.value)}
            onChange={(evento) => console.log(evento.target)}
        />
    </div>
  )
}

export default ToDoList