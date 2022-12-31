import React from 'react';
import classes from '../assets/css/Home.module.css'
import Typewriter from "typewriter-effect"
import { FiMail } from "react-icons/fi";
import fazal from "../assets/images/fazal.png"

import { FaGithub,FaLinkedin,FaStackOverflow,FaTwitter,FaYoutube } from "react-icons/fa";
const Navbarcss = () => {
  return <div className={classes.fazal}>

      <img src={fazal} alt="Avatar" className={classes.img}>
      </img>

<div className={classes.heading}>

<h1 className={classes.head} >Hi, I'm Fazal Haroon.</h1>

<p1 className={classes.heading} ><Typewriter
options={{autoStart:true
,loop:false,
delay:50,
strings:

    " I'm a curious young man that loves to learn something new every day. I'm new in the tech world jobs, but with such a big goal of becoming an IT expert."

}}>

   
</Typewriter></p1>

<div className={classes.icon}>

<a style={{ color: 'inherit', textDecoration: 'inherit'}} href="kharoon187@gmail.com"><FiMail/></a>
<a style={{ color: 'inherit', textDecoration: 'inherit'}} href='https://github.com/Fazal-haroon' ><FaGithub/></a>
<a style={{ color: 'inherit', textDecoration: 'inherit'}} href='https://stackoverflow.com/users/9947525/fazal-haroon'><FaStackOverflow/></a>
<a style={{ color: 'inherit', textDecoration: 'inherit'}} href='https://www.linkedin.com/in/fazal-haroon-384b2013a/' ><FaLinkedin/></a>
<a style={{ color: 'inherit', textDecoration: 'inherit'}} href='https://www.youtube.com/c/fazaltuts4uf'><FaYoutube/></a>
<a style={{ color: 'inherit', textDecoration: 'inherit'}} href='https://twitter.com/FazalHaroon4'><FaTwitter/></a>

</div>

</div>
  </div>;
};

export default Navbarcss
