import { Component } from 'react';

class Job extends Component {
    state = {
        count: 12                     
    }
    handclick =(val) => {
        this.setState({count:val})
    }
    render() {
        return (
            <div>
                <button>{this.state.count}</button>
                <button onClick={() => this.handclick(this.state.count+1)}>QOSHISH </button>
                <button onClick={() => this.handclick(this.state.count-1)}>AYRISH</button>
                <button onClick={() => this.setState({count:0})}>asl</button>
            </div>
        )
    }
}



export default Job;