import React, { useState } from "react"
import Search from "./components/Search/Search"
import NewTodo from "./components/Todo/NewTodo"
import Todos from "./components/Todo/Todos.js"
import searchContext from "./context/search-context"

const TODOS = [
  { id: 1, title: "buy something", done: false },
  { id: 2, title: "buy bread", done: true },
  { id: 3, title: "buy hleb", done: false },
]

export default function () {
  const [searchFilter, setSearchFilter] = useState(null)
  const [todos, setTodos] = useState(TODOS)

  function searchHandler(text) {
    if (text) {
      setSearchFilter(text)
    } else {
      setSearchFilter(null)
    }
  }

  function addTodo(todo) {
    setTodos((curr) => [
      { id: Math.random(), title: todo, done: false },
      ...curr,
    ])
  }

  function changeDone(id) {
    setTodos((curr) =>
      curr.filter((item) => {
        if (item.id === id) {
          item.done = !item.done
        }
        return item
      })
    )
  }

  function deleteData(id) {
    setTodos((curr) => curr.filter((item) => item.id !== id))
  }

  return (
    <searchContext.Provider value={{
      searchFilter: searchFilter,
      searchHandler: searchHandler,
    }}>
      <Search/>
      <NewTodo onNewTodo={addTodo} />
      <Todos
        todos={todos}
        changeDone={changeDone}
        deleteData={deleteData}
      />
    </searchContext.Provider>
  )
}
