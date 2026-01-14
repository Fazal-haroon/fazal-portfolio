import React, { useEffect } from 'react';
import classes from '../assets/css/Skills.module.css';
import {
    FaAndroid, FaAngular, FaApple, FaAws, FaBootstrap, FaCss3,
    FaFileInvoice, FaHtml5, FaJava, FaJenkins, FaJira
} from 'react-icons/fa';
import {
    SiAzurepipelines, SiHibernate, SiIonic, SiJavascript, SiLaravel,
    SiMongodb, SiNetlify, SiPhp, SiPostman, SiReact, SiRedux,
    SiSpring, SiSpringboot, SiSpringsecurity, SiTypescript, SiDocker
} from "react-icons/si";
import { FiFigma } from 'react-icons/fi';
import { DiGit, DiJava } from 'react-icons/di';
import { GrGithub, GrMysql } from 'react-icons/gr';
import "aos/dist/aos.css";
import Aos from "aos";

const Skills = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <div className={classes.fazal}>

            <div className={classes.headerSection}>
                {/*<h2 className={classes.mainTitle}>Technical Expertise</h2>*/}
                <p className={classes.subTitle}>
                    A specialized stack focused on <strong>Scalability</strong>, <strong>Performance</strong>, and <strong>Modern Architecture</strong>.
                </p>
                {/*<div className={classes.divider}></div>*/}
            </div>

            {/* ================= FRONTEND ================= */}
                <div className={classes.img} data-aos="fade-up" data-aos-once="true">
                    <h3 className={classes.sectionTitle}>Frontend</h3>
                    <div className={classes.tech}>
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
            </div>

            {/* ================= BACKEND ================= */}
                <div className={classes.img} data-aos="fade-up" data-aos-once="true">
                    <h3 className={classes.sectionTitle}>Backend</h3>
                    <div className={classes.tech}>
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
                    <DiJava/>
                    <p1>Microservices</p1>
                </div>

                <div className={classes.box}>
                    <DiJava/>
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
            </div>

            {/* ================= DEPLOYMENT ================= */}
                <div className={classes.img} data-aos="fade-up" data-aos-once="true">
                    <h3 className={classes.sectionTitle}>Deployment</h3>
                    <div className={classes.tech}>
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
                    <SiDocker/>
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
            </div>

            {/* ================= TOOLS & PLATFORMS ================= */}
            <div className={classes.img} data-aos="fade-up" data-aos-once="true">
                <h3 className={classes.sectionTitle}>Tools & Platforms</h3>
                <div className={classes.tech}>
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
        </div>
    );
};

export default Skills;
