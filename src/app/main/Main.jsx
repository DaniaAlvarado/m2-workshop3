import React, { Component } from "react";
import interactiveImage from '../images/desktop/image-interactive.jpg';
import './main.scss';
import Paragraph from "./Paragraph.jsx";
import Img from "./Img.jsx";

class Main extends Component {
    render() {
        return (
            <main className="main">
                <div className="main__info">
                    <figure className="main__img">
                        <img src={interactiveImage} alt="interactive" />
                    </figure>
                    <Paragraph />
                </div>
                <Img />
            </main>
        )
    }
}

export default Main;