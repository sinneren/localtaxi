import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const email = this.refs.emailField.value;
        const password = this.refs.passwordField.value;

        axios.post('/account/',{
            email: email,
            password: password,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
        <div className="App">
            <header className="App-header">
            <input type="email" ref="emailField" />
            <input type="password" ref="passwordField" />
            <button onClick={this.handleSubmit}>Register</button>
            </header>
        </div>
        );
    }
}

export default App;
