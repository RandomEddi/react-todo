import React, {useContext} from 'react'
import searchContext from '../../context/search-context'
import styles from "./Search.module.css"

export default function() {
  const ctx = useContext(searchContext)
  return (
    <input onChange={(e) => ctx.searchHandler(e.target.value)} className={styles.search} type="text" placeholder='Search...' />
  )
}