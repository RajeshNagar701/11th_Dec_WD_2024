/*
Using the state Object
Refer to the state object anywhere in the component by using the 

constructor(){
    super();
    this.state = {
            name: "Rajesh Nagar",
    }
}

print : {this.state.name}


Changing the state Object
To change a value in the state object, use the this.setState() method.

this.setState({color: "blue"})

*/



import React, { Component } from 'react'
import Class_img from './Class_img';

export class Class_state extends Component {

    constructor() {
        super();
        this.state = {
            name: "Rajesh Nagar",
            num: 1,
            name: "Krupali Yadav",
            age: 33,
            isImage: true
        };

    }
    render() {
        return (
            <div className='container mt-5'>
                <button onClick={() => this.setState({ name: "Prakash Nagar" })}>Change</button>
                <h1>Hi my name is : {this.state.name}</h1>

                <hr />
                <button onClick={() => this.setState({ name: "shrishti Shakya", age: 30 })}>Change</button>
                <h1>Name is : {this.state.name} and my age is {this.state.age} </h1>

                <hr />

                <button onClick={() => this.setState({ num: this.state.num + 1 })}>+</button>
                <h1>{this.state.num}</h1>
                <button onClick={() => this.setState({ num: this.state.num - 1 })}>-</button>

                <hr />
                <button onClick={() => this.setState({ isImage: false })}>Hide</button>
                <button onClick={() => this.setState({ isImage: true })}>Show</button>
                <button onClick={() => this.setState({ isImage: !this.state.isImage })}>Hide/Show</button>
                {
                    this.state.isImage ? <Class_img /> : null
                }

                <br /><br /><br /><br /><br />
            </div>
        )
    }
}

export default Class_state