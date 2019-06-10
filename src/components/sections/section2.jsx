import React from 'react';

class Section extends React.Component {
    
    toggleInfo(e) {
        e.target.nextSibling.classList.toggle("hidden");
    }

    componentDidMount() {
        let skills = document.querySelectorAll(".skill-wrapper .skillImg img");
        skills.forEach(skill => {
            skill.addEventListener("mouseover", e => this.toggleInfo(e))
            skill.addEventListener("mouseout", e => this.toggleInfo(e))
        })
    }

    render() {
        return (
            <section className="section section-light">
                <h2>My Software Skills</h2>
                <div className="skill-wrapper">
                    <a href="https://reactjs.org/" className="skillImg" target="_blank">
                        <img src="assets/react-logo-256.png" name="React.js" alt="React" />
                        <div className="skillInfo hidden"><div className="arrow"></div><p>React</p></div>
                    </a>
                    <a href="https://redux.js.org/" className="skillImg" target="_blank">
                        <img src="assets/redux-logo-256.png" name="Redux" alt="redux" />
                        <div className="skillInfo hidden"><div className="arrow"></div><p>Redux</p></div>
                    </a>
                    <a href="https://nodejs.org/en/" className="skillImg" target="_blank">
                        <img src="assets/nodejs-logo-256.png" name="Node.js" alt="nodejs" />
                        <div className="skillInfo hidden"><div className="arrow"></div><p>Node.js</p></div>
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="skillImg" target="_blank">
                        <img src="assets/javascript-logo-256.png" name="JavaScript" alt="javascript" />
                        <div className="skillInfo hidden"><div className="arrow"></div><p>JavaScript</p></div>
                    </a>
                    <a href="https://webpack.js.org/" className="skillImg" target="_blank">
                        <img src="assets/webpack-logo-256.png" name="Webpack" alt="webpack" />
                        <div className="skillInfo hidden"><div className="arrow"></div><p>Webpack</p></div>
                    </a>
                    <a href="https://www.npmjs.com/" className="skillImg" target="_blank">
                        <img src="assets/npm-logo-256.png" name="NPM" alt="npm" />
                        <div className="skillInfo hidden"><div className="arrow"></div><p>NPM</p></div>
                    </a>
                    <a href="https://www.w3.org/html/" className="skillImg" target="_blank">
                        <img src="assets/html-logo-256.png" name="HTML" alt="html" />
                        <div className="skillInfo hidden"><div className="arrow"></div><p>HTML</p></div>
                    </a>
                    <a href="https://www.mongodb.com/" className="skillImg" target="_blank">
                        <img src="assets/mongodb-logo-256.png" name="MongoDB" alt="mongodb" />
                        <div className="skillInfo hidden"><div className="arrow"></div><p>MongoDB</p></div>
                    </a>
                    <a href="https://www.postgresql.org/" className="skillImg" target="_blank">
                        <img src="assets/postgresql-logo-256.png" name="PostgreSQL" alt="postgresql" />
                        <div className="skillInfo hidden"><div className="arrow"></div><p>PostgreSQL</p></div>
                    </a>
                    <a href="https://www.w3.org/Style/CSS/" className="skillImg" target="_blank">
                        <img src="assets/css-logo-256.png" name="CSS" alt="css" />
                        <div className="skillInfo hidden"><div className="arrow"></div><p>CSS</p></div>
                    </a>
                    <a href="https://getbootstrap.com/" className="skillImg" target="_blank">
                        <img src="assets/bootstrap-logo-256.png" name="Bootstrap" alt="bootstrap" />
                        <div className="skillInfo hidden"><div className="arrow"></div><p>BootStrap</p></div>
                    </a>
                    <a href="https://www.mysql.com/" className="skillImg" target="_blank">
                        <img src="assets/mysql-logo-256.png" name="MySQL" alt="mysql" />
                        <div className="skillInfo hidden"><div className="arrow"></div><p>MySQL</p></div>
                    </a>
                    <a href="https://ruby-doc.org/" className="skillImg" target="_blank">
                        <img src="assets/ruby-logo-256.png" name="Ruby" alt="ruby" />
                        <div className="skillInfo hidden"><div className="arrow"></div><p>Ruby</p></div>
                    </a>
                    <a href="https://rubyonrails.org/" className="skillImg" target="_blank">
                        <img src="assets/rails-logo-256.png" name="Rails" alt="rails" />
                        <div className="skillInfo hidden"><div className="arrow"></div><p>Rails</p></div>
                    </a>
                    <a href="https://php.net/" className="skillImg" target="_blank">
                        <img src="assets/php-logo-256.png" name="PHP" alt="php" />
                        <div className="skillInfo hidden"><div className="arrow"></div><p>PHP</p></div>
                    </a>
                </div>
            </section>
        )
    }
}

export default Section;