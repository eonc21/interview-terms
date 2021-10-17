import React, { ReactElement } from 'react'
import Collapsible from 'react-collapsible';
import './css/Collapsable.css';


interface Props {
    term: string,
    explanation: string,
}

export default function Collapsable({term, explanation}: Props): ReactElement {
    return (
        <div className="small">
            <Collapsible trigger={term}>
            <p>
                {explanation}
            </p>
            {/* <p>
                It can even be another Collapsible component. Check out the next
                section!
            </p> */}
    </Collapsible>
        </div>
    )
}
