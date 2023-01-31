import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevroneRight} from '@fortawesome/fontawesome-free-solid'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className="about-content">
            <h2>Hello, traveller!</h2>
            <h3>Thank you for stopping by!</h3>

            <h4>My name is Alisa and I am a Front End developer based in Toronto.</h4>
            <p>I’m a growth-oriented web developer, devoted to discipline, hard work and creative thinking to solve problems. As a Humber and Juno College alumni, I care a lot about web accessibility and strive to create easy-to-use responsive UI/UX.</p>

            <h4>Here are some things that I am capable of:</h4>
            
            <div className="skills">
                <ul>
                    <li>Web Accessibility</li>
                    <li>HTML5</li>
                    <li>CSS3 & SCSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>JQuery</li>
                </ul>
                <ul>
                    <li>WordPress</li>
                    <li>REST API</li>
                    <li>PHP</li>
                    <li>Git & GitHub</li>
                    <li>Visual Studio Code</li>
                    <li>Adobe Suite</li>
                </ul>
                <ul>
                    <li>Pair Programming</li>
                    <li>Mob Programming</li>
                    <li>Responsive Design</li>
                    <li>GoDaddy Management</li>
                    <li>Mailchimp Management</li>
                    <li>Server Management </li>
                </ul>
                <ul>
                    <li>Local by Flywheel </li>
                    <li>MAMP</li>
                    <li>Figma</li>
                    <li>Canva</li>
                    <li>Asana</li>
                    <li>GSuite</li>
                </ul>
            </div>

            <h4>On a friendly note, here are some boring facts about me:</h4>
            <ul>
                <li><FontAwesomeIcon icon={faChevronRight} />I’m left-handed.</li>
                <li><FontAwesomeIcon icon={faChevronRight} />My favourite book as of January 2023 is "Billy Summers" by Stephen King.</li>
                <li><FontAwesomeIcon icon={faChevronRight} />Spicy food and I are enimies.</li>
            </ul>
        </div>
    )
}

export default About