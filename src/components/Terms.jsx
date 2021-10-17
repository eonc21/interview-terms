import React, { ReactElement, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Collapsable from './Collapsable'

// interface Props {
    
// }

// type Term = {
//     term: string,
//     category: string,
//     explanation: string,
// }

// type StateType = {
//     terms: Array<Term>
// };


export default function Terms()  {
    let location = useLocation();
    const [terms, setTerms] = useState(location.state.terms)
    // console.log("one term is", terms.map(term => term.map(t => t))); 


    return (
        <div>
            {terms.flatMap(term =>
                <Collapsable term={term.term}
                explanation={term.explanation}/>)}
          
        </div>
    )
}
