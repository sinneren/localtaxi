import React, { Component } from 'react';
import { Navbar } from 'react-bulma-components/full';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <Navbar
                color={'info'}
            >
                <Navbar.Menu>
                    <Navbar.Container>
                        <Link to="/" className="navbar-item">Главная</Link>
                        <Link to="/signup" className="navbar-item">Регистрация</Link>
                        <Link to="/signin" className="navbar-item">Вход</Link>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        )
    }
}