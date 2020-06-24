import React from 'react';
import {Media} from 'reactstrap';

function About(){
    return(
        <div className="container about">
        <Media>
            <Media left href="#">
                <Media object src="/images/Picture3.jpg" alt="me" style={{height:90, marginRight:20}}></Media>
            </Media>
            <Media body>
                <Media heading>
                    About me
                </Media>
                My name is Kevin. Graduated from Arizona State University with degrees in Computer Informations System, Business Analytics and Supply Chain Management, I am currently learning front end development with React and NodeJs for the backend. I love building websites, and creating elegant interfaces for users.
            Playing the saxophone and listening to music always help me relax, and I enjoy learning more things in the future. 
            </Media>
        </Media>
        </div>
    )
}

export default About;