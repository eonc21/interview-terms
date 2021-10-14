import React from 'react'
import Category from './Category'
import styles from './css/CategoryList.module.css'

interface CategoryListProps {
    
}

const categories : {title: String, description: String, image: String}[] = 
    [ 
        {
            title: "Object Oriented Programming",
            description: "Terminology related to OOP, inheritance, etc.",
            image: "https://res.cloudinary.com/dbdtfa9qb/image/upload/v1634247750/interview-prep/joshua-aragon-BMnhuwFYr7w-unsplash_tk1pcu.jpg",
        },

        {
            title: "Data Structures",
            description: "Terminology related to OOP, inheritance, etc.",
            image: "https://res.cloudinary.com/dbdtfa9qb/image/upload/v1634247747/interview-prep/image-21_gyw1v6.png",
        },

        {
            title: "Hardware and low-level",
            description: "Terminology related to OOP, inheritance, etc.",
            image: "https://res.cloudinary.com/dbdtfa9qb/image/upload/v1634247749/interview-prep/christian-wiediger-8WFcelVBOoI-unsplash_dmxgkn.jpg",
        },

        {
            title: "DevOps",
            description: "Terminology related to OOP, inheritance, etc.",
            image: "https://res.cloudinary.com/dbdtfa9qb/image/upload/v1634247744/interview-prep/01_DevSecOps-DevSecOps-1-scaled-e1624558766799_q36w7w.jpg",
        },

       

        {
            title: "Data",
            description: "Terminology related to OOP, inheritance, etc.",
            image: "https://res.cloudinary.com/dbdtfa9qb/image/upload/v1634247746/interview-prep/franki-chamaki-z4H9MYmWIMA-unsplash_urblp2.jpg",
        },

        {
            title: "Databases",
            description: "Terminology related to OOP, inheritance, etc.",
            image: "https://res.cloudinary.com/dbdtfa9qb/image/upload/v1634247744/interview-prep/2135-database_management_software_vtjswv.webp",
        },

        {
            title: "Functional programming",
            description: "Terminology related to OOP, inheritance, etc.",
            image: "https://res.cloudinary.com/dbdtfa9qb/image/upload/v1634249796/interview-prep/lambda_hh1hxp.jpg",
        },

      


    ]

export const CategoryList = (props: CategoryListProps) => {
    return (
        <div className={styles.container}>
            {categories.map(category => 
                <Category title={category.title} 
                description={category.description}
                image={category.image}/>
            )}
            
        </div>
    )
}
