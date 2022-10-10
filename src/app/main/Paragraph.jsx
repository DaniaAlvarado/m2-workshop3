import React, { Component } from "react";
import './main.scss';

class Paragraph extends Component {
    render() {
        return (
            <div className="main__text">
                <span>THE LEADER IN INTERACTIVE VR</span>
                <p>Founded in 2011, Loopstudios has been producing world-class 
                virtual reality projects for some of the best companies around the 
                globe. Our award-winning creations have transformed 
                bussinesses through digital experiences that bind to their brand.</p>
            </div>
        )
    }
}

export default Paragraph;