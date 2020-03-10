import React from 'react'
import styles from './styles.module.css'


export const EndpointURL = (props) => {
    return (
        <div>
            <input
                className={styles.input}
                type="text"
                placeholder="Endpoint Notification URL"
                onChange={props.handleChange}
            />
            {/* <input
                className={styles.input}
                type="text"
                placeholder="Verification Token"
            /> */}
        </div>
    )
}
