import React, { Component } from 'react';
import { Button, Form, Columns, Heading } from "react-bulma-components/full";

const PAGE_TITLE = 'Регистрация';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.actions.signupRequest(this.state);
    }
    handleChange = (event) => {
        const target = event.currentTarget;

        this.setState({
            [target.name]: target.value
        })
    }
    componentDidMount() {
        document.title = PAGE_TITLE;
    }
    render() {
        return (
            <>
                <Columns>
                    <Columns.Column>
                        <Heading>{PAGE_TITLE}</Heading>
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
                    >Register</Button>
                </Columns.Column>
                </Columns>
            </>
        );
    }
}
export default SignUp;