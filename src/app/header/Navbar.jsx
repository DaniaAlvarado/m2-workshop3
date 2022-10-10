import React, { Component } from "react";
import logo from '../images/logo.svg';
import './header.scss';
import Link from "./Link.jsx";


class Navbar extends Component {
    render() {
        return (

            <nav className="header__nav">
                <div className="header__logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div>
                    <Link />
                </div>

            </nav>

        )
    }
}
export default Navbar;