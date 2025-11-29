import classes from '../assets/css/Home.module.css'
import Typewriter from "typewriter-effect"
import {FiMail} from "react-icons/fi";
import fazal from "../assets/images/fazal.png"
import React from "react";
import Swal from "sweetalert2";

import {FaGithub, FaLinkedin, FaStackOverflow, FaYoutube} from "react-icons/fa";

const Home = () => {

    const handleCopyEmail = () => {
        const email = "fazal.haroon01@gmail.com";

        navigator.clipboard.writeText(email);

        Swal.fire({
            title: `${email}`,
            text: `Email Copied! — paste it into your mail app to contact me.`,
            icon: "success",
            confirmButtonColor: "#01bf71",
            timer: 2200,
            timerProgressBar: true,
        });
    };


    return <div className={classes.fazal}>

        <img src={fazal} alt="Avatar" className={classes.img}>
        </img>

        <div className={classes.heading}>

            <h1 className={classes.head}>Hi, I'm Fazal Haroon.</h1>

            <p className={classes.subhead}>
                <Typewriter
                    options={{
                        strings: [
                            "Software Engineer",
                            "Full-Stack Developer",
                            "Problem Solver",
                            "Mobile App Developer"
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 35,
                        deleteSpeed: 20
                    }}
                />
            </p>

            <p className={classes.about}>
                Passionate about creating meaningful digital experiences and continuously learning and improving. </p>


            <div className={classes.icon}>
                <span onClick={handleCopyEmail} className={classes.copyMail}>
  <FiMail/>
</span>

                <a target="_blank"
                   rel="noreferrer" style={{color: 'inherit', textDecoration: 'inherit'}}
                   href='https://www.linkedin.com/in/fazalharoon/'><FaLinkedin/></a>
                <a target="_blank"
                   rel="noreferrer" style={{color: 'inherit', textDecoration: 'inherit'}}
                   href='https://github.com/Fazal-haroon'><FaGithub/></a>
                <a target="_blank"
                   rel="noreferrer" style={{color: 'inherit', textDecoration: 'inherit'}}
                   href='https://stackoverflow.com/users/9947525/fazal-haroon'><FaStackOverflow/></a>
                <a target="_blank"
                   rel="noreferrer" style={{color: 'inherit', textDecoration: 'inherit'}}
                   href="https://www.youtube.com/channel/UC2dVZU2FEe-JEXr7L8grk6Q"><FaYoutube/></a>
                {/*<a target="_blank"*/}
                {/*   rel="noreferrer" style={{color: 'inherit', textDecoration: 'inherit'}}*/}
                {/*   href='https://twitter.com/FazalHaroon4'><FaTwitter/></a>*/}
            </div>

        </div>
    </div>;
};

export default Home
