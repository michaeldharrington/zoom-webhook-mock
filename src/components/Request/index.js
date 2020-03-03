import React from 'react'
import styles from './styles.module.css'

import Highlight from 'react-highlight.js'

const RequestButton = props => {
    const sendRequest = e => {
        e.preventDefault()
        console.log(props.data)
    }
    return (
        <button className={styles.requestButton} onClick={sendRequest}>
            Send            
        </button>
    )
}

const Request = props => {
    return (
        <div className={styles.request}>
            <div className={styles.requestHeader}>
                <div className={styles.eventName}>{props.data.event.replace("."," ").replace("_", " ")}</div>
                <RequestButton data={props.data} />
            </div>
            <div className={styles.payload}>
                {/* <div>Payload:</div> */}
                <Highlight language="json">
                    {JSON.stringify(props.data.payload, null, 4)}
                </Highlight>
            </div>
        </div>
    )
}

export const RequestList = props => (
    <div>
        {props.events.map((event, index) => (
            <Request data={event} key={index} />
        ))}
    </div>
)