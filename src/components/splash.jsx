import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    render() { 
        return (
            <>
                <video autoPlay muted loop id="myVideo">
                    <source src="assets/beach.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>

                <section>
                    <p>"Daddy, Dreamer, Developer..."</p>
                    <div className="img"><img src="assets/family.jpg" alt="My Family" /></div>
                </section>

                <aside>
                    <Link to="/about"><span><i className="fas fa-chevron-circle-left"></i>About</span></Link>
                    <Link to="/projects"><span>Projects<i className="fas fa-chevron-circle-right"></i></span></Link>
                </aside>
            </>
        )
    }
}

export default Splash;