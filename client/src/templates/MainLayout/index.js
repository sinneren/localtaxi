import React from 'react';
import { withRouter } from 'react-router';
import { Container, Section} from "react-bulma-components/full";

const Layout = ({ children, location: {pathname} }) => (
    <Section>
        <Container>
            {children}
        </Container>
    </Section>
)

export default withRouter(Layout);