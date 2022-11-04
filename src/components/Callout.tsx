import React from 'react'

function Callout(props: any) {
    return (
        <div className="callout">
            {props.children}
        </div>
    )
}

export default Callout