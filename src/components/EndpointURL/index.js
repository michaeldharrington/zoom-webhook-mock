import React from 'react'
import styles from './styles.module.css'


export const EndpointURL = () => {
    return (
        <div>
            <input
                className={styles.input}
                type="text"
                placeholder="Endpoint Notification URL"
            />
            {/* <input
                className={styles.input}
                type="text"
                placeholder="Verification Token"
            /> */}
        </div>
    )
}
