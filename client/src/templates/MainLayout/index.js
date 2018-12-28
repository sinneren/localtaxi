import React from 'react';
import { withRouter } from 'react-router';
import { Container, Section} from 'react-bulma-components/full';
import Header from '../../components/Header';

const Layout = ({ children, location: {pathname} }) => (
    <>
        <Header />
        <Section>
            <Container>
                {children}
            </Container>
        </Section>
    </>
)

export default withRouter(Layout);