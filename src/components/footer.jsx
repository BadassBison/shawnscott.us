import React from 'react';

const Footer = () => {
    let year = new Date().getFullYear();
    
    return (
        <section className="footer">
            <div className="footer1">
                <h3>Contact Info</h3>
                <p>Shawn.Scott.XD@gmail.com</p>
                <p>111403 Lochard St.</p>
                <p>Oakland, CA. 94605</p>
            </div>
            <div className="footer2">
                <h3>Social Media</h3>
                <a className="linkedIn-link" href='https://www.linkedin.com/in/shawscottdeveloper?trk=profile-badge' target="_blank">LinkedIn</a>
                <a className="github-link" href="https://github.com/BadassBison" aria-label="Follow @BadassBison on GitHub">Github</a>
            </div>
            <div className="footer3">
                <h3>Documents</h3>
                <a className="resume" href="https://docs.google.com/document/d/1sAcUpG6S90p4le51b79duLSAkMa2ykbEMl7TbaB0BaA/edit?usp=sharing" target="_blank">Resume</a>
            </div>
            <div className="footer4">
                <p>&copy; {year} Built by Shawn Scott</p>
            </div>
        </section>
    )
}

export default Footer;