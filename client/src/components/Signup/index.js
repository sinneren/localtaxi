import React, { Component } from 'react';
import { Button, Form, Columns, Heading } from "react-bulma-components/full";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
    state = {
        email: '',
        password: '',
    }
    handleSubmit = (event) => {
        event.preventDefault();

        this.props.actions.formRequest(this.state);
    }
    handleChange = (event) => {
        const target = event.currentTarget;

        this.setState({
            [target.name]: target.value
        })
    }
    render() {
        if (this.props.state._id) {
            return <Redirect push to="/" />
        }
        return (
            <>
                <Columns>
                    <Columns.Column>
                        <Heading>{this.props.title}</Heading>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column>
                        <Form.Input
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Columns.Column>
                    <Columns.Column>
                        <Form.Input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </Columns.Column>
                    <Columns.Column>
                    <Button
                        color="primary"
                        onClick={this.handleSubmit}
                        >{this.props.title}</Button>
                    </Columns.Column>
                </Columns>
            </>
        );
    }
}
export default SignUp;