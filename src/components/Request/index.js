import React from 'react'
import styles from './styles.module.css'

import Highlight from 'react-highlight.js'

function makePOST(url, data) {
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => console.log(res))
}

const RequestButton = props => {
    const sendRequest = e => {
        e.preventDefault()
        console.log(props.data)
        makePOST(props.url, props.data)
    }
    return (
        <button className={styles.requestButton} onClick={sendRequest}>
            Send            
        </button>
    )
}

export const Request = props => {
    return (
        <div className={styles.request}>
            <div className={styles.requestHeader}>
                <div className={styles.eventName}>{props.data.event.replace("."," ").replace(/_/g, " ")}</div>
                <RequestButton url={props.url} data={props.data} />
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