import React, { Component } from "react"

type TogglerState = {
    on: boolean
}

class Toggler extends Component<any, any> {
    state: TogglerState = {
        on: this.props.defaultOnValue
    }
    toggle = () => {
        this.setState(function (prevState: TogglerState) {
            return {
                on: !prevState.on
            }
        })
    }

    render() {
        const Component = this.props.component
        return (
            <Component on={this.state.on} toggle={this.toggle} {...this.props} />
        )
    }
}


export function withToggler(component: any, optionsObj: any) {
    return function (props: any) {
        return (
            <Toggler component={component} defaultOnValue={optionsObj.defaultOnValue} {...props} />
        )
    }
}