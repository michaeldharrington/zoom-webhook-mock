import React from 'react'
import styles from './styles.module.css'

import { InfoIcon } from '../Info'
import Logo from '../../static/logo.svg'


const Nav = () => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={Logo} alt="Zoom Developers"/>
            <InfoIcon />
        </div>
    )
}

export default Nav
