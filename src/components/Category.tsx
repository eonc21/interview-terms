import React from 'react'
import styles from './css/Category.module.css'

type CategoryProps = {

    title: String,
    description: String,
    image: String,
    handleClick: () => void,
}

export default function Category({ title, description, image, handleClick }: CategoryProps) {
    
    return (
        <div className={styles.container} onClick={handleClick} style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url(${image})`}}>
            <div className={styles.textContainer} >

            <text >
            {title}

            </text>

            
            </div>
            
           
        </div>
    )
}
