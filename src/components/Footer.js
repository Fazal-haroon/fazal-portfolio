import React from 'react';
import classes from '../assets/css/Footer.module.css';
import {FaEnvelope, FaGithub, FaLinkedin, FaStackOverflow, FaYoutube} from "react-icons/fa";

const Footer = () => {
    const email = "fazal.haroon01@gmail.com";

    return (
        <footer className={classes.footer}>
            <div className={classes.socialContainer}>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/fazalharoon/'
                   className={classes.icon}>
                    <FaLinkedin/>
                </a>
                <a target="_blank" rel="noreferrer" href='https://github.com/Fazal-haroon' className={classes.icon}>
                    <FaGithub/>
                </a>
                <a target="_blank" rel="noreferrer" href='https://stackoverflow.com/users/9947525/fazal-haroon'
                   className={classes.icon}>
                    <FaStackOverflow/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC2dVZU2FEe-JEXr7L8grk6Q"
                   className={classes.icon}>
                    <FaYoutube/>
                </a>
            </div>
            <div className={classes.emailContainer}>
                <a href={`mailto:${email}`} className={classes.emailLink}>
                    <FaEnvelope className={classes.emailIcon}/> {email}
                </a>
            </div>
        </footer>
    );
};

export default Footer;