import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

    constructor(props){
        super(props);
        this.nameAnimation = this.nameAnimation.bind(this);
    }

    nameAnimation() {
        let canvas = document.getElementsByTagName("canvas")[0];
        if (canvas) canvas.remove();
        let cSize, pLeft, pRight, pTop, pBottom;
        if (innerWidth > 620){
            cSize = innerWidth * 0.065
            pLeft = 80;
            pRight = 80;
            pTop = 70;
            pBottom = 80;
        } else { 
            cSize = innerWidth * 0.1;
            pLeft = cSize * 1.6 + 10;
            pRight = cSize * 0.5;
            pTop = 40;
            pBottom = 90;
        }

        let text = new Blotter.Text("Shawn Scott", {
            family: 'Montserrat',
            size: cSize,
            fill: "#000",
            paddingLeft: pLeft,
            paddingRight: pRight,
            paddingTop: pTop,
            paddingBottom: pBottom,
        })

        let material = new Blotter.RollingDistortMaterial();
        material.uniforms.uSineDistortSpread.value = .3
        material.uniforms.uSineDistortCycleCount.value = 0
        material.uniforms.uSineDistortAmplitude.value = .6
        material.uniforms.uNoiseDistortVolatility.value = 11
        material.uniforms.uNoiseDistortAmplitude.value = .01
        material.uniforms.uRotation.value = 210
        material.uniforms.uSpeed.value = .11

        let blotter = new Blotter(material, {
            texts: text
        })

        let scope = blotter.forText(text);

        scope.appendTo(document.body);
    }
    
    componentDidMount(){
        this.nameAnimation();
    }

    componentWillUnmount(){
        let canvas = document.getElementsByTagName("canvas")[0];
        if (canvas) canvas.remove();
    }

    render() { 
        
        const throttle = (method, scope) => {
            clearTimeout(method._tId);
            method._tId = setTimeout(function(){
                method.call(scope);
            }, 400);
        };
        
        window.onresize = () => throttle(this.nameAnimation, window);
        
        return (
            <>
                <video autoPlay muted loop id="myVideo">
                    <source src="assets/beach.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                
                <section className="splashSection">
                    <p>"Daddy, Dreamer, Developer..."</p>
                    <div className="img"><img src="assets/family.jpg" alt="My Family" /></div>
                </section>

                <aside>
                    <Link to="/about"><span className="links"><i className="fas fa-chevron-circle-left"></i>About</span></Link>
                    <Link to="/projects"><span className="links">Projects<i className="fas fa-chevron-circle-right"></i></span></Link>
                </aside>
            </>
        )
    }
}

export default Splash;