import React from 'react'

import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.heading}>
        <h2 className={styles.title}>Weather <span className={styles.light}>App</span></h2>
    </div>
  )
}

export default Header