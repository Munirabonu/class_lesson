import React from "react";

export default class CreateRef extends React.Component {
    constructor() {
        super();
        this.nameRef = React.createRef();
        this.numberRef = React.createRef();
        this.idRef = React.createRef();
    }
    handclick=(e)=>{
        e.preventDefault();
        if(this.numberRef.current.value.length<16){
            alert('dgfh')
            return
        }
    }
    click=()=>{
        console.log('aesadas');
    }
    
    render() {
        return (    
            <div>
                <form onSubmit={this.handclick}>
                    <input type="number" name='phone' placeholder='telefon raqam' ref={this.numberRef} />
                    <input type="number" name='id' placeholder='id'  ref={this.idRef}/>
                    <input type="text" name='name' placeholder='name' ref={this.nameRef}/>
                <button onClick={this.click}>send</button>
                </form>
            </div>
        )
    }
}