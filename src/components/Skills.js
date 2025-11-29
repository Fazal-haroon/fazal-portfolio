import React, {useEffect} from 'react';
import classes from '../assets/css/Skills.module.css'
import {FaAngular, FaAws, FaBootstrap, FaCss3, FaHtml5, FaJava, FaJenkins, FaJira, FaApple, FaAndroid, FaFileInvoice} from 'react-icons/fa';
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
    SiTypescript,
    SiIonic,
    SiLaravel,
    SiPhp
} from "react-icons/si";
import {FiFigma} from 'react-icons/fi';
import {DiGit} from 'react-icons/di';
import {GrDocker, GrGithub, GrMysql} from 'react-icons/gr';
import "aos/dist/aos.css"
import Aos from "aos"

const Skills = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <div className={classes.fazal}>

            <h3 className={classes.sectionTitle}>
                Technologies I work with:
            </h3>

            <p className={classes.subText}>From frontend and backend to deployment and tools</p>

            {/* ================= FRONTEND ================= */}
            <h3 className={classes.sectionTitle}>Frontend</h3>
            <div data-aos-once="true" data-aos="zoom-out" className={classes.tech}>

                <div className={classes.box}>
                    <FaHtml5/>
                    <p1>HTML5</p1>
                </div>

                <div className={classes.box}>
                    <FaCss3/>
                    <p1>CSS3</p1>
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
                    <p1>TypeScript</p1>
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

                <div className={classes.box}>
                    <SiIonic/>
                    <p1>Ionic</p1>
                </div>

                <div className={classes.box}>
                    <FiFigma/>
                    <p1>Figma</p1>
                </div>

            </div>

            {/* ================= BACKEND ================= */}
            <h3 className={classes.sectionTitle}>Backend</h3>
            <div data-aos="zoom-out" data-aos-once="true" className={classes.tech}>

                <div className={classes.box}>
                    <FaJava/>
                    <p1>Java</p1>
                </div>

                <div className={classes.box}>
                    <SiSpring/>
                    <p1>Spring</p1>
                </div>

                <div className={classes.box}>
                    <SiSpringboot/>
                    <p1>Spring Boot</p1>
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

                <div className={classes.box}>
                    <SiJava/>
                    <p1>Microservices</p1>
                </div>

                <div className={classes.box}>
                    <SiJava/>
                    <p1>REST / SOAP Services</p1>
                </div>

                <div className={classes.box}>
                    <SiHibernate/>
                    <p1>Hibernate</p1>
                </div>

                <div className={classes.box}>
                    <SiLaravel/>
                    <p1>Laravel</p1>
                </div>

                <div className={classes.box}>
                    <GrMysql/>
                    <p1>MySQL</p1>
                </div>

                <div className={classes.box}>
                    <SiMongodb/>
                    <p1>MongoDB</p1>
                </div>

            </div>

            {/* ================= DEPLOYMENT ================= */}
            <h3 className={classes.sectionTitle}>Deployment</h3>
            <div data-aos="zoom-out" data-aos-once="true" className={classes.tech}>

                <div className={classes.box}>
                    <DiGit/>
                    <p1>Git</p1>
                </div>

                <div className={classes.box}>
                    <GrGithub/>
                    <p1>GitHub</p1>
                </div>

                <div className={classes.box}>
                    <SiAzurepipelines/>
                    <p1>CI / CD</p1>
                </div>

                <div className={classes.box}>
                    <FaJenkins/>
                    <p1>Jenkins</p1>
                </div>

                <div className={classes.box}>
                    <GrDocker/>
                    <p1>Docker</p1>
                </div>

                <div className={classes.box}>
                    <SiNetlify/>
                    <p1>Netlify</p1>
                </div>

                <div className={classes.box}>
                    <FaAws/>
                    <p1>AWS</p1>
                </div>

                <div className={classes.box}>
                    <FaJira/>
                    <p1>Jira</p1>
                </div>

            </div>

            {/* ================= TOOLS & PLATFORMS ================= */}
            <h3 className={classes.sectionTitle}>Tools & Platforms</h3>
            <div data-aos="zoom-out" data-aos-once="true" className={classes.tech}>

                <div className={classes.box}>
                    <FaJava/>
                    <p1>IntelliJ IDEA</p1>
                </div>

                <div className={classes.box}>
                    <SiJavascript/>
                    <p1>WebStorm</p1>
                </div>

                <div className={classes.box}>
                    <SiPhp/>
                    <p1>PhpStorm</p1>
                </div>

                <div className={classes.box}>
                    <SiReact/>
                    <p1>VS Code</p1>
                </div>

                <div className={classes.box}>
                    <SiPostman/>
                    <p1>Postman</p1>
                </div>

                <div className={classes.box}>
                    <SiPostman/>
                    <p1>Swagger / OpenAPI</p1>
                </div>

                <div className={classes.box}>
                    <FaFileInvoice/>
                    <p1>JasperReports</p1>
                </div>

                <div className={classes.box}>
                    <FaApple/>
                    <p1>Xcode</p1>
                </div>

                <div className={classes.box}>
                    <FaAndroid/>
                    <p1>Android Studio</p1>
                </div>

            </div>

        </div>
    );
};

export default Skills;
