import React from 'react'
import styles from './css/styles.module.css'

import diagram from './icons/diagram.svg'
import power from './icons/power.svg'
import volume from './icons/volume.svg'

const Header = () => {

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

  return (
	<header className={styles.header}>
		<span className={styles.activity}>Activities</span>
		<span className={styles.activity}>{today.toDateString()}</span>
		<span className={styles.right_header}>
			<img src={diagram} alt='diagram' />
			<img src={volume} alt='volume' />
			<img src={power} alt='power' />
		</span>
	</header>
  )
}

export default Header