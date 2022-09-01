import React from 'react'
import styles from "./Search.module.css"

export default function(props) {
  return (
    <input onChange={(e) => props.onInput(e.target.value)} className={styles.search} type="text" placeholder='Search...' />
  )
}