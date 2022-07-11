import React, { useEffect, useState } from 'react'
import Parcel from 'single-spa-react/parcel'
import { Subscription } from 'rxjs';
import { bootstrap, mount, unmount } from '../addTodo-addTodo';
import singleSpaReact from 'single-spa-react';
import { Observable } from "rxjs";

const Todo = ({ props, calis }) => {
    const { todos } = props
    const [todolist, setTodolist] = useState([])
    calis()
    const showTodo = () => {
        setTodolist([...todos])
        console.log("mounten is screen", todos)
    }



    return (
        <>
            react:{todolist.map((item, index) => <span key={index}>{item} - </span>)}
            <br /> <button onClick={() => {
                showTodo();
            }}>selam</button>
            {/* <input value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={() => addTodo()} >Add</button>
            <br />
            <div>react: {todos.map((item) => <span>{item} - </span>)}</div> */}
            {/* <Parcel
                config={() => System.import("@angular/showTodo")}
                todos={todos}
                parcelDidMount={() => mountend()}

            /> */}
        </>
    )
}

export default Todo