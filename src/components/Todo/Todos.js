import React, { useContext, useEffect, useState } from "react"
import styles from "./Todos.module.css"
import TodoItem from "./TodoItem"
import searchContext from "../../context/search-context"

export default function ({ todos, changeDone, deleteData }) {
  const ctx = useContext(searchContext)
  const [filterType, setFilterType] = useState("all")
  const [todosItems, setTodosItems] = useState(todos)

  const activeTodos = todosItems.filter((todo) => todo.done === false)
  const doneTodos = todosItems.filter((todo) => todo.done === true)

  useEffect(() => {
    if (ctx.searchFilter) {
      const patern = new RegExp(`${ctx.searchFilter}`)

      setTodosItems(
        todos.filter((item) => {
          if (patern.test(item.title)) {
            return item
          }
        })
      )
    } else setTodosItems(todos)
  }, [todos, ctx.searchFilter])

  function selectActive(e) {
    let target = e.target
    let div = target.closest("div")

    Array.from(div.children).forEach((child) => {
      if (child === target) {
        child.className = `${styles.filter} ${styles.active}`
        setFilterType(child.id)
      } else {
        child.className = `${styles.filter}`
      }
    })
  }

  function changeDoneHandler(id) {
    changeDone(id)
  }

  function deleteDataHandler(id) {
    deleteData(id)
  }

  return (
    <div className={styles.todos}>
      <div onClick={selectActive} className={styles.filters}>
        <button id="all" className={styles.filter + " " + styles.active}>
          All
        </button>
        <button id="active" className={styles.filter}>
          Active
        </button>
        <button id="done" className={styles.filter}>
          Done
        </button>
      </div>
      <div className={styles.items}>
        {filterType === "all"
          ? todosItems.length > 0
            ? todosItems.map((todo) => (
                <TodoItem
                  onDeleteData={deleteDataHandler}
                  onChangeDone={changeDoneHandler}
                  key={todo.id}
                  data={todo}
                />
              ))
            : "Nothing to do :)"
          : filterType === "active"
          ? activeTodos.length > 0
            ? activeTodos.map((todo) => (
                <TodoItem
                  onDeleteData={deleteDataHandler}
                  onChangeDone={changeDoneHandler}
                  key={todo.id}
                  data={todo}
                />
              ))
            : "No active  :)"
          : doneTodos.length > 0
          ? doneTodos.map((todo) => (
              <TodoItem
                onDeleteData={deleteDataHandler}
                onChangeDone={changeDoneHandler}
                key={todo.id}
                data={todo}
              />
            ))
          : "Do something :)"}
        {/* {filterType === "all"
          ? todosItems.length > 0
            ? todosItems.map((todo) => (
                <TodoItem
                  onDeleteData={deleteDataHandler}
                  onChangeDone={changeDoneHandler}
                  key={todo.id}
                  data={todo}
                />
              ))
            : "Nothing to do :)"
          : doneTodos.length > 0
          ? doneTodos.map((todo) => (
              <TodoItem
                onDeleteData={deleteDataHandler}
                onChangeDone={changeDoneHandler}
                key={todo.id}
                data={todo}
              />
            ))
          : "Nothing done :)"} */}
      </div>
    </div>
  )
}
