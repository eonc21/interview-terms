import React, { useState, useEffect } from 'react'
import { useRef, useLayoutEffect } from 'react'
import Category from './Category'
import { useHistory } from 'react-router-dom'
import styles from './css/CategoryList.module.css'

interface CategoryProvider {
    title: String, 
    terms?: Array<Object>,
    description: String,
    image: String,
    onClick: () => void,
}

interface TermProvider {
    term: string,
    explanation: String,
}

interface CategoryListProps {

}


export const CategoryList = (props: CategoryListProps) => {
    const firstUpdate = useRef(true);

    const history = useHistory();
    const [categories, setCategories] = useState<CategoryProvider[]>([])
    const [terms, setTerms] = useState<TermProvider[]>([])

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false
            return;
        }
        history.push({
            pathname: `/terms`, 
            state: { terms: terms }
        });
        console.log("i am a dumbass")
    }, [terms])

    useEffect(() => {

        setCategories(
            [ 
                {
                    title: "Object Oriented Programming",
                    
                    description: "Terminology related to OOP, inheritance, etc.",
                    image: "https://res.cloudinary.com/dbdtfa9qb/image/upload/v1634247750/interview-prep/joshua-aragon-BMnhuwFYr7w-unsplash_tk1pcu.jpg",
                    onClick() {
                        fetch('https://interview-preparation-cards.herokuapp.com/OOP')
                            .then(response => response.json())
                            .then(data =>{
                                setTerms(data)
                                
                                console.log(data)
                            })
                            .catch(err => console.error(err));
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
                        fetch('https://interview-preparation-cards.herokuapp.com/Hardware')
                            .then(response => response.json())
                            .then(data =>{
                                setTerms(data)
                                
                                console.log(data)
                            })
                            .catch(err => console.error(err));
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
        
            ])
        
        
        return () => {
            
        }
    }, [])
    
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
