import React from "react";

export default class Form extends React.Component {
    state = {
        firstName: '',
        email: '',
        massage: '',
        select: '',
        subscription:false

    }
    change = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onChange =(e)=>{
        this.setState({ [e.target.name]: e.target.checked })
    }
    validit = () => {
        if (this.state.firstName.length < 4) {
            alert('4 dan kam bolmasligi kk')
        }
    }
    validitEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.state.email)) {
            alert('email is not work')
        }
    }
    render() {
        const {email} = this.state
        return (
            <div>
                <h1>Form</h1>
                {/* <input
                    type="text"
                    placeholder="FirstName"
                    name="firstName"
                    value={firstName}
                    onChange={this.change}
                    onBlur={this.validit}
                />
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={this.change}
                    onBlur={this.validitEmail}
                />
                <textarea
                    name="massage"
                    value={massage}
                    onChange={this.change}
                    placeholder="massage"
                    onBlur={this.validit}
                ></textarea> 
                <select name="select" value={select} onChange={this.change}>
                    <option ></option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select> */}
                {/* <label>
                    <input type='checkbox' name='subscription' checked={subscription} onChange={this.onChange}/>subscription
                </label> */}
                <input 
                type="email"
                placeholder="email"
                name='email'
                onChange={this.change}
                value={email}
                />
            </div>
        )
    }
}




