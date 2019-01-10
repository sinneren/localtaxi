import React, { Component } from 'react';
import { Hero, Heading, Container } from 'react-bulma-components/full';

class Main extends Component {
    componentDidMount() {
        document.title = this.props.title;
    }
    render() {
        return (
            <Hero color="primary" gradient>
                <Hero.Body>
                    <Container>
                        <Heading>Hero title Primary</Heading>
                        <Heading subtitle size={3}>
                            Subtitle
                        </Heading>
                    </Container>
                </Hero.Body>
            </Hero>
        );
    }
}

export default Main;
