import React from 'react';
import { Link } from 'react-router-dom';

class Projects extends React.Component {

    render() { 

        return (
            <>
                <div className="projects">
                    
                    <div className="project">
                        <h2>Dungeon Smash - <a href="https://github.com/BadassBison/Dungeon-Smash" target="_blank">Github</a></h2>
                        <a href="https://badassbison.github.io/Dungeon-Smash/" target="_blank">
                            <img src="assets/dungeonSmash.gif" alt="Dungeon Smash gif"/>
                        </a>
                    </div>

                    <div className="project">
                        <h2>Pong Clone - <a href="https://github.com/BadassBison/Pong_clone" target="_blank">Github</a></h2>
                        <a href="https://badassbison.github.io/Pong_clone/" target="_blank">
                            <img src="assets/pong.gif" alt="Pong gif"/>
                        </a>
                    </div>

                    <div className="project">
                        <h2>Color Game - <a href="https://github.com/BadassBison/Color_Game" target="_blank">Github</a></h2>
                        <a href="https://badassbison.github.io/Color_Game/" target="_blank">
                            <img src="assets/colorGame.gif" alt="Color game gif"/>
                        </a>
                    </div>

                    <div className="project">
                        <h2>Alphabet Game - <a href="https://github.com/BadassBison/Letter_Game" target="_blank">Github</a></h2>
                        <a href="https://badassbison.github.io/Letter_Game/" target="_blank">
                            <img src="assets/learningLetters.gif" alt="Alphabet game gif"/>
                        </a>
                    </div>
                </div> 
            </>
        )
    }
}

export default Projects;