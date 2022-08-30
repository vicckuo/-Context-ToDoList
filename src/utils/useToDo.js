import { useState } from "react";

export default function useToDo() {
    const [toDo, setTodo] = useState([{ value: "資料一", id: Date.now() }])

    //create
    const addToDo = (value) => {
        const toDoCopy = [...toDo]
        toDoCopy.push({ value: value, id: Date.now() })
        setTodo(toDoCopy)
    }

    //update
    const updateToDo = (index, value) => {
        const toDoCopy = [...toDo]
        toDoCopy[index].value = value
        setTodo(toDoCopy)
    }

    //delete
    const deleteToDo = (index) => {
        const toDoCopy = [...toDo]
        toDoCopy.splice(index, 1)
        setTodo(toDoCopy)
    }

    //以物件的方式return出去
    return { toDo, addToDo, updateToDo, deleteToDo }
}
