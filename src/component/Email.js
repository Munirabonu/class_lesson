import React from "react";

export default class Email extends React.Component {
    state = {
        email: '',
        submit:false
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onchesced =(e) =>{
        this.setState({ [e.target.name]: e.target.checked })
    }
    valition =()=>{
       
    }
    submitEmail =() => {
        const re=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
        if (!re.test(this.state.email)){
            alert ('email xato')
        }
        else if(!this.state.submit){
            alert('siz barchga shartlarga rozi emassiz')
        }
        else{
            this.setState({email:'',submit:false})
            alert('siz royhatdan o`tdingiz')
        }
    }
    
    render() {
        const { email,submit } = this.state
        return (
            <div>
                <h1>Email</h1>
                <input
                    type="text"
                    placeholder="email"
                    name='email'
                    value={email}
                    onChange={this.onChange}
                    onBlur={this.valition}
                />
                <br />
                <label>
                    <input
                        type='checkbox'
                        checked={submit}
                        name='submit'
                        onChange={this.onchesced}
                    />
                    siz barcha qoidalarga rozimisiz
                </label>
                <br />
                <button onClick={this.submitEmail}>
                    Submit
                </button>
            </div>
        )
    }
}