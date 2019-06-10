import React from 'react';
import { Link } from 'react-router-dom';
import Section1 from './sections/section1';
import Section2 from './sections/section2';

class About extends React.Component {

    render() { 
        
        return (
            <>
                <div className="img1 pimg">
                    <div className="ptext">
                        <span className="border about-head">
                            <h1>Shawn Scott</h1>
                            <h2>Software Engineer</h2>
                        </span>
                    </div>
                </div>

                <aside className="aboutAside">
                    <Link to="/projects"><span className="links"><i className="fas fa-chevron-circle-left"></i>Projects</span></Link>
                    <Link to="/"><span className="links">Home<i className="fas fa-chevron-circle-right"></i></span></Link>
                </aside>

                <Section1 />


                <div className="img2 pimg">
                    <div className="ptext">
                        <span className="border">
                            
                        </span>
                    </div>
                </div>

                <Section2 />

                <div className="img3 pimg">
                    <div className="ptext">
                        <span className="border">
                            
                        </span>
                    </div>
                </div>

                <section className="section section-dark">
                    <h2>Section three</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur doloribus recusandae quia! Voluptate odit illo exercitationem animi vel dolores sed quaerat, eos ullam, blanditiis et in veritatis doloremque odio.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur doloribus recusandae quia! Voluptate odit illo exercitationem animi vel dolores sed quaerat, eos ullam, blanditiis et in veritatis doloremque odio.
                    </p>
                </section>

                <div className="img4 pimg">
                    <div className="ptext">
                        <span className="border">
                            
                        </span>
                    </div>
                </div>

                <section className="section section-dark">
                    <h2>Section four</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur doloribus recusandae quia! Voluptate odit illo exercitationem animi vel dolores sed quaerat, eos ullam, blanditiis et in veritatis doloremque odio.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur doloribus recusandae quia! Voluptate odit illo exercitationem animi vel dolores sed quaerat, eos ullam, blanditiis et in veritatis doloremque odio.
                        
                    </p>
                </section>

                <div className="img5 pimg">
                    <div className="ptext">
                        <span className="border">
                            
                        </span>
                    </div>
                </div>

                <section className="section section-light">
                    <h2>Section five</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur doloribus recusandae quia! Voluptate odit illo exercitationem animi vel dolores sed quaerat, eos ullam, blanditiis et in veritatis doloremque odio.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur doloribus recusandae quia! Voluptate odit illo exercitationem animi vel dolores sed quaerat, eos ullam, blanditiis et in veritatis doloremque odio.
                        
                    </p>
                </section>

                
            </>
        )
    }
}

export default About;