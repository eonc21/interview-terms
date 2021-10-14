import React, { ReactElement } from 'react'
import styles from './css/Title.module.css'

interface TitleProps {
    text: String,
    
}

export default function Title({text}: TitleProps): ReactElement {
    return (
        <div className={styles.title}>
            <h4>
            {text}

            </h4>
        </div>
    )
}
