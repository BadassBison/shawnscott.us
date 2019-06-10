import React from 'react';

const Section = () => {
    return (
        <section className="section section-light">
            <h2>A little about me...</h2>
            <p>
                Proud father of the 2 most beautiful girls in the world. They are my inspiration/motivation that drives me everyday.
            </p>
            <p>Quick Facts:</p>
            <ul>
                <li>Started coding in 2014 as a need for my business</li>
                <li>Built a full CMS as my first website</li>
                <li>Built an online retail store using PHP/MySQL while learning Accounting</li>
                <li>Completed App Academy's full stack bootcamp May 2019</li>
                <li>Have built over 25 full websites</li>
                <li>Have made over 15 games</li>
                <li>I paint and love great design in a website</li>
            </ul>
            <a className="resume" href="https://docs.google.com/document/d/1sAcUpG6S90p4le51b79duLSAkMa2ykbEMl7TbaB0BaA/edit?usp=sharing" target="_blank">Resume</a>
        </section>
    )
}

export default Section;