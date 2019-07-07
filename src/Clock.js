import React, { Component } from 'react'

export default class extends Component {
    state = {
        time: new Date()
    }
    componentDidMount() {
        setInterval(() => {
            this.updateTime();
        }, 1000)
    }
    updateTime = () => {
        this.setState({ time: new Date() })
    }
    render() {
        return (
            <h1>{this.state.time.toLocaleTimeString()}</h1>
        )
    }
}
