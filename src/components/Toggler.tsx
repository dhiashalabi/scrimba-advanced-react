import React, { Component } from "react"

type TogglerState = {
    on: boolean
}

class Toggler extends Component<any, any> {
    state: TogglerState = {
        on: this.props.defaultOnValue
    }

    static defaultProps = {
        defaultOnValue: false
    }

    toggle = () => {
        this.setState((prevState: TogglerState) => ({ on: !prevState.on }))
    }

    render() {
        return (
            <div>
                {this.props.render({
                    on: this.state.on,
                    toggle: this.toggle
                })}
            </div>
        )
    }
}

export default Toggler