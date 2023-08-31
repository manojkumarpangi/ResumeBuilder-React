import React from 'react'
import styles from './Header.module.css'
import resumeSvg from '../../assets/resume.svg'

function Header() {
  return (
    <div className={styles.container}>
    <div className={styles.left}>
    <p className={styles.heading}>
        Make a <span>Job-winning</span> resume,
    </p>
    <p className={styles.heading}>Absolutely <span>free</span> !</p>
    </div>
    <div className={styles.right}>
      <img src={resumeSvg} alt='resume'/>
    </div>
  </div>
  )
}

export default Header
