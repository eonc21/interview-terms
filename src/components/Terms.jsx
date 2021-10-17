import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Collapsable from './Collapsable'
import Title from './Title';


export default function Terms() {
    let location = useLocation();
    const [terms, setTerms] = useState(location.state.terms)
    // console.log("one term is", terms.map(term => term.map(t => t))); 


    return (
        <div className="App">
            <Title text={terms[0].category ==="OOP" ? "Object Oriented Programming" : terms[0].category }/>
            <div className="container">
            {terms.flatMap(term =>
                <Collapsable term={term.term}
                explanation={term.explanation}/>)}
            </div>
            
          
        </div>
    )
}
