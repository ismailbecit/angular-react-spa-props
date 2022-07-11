import { useState } from "react";
export default function Root(props) {
  const { todos } = props
  const [todolist, setTodolist] = useState([])

  setInterval(() => {
    setTodolist([...todos])
  })


  return (
    <>
      react:{todolist.map((item, index) => <span key={index}>{item} - </span>)}
      <br />
    </>
  )
}