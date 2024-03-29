import React, {useEffect} from 'react';
import classes from '../assets/css/Skills.module.css'
import {FaAngular, FaAws, FaBootstrap, FaCss3, FaHtml5, FaJava, FaJenkins, FaJira} from 'react-icons/fa';
import {
    SiAzurepipelines,
    SiHibernate,
    SiJava,
    SiJavascript,
    SiMongodb,
    SiNetlify,
    SiPostman,
    SiReact,
    SiRedux,
    SiSpring,
    SiSpringboot,
    SiSpringsecurity,
    SiTypescript
} from "react-icons/si"
import {FiFigma} from 'react-icons/fi';
import {DiGit} from 'react-icons/di';
import {GrDocker, GrGithub, GrMysql} from 'react-icons/gr';
import "aos/dist/aos.css"
import Aos from "aos"

const Skills = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return <div className={classes.fazal}>

        {/*frontend*/}

        <h3 className={classes.skills}>
            Tech I'm familiar with:
        </h3>

        <h1 className={classes.skills} style={{fontSize: "2.0rem"}}>Frontend</h1>
        <div data-aos-once="true" data-aos="zoom-out" className={classes.tech}>


            <div className={classes.box}>
                <FiFigma/>
                <p1>Figma</p1>
            </div>

            <div className={classes.box}>
                <FaHtml5/>
                <p1>Html5</p1>
            </div>

            <div className={classes.box}>
                <FaCss3/>
                <p1>Css3</p1>
            </div>

            <div className={classes.box}>
                <FaBootstrap/>
                <p1>Bootstrap</p1>
            </div>

            <div className={classes.box}>
                <SiJavascript/>
                <p1>JavaScript</p1>
            </div>


            <div className={classes.box}>
                <SiTypescript/>
                <p1>TypeSript</p1>
            </div>

            <div className={classes.box}>
                <FaAngular/>
                <p1>Angular</p1>
            </div>


            <div className={classes.box}>
                <SiReact/>
                <p1>React</p1>
            </div>


            <div className={classes.box}>
                <SiRedux/>
                <p1>Redux</p1>
            </div>

            {/*
<div className={classes.box} >
<SiTypescript/>
<p1>TypeSript</p1>
</div> */}

        </div>


        {/*backend*/}

        <h1 className={classes.skills} style={{fontSize: "2.0rem"}}>Backend</h1>
        <div data-aos="zoom-out" data-aos-once="true" className={classes.tech}>

            {/* <div className={classes.box} >
<GrNode/>
<p1>Node</p1>
</div>

<div className={classes.box} >
<SiExpress/>
<p1>Express</p1>
</div> */}

            <div className={classes.box}>
                <FaJava/>
                <p1>Java</p1>
            </div>


            <div className={classes.box}>
                <SiHibernate/>
                <p1>Hibernate</p1>
            </div>


            <div className={classes.box}>
                <SiJava/>
                <p1>Microservices</p1>
            </div>


            <div className={classes.box}>
                <SiJava/>
                <p1>Rest / Soap Services</p1>
            </div>

            <div className={classes.box}>
                <SiSpring/>
                <p1>Spring</p1>
            </div>

            <div className={classes.box}>
                <SiSpringboot/>
                <p1>Springboot</p1>
            </div>


            <div className={classes.box}>
                <SiSpring/>
                <p1>Spring Data</p1>
            </div>

            <div className={classes.box}>
                <SiSpringsecurity/>
                <p1>Spring Security</p1>
            </div>


            <div className={classes.box}>
                <SiSpringsecurity/>
                <p1>OAuth2</p1>
            </div>

            {/* <div className={classes.box} >
<SiOracle/>
<p1>Oracle</p1>
</div> */}

            {/* <div className={classes.box} >
<FaMicrosoft/>
<p1>ASP.net</p1>
</div> */}

            <div className={classes.box}>
                <SiPostman/>
                <p1>Postman</p1>
            </div>

            {/* <div className={classes.box} >
<SiGraphql/>
<p1>GraphQl</p1>
</div>

<div className={classes.box} >
<SiFirebase/>
<p1>Firebase</p1>
</div> */}

            <div className={classes.box}>
                <GrMysql/>
                <p1>Mysql</p1>
            </div>

            <div className={classes.box}>
                <SiMongodb/>
                <p1>Mongodb</p1>
            </div>

            {/* <div className={classes.box} >
<SiPostgresql/>
<p1>Postgresql</p1>
</div> */}

        </div>

        {/*deployment*/}

        <h1 className={classes.skills} style={{fontSize: "2.0rem"}}>Deployment</h1>
        <div data-aos="zoom-out" data-aos-once="true" className={classes.tech}>

            <div className={classes.box}>


                <GrDocker/>
                <p1>Docker</p1>
            </div>
            <div className={classes.box}>
                <SiAzurepipelines/>
                <p1>CI/CD</p1>
            </div>

            <div className={classes.box}>
                <GrGithub/>
                <p1>Gibhub</p1>
            </div>

            {/* <div className={classes.box} >
<SiJest/>
<p1>Jest</p1>
</div> */}

            <div className={classes.box}>
                <FaAws/>
                <p1>Aws</p1>
            </div>
            <div className={classes.box}>

                <FaJenkins/>
                <p1>Jenkins</p1>
            </div>
            <div className={classes.box}>

                <SiNetlify/>
                <p1>Netlify</p1>
            </div>

            <div className={classes.box}>
                <DiGit/>
                <p1>Git</p1>
            </div>


            <div className={classes.box}>
                <FaJira/>
                <p1>Jira</p1>
            </div>

        </div>

    </div>
};

export default Skills;
