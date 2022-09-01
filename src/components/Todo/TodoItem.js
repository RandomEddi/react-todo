import React from "react"
import styles from "./TodoItem.module.css"

export default function ({ onDeleteData, onChangeDone, data }) {
  return (
    <div className={styles.item}>
      <div
        onClick={() => onChangeDone(data.id)}
        style={!data.done ? {} : { textDecoration: "line-through" }}
        className={styles.title}
      >
        {data.title}
      </div>
      <button onClick={() => onDeleteData(data.id)} className={styles.btn}>
        &times;
      </button>
    </div>
  )
}
