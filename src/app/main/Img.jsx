import React, { Component } from 'react';
import deep from "../images/desktop/image-deep-earth.jpg";
import night from "../images/desktop/image-night-arcade.jpg";
import soccer from "../images/desktop/image-soccer-team.jpg";
import grid from "../images/desktop/image-grid.jpg";
import up from "../images/desktop/image-from-above.jpg";
import pocket from "../images/desktop/image-pocket-borealis.jpg"
import curiosity from "../images/desktop/image-curiosity.jpg"
import fisheye from "../images/desktop/image-fisheye.jpg"

class Img extends Component {

    listImg = [deep, night, soccer, grid, up, pocket, curiosity, fisheye]

    render() {
        return (
            <section className='main__section'>
                <nav>
                    <span>OUR CREATIONS</span>
                    <button>SEE ALL</button>
                </nav>
                <article>
                    {
                        this.listImg.map((element, index) => (
                            <img className='imgs' key={index} src={element}></img>
                        ))
                    }
                </article>
            </section>
        )
    }
}

export default Img;