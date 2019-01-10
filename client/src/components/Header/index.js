import React, { Component } from 'react';
import { Navbar } from 'react-bulma-components/full';
import { Link } from "react-router-dom";
import cookies from 'browser-cookies';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userRequest } from '../../store/reducers/user/actions';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                id: null,
                email: null,
            }
        }
    }
    getUserData = () => {
        if (cookies.get('uid')) {
            this.props.actions.userRequest(cookies.get('uid'));
        }
    }
    componentDidMount() {
        this.getUserData();
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(this.props, prevProps)
    }

    render() {
        let auth = false;
        if (cookies.get('uid') ) {
            auth = true;
        }
        return (
            <Navbar
                color={'info'}
            >
                <Navbar.Menu>
                    <Navbar.Container>
                        <Link to="/" className="navbar-item">Главная</Link>
                        {auth ? '' : <>
                            <Link to="/signup" className="navbar-item">Регистрация</Link>
                            <Link to="/signin" className="navbar-item">Вход</Link>
                        </>}
                    </Navbar.Container>
                    <Navbar.Container position="end">
                        <Navbar.Item renderAs="li">
                            {this.props.state.email}
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ userRequest }, dispatch)
    }
};
function mapStateToProps(state) {
    return {
        state: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);