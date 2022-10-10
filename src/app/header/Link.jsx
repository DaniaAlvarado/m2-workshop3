import React, { Component } from 'react';
import hamburguerIcon from "../images/icon-hamburger.svg";



class Link extends Component {

    listLinks = ["About", "Carrers", "Events", "Products", "Support"]


    render() {
        return (
            <ul>
                {
                    this.listLinks.map((element, index) => (
                        <li className='header__link' key={index}><a>{element}</a></li>
                    ))
                }
                <li><img className='header__hamburguer' src={hamburguerIcon}></img></li>
            </ul>
        )
    }
}

export default Link;