import React, { useState } from "react"
import styles from "./NewTodo.module.css"

export default function (props) {
  const [validTodo, setValidTodo] = useState(true)
  const [nameTodo, setNameTodo] = useState("")

  function submitHandler(event) {
    event.preventDefault()

    if (validTodo) {
      props.onNewTodo(nameTodo)
    } else {
      return
    }

    setNameTodo("")
  }

  function inputChecker(e) {
    if (!e.target.value.trim() || e.target.value.length < 4) {
      setValidTodo(false)
    } else {
      setValidTodo(true)
    }
    setNameTodo(e.target.value)
  }

  return (
    <form onSubmit={submitHandler} className={styles.newTodo}>
      <input
        className={validTodo ? "" : styles.invalid}
        value={nameTodo}
        onChange={inputChecker}
        onFocus={() => setValidTodo(true)}
        type="text"
        placeholder="newTodo"
      />
      <button type="submit">Add</button>
    </form>
  )
}
