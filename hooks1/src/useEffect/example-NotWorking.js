import { Component } from "react";

class abc extends Component {
    state = {
        callName: 'ALI',
        users: ['abbas']
    }
    componentDidUpdate() {
        this.setState({
            users: API.Call(`users/${this.state.callName}`) // Abbas = 50
        })
    }

    render() {

        return  (<p>
                {users}
                <btn onChange={() => {
                    this.setState({
                        callName: this.state.callName === 'Abbas' ? 'ALI' : 'Abbas'
                    })
                }}></btn>
            </p>)
    }
}