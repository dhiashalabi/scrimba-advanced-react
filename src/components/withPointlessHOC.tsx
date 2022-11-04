import React from 'react'

function withPointlessHOC(component: any) {
    const Component = component
    return function (props: any) {
        return (
            <div>
                <h1>Pointless HOC</h1>
                <Component {...props} />
            </div>
        )
    }
}

export default withPointlessHOC