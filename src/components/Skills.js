import React, {useEffect} from 'react';
import classes from '../assets/css/Skills.module.css';
import {
    FaAndroid, FaAngular, FaAws, FaBootstrap, FaCss3,
    FaFileInvoice, FaHtml5, FaJava, FaJenkins, FaJira,
    FaTerminal, FaTools
} from 'react-icons/fa';
import {
    SiHibernate, SiIonic, SiJavascript, SiLaravel,
    SiMongodb, SiNetlify, SiPostman, SiReact, SiRedux,
    SiSpring, SiSpringboot, SiTypescript, SiDocker,
    SiGithub, SiGit, SiIntellijidea, SiWebstorm, SiPhpstorm,
    SiVisualstudiocode, SiSwagger, SiAppstore
} from "react-icons/si";
import {FiFigma} from 'react-icons/fi';
import {DiGit, DiJava} from 'react-icons/di';
import {GrGithub, GrMysql} from 'react-icons/gr';
import "aos/dist/aos.css";
import Aos from "aos";

const Skills = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    const skillCategories = [
        {
            title: "Frontend",
            subtitle: "Modern user interfaces & interactive experiences",
            skills: [
                { name: "HTML5", icon: <FaHtml5 /> },
                { name: "CSS3", icon: <FaCss3 /> },
                { name: "Bootstrap", icon: <FaBootstrap /> },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "Angular", icon: <FaAngular /> },
                { name: "React", icon: <SiReact /> },
                { name: "Redux", icon: <SiRedux /> },
                { name: "Ionic", icon: <SiIonic /> },
                { name: "Figma", icon: <FiFigma /> },
            ]
        },
        {
            title: "Backend",
            subtitle: "Scalable architecture & robust services",
            skills: [
                { name: "Java", icon: <FaJava /> },
                { name: "Spring", icon: <SiSpring /> },
                { name: "Spring Boot", icon: <SiSpringboot /> },
                { name: "Spring Data", icon: <SiSpring /> },
                { name: "Spring Security", icon: <SiSpring /> },
                { name: "OAuth2", icon: <SiSpring /> },
                { name: "Microservices", icon: <SiSpring /> },
                { name: "REST / SOAP", icon: <SiPostman /> },
                { name: "Hibernate", icon: <SiHibernate /> },
                { name: "Laravel", icon: <SiLaravel /> },
                { name: "MySQL", icon: <GrMysql /> },
                { name: "MongoDB", icon: <SiMongodb /> },
            ]
        },
        {
            title: "Deployment",
            subtitle: "Reliable CI/CD & infrastructure management",
            skills: [
                { name: "Git", icon: <SiGit /> },
                { name: "GitHub", icon: <SiGithub /> },
                { name: "CI/CD", icon: <FaTerminal /> },
                { name: "Jenkins", icon: <FaJenkins /> },
                { name: "Docker", icon: <SiDocker /> },
                { name: "Netlify", icon: <SiNetlify /> },
                { name: "AWS", icon: <FaAws /> },
                { name: "Jira", icon: <FaJira /> },
            ]
        },
        {
            title: "Tools & Platforms",
            subtitle: "Specialized environments for modern development",
            skills: [
                { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
                { name: "WebStorm", icon: <SiWebstorm /> },
                { name: "PhpStorm", icon: <SiPhpstorm /> },
                { name: "VS Code", icon: <SiVisualstudiocode /> },
                { name: "Postman", icon: <SiPostman /> },
                { name: "Swagger / OpenAPI", icon: <SiSwagger /> },
                { name: "JasperReports", icon: <FaFileInvoice /> },
                { name: "Xcode", icon: <SiAppstore /> },
                { name: "Android Studio", icon: <FaAndroid /> },
            ]
        }
    ];

    return (
        <div className={classes.fazal}>
            <section className={classes.section}>
                <h2
                    className={classes.sectionTitle}
                    data-aos="zoom-in"
                    data-aos-once="true"
                >
                    <FaTools /> Skills
                </h2>
            <div className={classes.headerSection}>
                {/*<h2 className={classes.mainTitle}>Technical Expertise</h2>*/}
                <p className={classes.subTitle}>
                    A specialized stack focused on <span>Scalability</span>, <span>Performance</span>, and <span>Modern Architecture</span>.
                </p>
                {/*<div className={classes.divider}></div>*/}
            </div>


                <div className={classes.stackGrid}>
                    {skillCategories.map((category, catIdx) => (
                        <div key={catIdx} className={classes.categoryCard} data-reveal>
                            <div className={classes.categoryInfo}>
                                <h3 className={classes.categoryTitle}>{category.title}</h3>
                                <p className={classes.categorySubtitle}>{category.subtitle}</p>
                            </div>
                            <div className={classes.pillsContainer}>
                                {category.skills.map((skill, index) => (
                                    <div key={index} className={classes.skillPill}>
                                        <span className={classes.pillIcon}>{skill.icon}</span>
                                        <span className={classes.pillName}>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Skills;
