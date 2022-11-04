import React from 'react'

function withExtraPropAdded(component: any) {
    const Component = component
    return function (props: any) {
        return (
            <Component anotherProp="Bla Bla Bla" {...props} />
        )
    }
}

export default withExtraPropAdded