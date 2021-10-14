import React from 'react'
import Category from './Category'
import { useHistory } from 'react-router-dom'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import styles from './css/CategoryList.module.css'

interface CategoryListProps {
    
}
const onClick = () => {
    alert("yooo")
}


export const CategoryList = (props: CategoryListProps) => {
    const history = useHistory();
    const categories : {title: String, description: String, image: String, onClick: () => void}[] = 
    [ 
        {
            title: "Object Oriented Programming",
            description: "Terminology related to OOP, inheritance, etc.",
            image: "https://res.cloudinary.com/dbdtfa9qb/image/upload/v1634247750/interview-prep/joshua-aragon-BMnhuwFYr7w-unsplash_tk1pcu.jpg",
            onClick() {
                history.push({
                    pathname: `/oop`, 
                    // state: 
            });
            }
        },

        {
            title: "Data Structures",
            description: "Terminology related to OOP, inheritance, etc.",
            image: "https://res.cloudinary.com/dbdtfa9qb/image/upload/v1634247747/interview-prep/image-21_gyw1v6.png",
            onClick() {
                alert("yooo")
            }
        },

        {
            title: "Hardware and low-level",
            description: "Terminology related to OOP, inheritance, etc.",
            image: "https://res.cloudinary.com/dbdtfa9qb/image/upload/v1634247749/interview-prep/christian-wiediger-8WFcelVBOoI-unsplash_dmxgkn.jpg",
            onClick() {
                alert("yooo")
            }
        },

        {
            title: "DevOps",
            description: "Terminology related to OOP, inheritance, etc.",
            image: "https://res.cloudinary.com/dbdtfa9qb/image/upload/v1634247744/interview-prep/01_DevSecOps-DevSecOps-1-scaled-e1624558766799_q36w7w.jpg",
            onClick() {
                alert("yooo")
            }
        },

       

        {
            title: "Data",
            description: "Terminology related to OOP, inheritance, etc.",
            image: "https://res.cloudinary.com/dbdtfa9qb/image/upload/v1634247746/interview-prep/franki-chamaki-z4H9MYmWIMA-unsplash_urblp2.jpg",
            onClick() {
                alert("yooo")
            }
        },

        {
            title: "Databases",
            description: "Terminology related to OOP, inheritance, etc.",
            image: "https://res.cloudinary.com/dbdtfa9qb/image/upload/v1634247744/interview-prep/2135-database_management_software_vtjswv.webp",
            onClick() {
                alert("yooo")
            }
        },

        {
            title: "Functional programming",
            description: "Terminology related to OOP, inheritance, etc.",
            image: "https://res.cloudinary.com/dbdtfa9qb/image/upload/v1634249796/interview-prep/lambda_hh1hxp.jpg",
            onClick() {
                alert("yooo")
            }
        },

    ]

    return (
        <div className={styles.container}>
            {categories.map(category => 
                <Category title={category.title} 
                handleClick={category.onClick}
                description={category.description}
                image={category.image}/>
            )}
            
        </div>
    )
}
