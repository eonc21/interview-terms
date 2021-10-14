import React, { ReactElement } from 'react'
import Collapsable from './Collapsable'

interface Props {
    
}

export default function ObjectOrientedProg({}: Props): ReactElement {
    return (
        <div>
            <Collapsable />
            <Collapsable />
            <Collapsable />
            <Collapsable />
            <Collapsable />
            <Collapsable />
            <Collapsable />
        </div>
    )
}
