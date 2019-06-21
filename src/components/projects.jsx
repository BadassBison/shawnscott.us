import React from 'react';
import { Link } from 'react-router-dom';
import Project1 from './projects/uncappd';
import Project2 from './projects/scouts_closet';
import Project3 from './projects/maze_runner';
import Project4 from './projects/dungeon_smash';
import Project5 from './projects/color_game';
import Project6 from './projects/pong';
import Project7 from './projects/paintour';
import Project8 from './projects/letter_game';
import Footer from './footer';

class Projects extends React.Component {

    toggleGif(e, ext) {
        let src = e.target.name;
        e.target.src = `assets/${src}${ext}`;
    }

    componentDidMount() {
        let imgs = document.querySelectorAll("img");
        imgs.forEach(img => {
            img.addEventListener("mouseover", e => this.toggleGif(e, ".gif"));
            img.addEventListener("mouseout", e => this.toggleGif(e, ".png"))
        })
    }

    render() { 

        return (
            <>
                <div className="proj-img1">
                    <div className="ptext">
                        <span className="border project-head">
                            <h1>Shawn Scott</h1>
                            <h2>Software Engineer</h2>
                        </span>
                    </div>
                </div>

                <aside className="projectAside">
                    <Link to="/"><span className="links"><i className="fas fa-chevron-circle-left"></i>Home</span></Link>
                    <Link to="/about"><span className="links">About<i className="fas fa-chevron-circle-right"></i></span></Link>
                </aside>
                
                <div className="projects">
                    <Project1 />
                    <Project2 />
                    <Project3 />
                    <Project4 />
                    <Project5 />
                    <Project6 />
                    <Project7 />
                    <Project8 />
                </div> 

                <Footer />
            </>
        )
    }
}

export default Projects;