import React from 'react'
import styles from './css/styles.module.css'
import grid from './icons/grid.svg'
import firefox from './icons/firefox.svg'

const Sidebar = () => {
  return (
	<aside className={styles.sidebar}>
		<img className={styles.sidebar_item} src={firefox} alt='firefox'/>
		<img className={`${styles.sidebar_item} ${styles.grid_icon}`} src={grid} alt='grid'/>
	</aside>
  )
}

export default Sidebar