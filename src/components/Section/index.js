import React, { Component } from 'react'
import styles from './styles.module.css'

import {Request} from '../Request'

export default class Section extends Component {
    constructor(props){
        super(props);
        this.state = { active: this.props.active }

        this.show = this.show.bind(this)
    }
    
    
    show() { this.setState({ active: !this.state.active })}

    render() {
        const { active } = this.state
        const { title, events, endpoint } = this.props
        return (
            <div className={styles.event}>
                <div className={styles.header} onClick={this.show}>
                    <button
                        className={active ? styles.active : styles.hidden}
                    ></button>
                    <h2 className={styles.eventTitle}>
                        {title} Events
                    </h2>
                </div>
                {!this.state.active ? 
                    <></> 
                : 
                    <div>
                        <div className={styles.grid}>
                            {events.map((event, index) => (
                                <Request url={endpoint} data={event} key={index} />
                                ))}
                        </div>
                    </div>
                }
            </div>
        )
    }
}
