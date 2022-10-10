import React, { Component } from "react";
import headerImage from '../images/desktop/image-hero.jpg';
import './header.scss';
import Navbar from "./Navbar.jsx";

class Header extends Component {
    render() {
        return (

            <header className="header">
                <Navbar />
                {/* <div>
                        <img className="header__image" src={headerImage}></img>
                    </div> */}
                <aside>
                    <div className="header__title">
                        <h1>
                            INMERSE EXPERIENCES THAT DELIVER
                        </h1>
                    </div>
                </aside>
            </header>

        )
    }
}
export default Header;