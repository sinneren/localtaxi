import React, { Component } from 'react';
import axios from 'axios';

import { Button, Form, Columns } from "react-bulma-components/full";

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
            <Columns>
                <Columns.Column>
                    <Form.Input
                        type="email"
                        ref="emailField"
                        />
                </Columns.Column>
                <Columns.Column>
                    <Form.Input
                        type="password"
                        ref="passwordField"
                    />
                </Columns.Column>
                <Columns.Column>
                    <Button
                        color="primary"
                        onClick={this.handleSubmit}
                        >Register</Button>
                </Columns.Column>
            </Columns>
        );
    }
}

export default App;
