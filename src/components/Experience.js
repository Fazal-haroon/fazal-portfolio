import React from 'react'
import classes from '../assets/css/Experience.module.css'
import {useEffect} from 'react';
import "aos/dist/aos.css"
import Aos from "aos"


const Experience = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
    return (
        <div className={classes.fazal}>

            <div>

                {/*Education*/}

                <div className={classes.Education}>

                    <h1 className={classes.Education} data-aos-once="true" data-aos="zoom-in">Education :</h1>

                    <h1 className={classes.Education} style={{fontSize: "1.3rem"}}>Bachelor's degree, Computer
                        Science</h1>

                    <h1 className={classes.Education} style={{fontSize: "1.5rem", color: "#01bf71"}}>University of
                        Engineering & Technology Peshawar</h1>

                    <h1 className={classes.Education}
                        style={{fontSize: "1.3rem", color: "#fff", marginBottom: "1.5%"}}>2017-2021</h1>
                    <h1 className={classes.Education} style={{fontSize: "1.3rem"}}>Diploma of Information
                        Technology</h1>

                    <h1 className={classes.Education} style={{fontSize: "1.5rem", color: "#01bf71"}}>Khyber Pakhtunkhwa
                        Board of Technical Education Peshawar</h1>

                    <h1 className={classes.Education} style={{fontSize: "1.3rem", color: "#fff"}}>2015-2016</h1>
                </div>


                <div className={classes.experience}>

                    <h1 className={classes.experience} style={{marginTop: "2%"}} data-aos-once="true"
                        data-aos="zoom-in">Experience :</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.8rem"}}>Million Soft Technology</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.5rem", color: "#01bf71"}}>Java
                        Developer</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.1rem", color: "#fff"}}>Jul 2022 -
                        Present</h1>

                    <p className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Worked on Chat Application and Payment Gateway as Backend <span style={{color: "#fff"}}>Java</span> Developer.</p>

                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Chat Application
                        developed in<span style={{color: "#fff"}}> Microservices</span> Architecture.
                    </li>

                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Payment Gateway
                        system developed in<span style={{color: "#fff"}}> Monolithic</span> Architecture.
                    </li>

                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Documents the
                        following
                    </li>
                    <ul className={classes.experience} style={{fontSize: "1.0rem", color: "#01bf71"}}>
                        Preparing API Technical Design document - Before development a document for clearing all things
                        technically.
                    </ul>
                    <ul className={classes.experience} style={{fontSize: "1.0rem", color: "#01bf71"}}>
                        Preparing Technical Flow document - Understanding how our system will work diagrammatically.
                    </ul>
                    <ul className={classes.experience} style={{fontSize: "1.0rem", color: "#01bf71"}}>
                        Preparing Traceability Matrix Document - API Integration for integration team understanding.
                    </ul>
                    <ul className={classes.experience} style={{fontSize: "1.0rem", color: "#01bf71"}}>
                        Preparing Technical Design document - After UI Development user guide document.
                    </ul>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Development the
                        following
                    </li>
                    <ul className={classes.experience} style={{fontSize: "1.0rem", color: "#01bf71"}}>
                        Analyzing, and gathering the business requirements from the different stockholders and writing
                        the system specification document with the UI/UX elements.
                    </ul>
                    <ul className={classes.experience} style={{fontSize: "1.0rem", color: "#01bf71"}}>
                        Design the expected solution and how to plug it with the current running system including the
                        required DB and code changes.
                    </ul>
                    <ul className={classes.experience} style={{fontSize: "1.0rem", color: "#01bf71"}}>
                        Responsible for the full-stack development(Angular and Spring boot), maintenance, and support of
                        the running applications.
                    </ul>
                    <ul className={classes.experience} style={{fontSize: "1.0rem", color: "#01bf71"}}>
                        Optimize the Java code across all modules and monitor the application performance and debug
                        error logs.
                    </ul>
                    <ul className={classes.experience} style={{fontSize: "1.0rem", color: "#01bf71"}}>
                        Ensure the code quality and code standards are being followed.
                    </ul>
                    <ul className={classes.experience} style={{fontSize: "1.0rem", color: "#01bf71"}}>
                        Ensure timely delivery of the tasks assigned to the resources.
                    </ul>
                    <ul className={classes.experience} style={{fontSize: "1.0rem", color: "#01bf71"}}>
                        Production deployments and post-production support.
                    </ul>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Technologies :
                        Java 1.8 · IntelliJ IDEA · Web Services · Web Development · Spring Framework · Hibernate ·
                        MyBatis · Swagger API <br></br>· Lombok · Spring · Spring Boot · Maven · TypeScript · JavaScript
                        ·
                        Angular · Oracle · MySQL · GitHub · Jira · Zentao Project Management System
                    </li>

                    <a className={classes.experience} style={{fontSize: "1.1rem", color: "#fff",}}
                       href="https://ltsql.ql-lts888666.com/login">TiTalk</a>

                </div>


                {/*Experience*/}

                <div className={classes.experience}>


                    <h1 className={classes.experience} style={{fontSize: "1.8rem"}}>siParadigm Diagnostic
                        Informatics</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.5rem", color: "#01bf71"}}>Java
                        Developer</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.1rem", color: "#fff"}}>Oct 2021 - Sep
                        2022</h1>

                    <p className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Worked on
                        Healthcare Software as Backend<span style={{color: "#fff"}}> Java </span>Developer.</p>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>KT - Knowledge
                        Transfer/Transition and Handover. Official KT phase through documents. From Jul-2022 to Sep-2022
                        Online.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Worked on <span
                        style={{color: "#fff"}}>Java</span> and J2EE.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Hands-on
                        experience on Tomcat and WildFly JBoss Servers.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>JSF Framework and
                        Primefaces. Created Registration Process.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Knowledge of
                        creating restful Web Services.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>1+ years of
                        experience in Web development using Core- Java · JavaEE · Spring Framework · JSP · JSF · Servlet
                        · Spring<br></br> · Spring MVC · Spring Security · JDBC · Hibernate · Microservices · Spring
                        Boot ·
                        Spring JPA Jasper Reports.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Has a strong
                        ability to learn new technologies in a short span and implement them independently.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Technologies :
                        Java 1.8 · EJB · JSF · Primefaces · Hibernate · Spring Boot · MariaDB
                    </li>
                    <a className={classes.experience} style={{fontSize: "1.1rem", color: "#fff",}}
                       href="https://tiger.siparadigm.com/tiger/">Tiger</a>

                </div>
                <div className={classes.experience}>


                    <h1 className={classes.experience} style={{fontSize: "1.8rem"}}>siParadigm Diagnostic
                        Informatics</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.5rem", color: "#01bf71"}}>DevOps | Support
                        Engineer</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.1rem", color: "#fff"}}>Jul 2020 - Oct
                        2021</h1>

                    <p className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Worked on
                        Healthcare Software as a<span style={{color: "#fff"}}> Support Engineer/DevOps </span>.</p>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Effective
                        documentation of issues and bugs.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Hands-on practice
                        with Jira/Agile · AWS · Ansible · Chef · Docker · Jenkins CI/CD · Kubernetes.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Identified and
                        fixed Production and Testing environment issues.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Data fetching from
                        different databases on client/customer requests.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>HIPAA (privacy
                        law) - HL7 (messaging standard) with Mirth Connect (secure exchange of messages)
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Server monitoring
                        and deployment using MobaXterm (Linux Command) and Linux fundamental.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Responding in a
                        timely manner to service issues and requests while working on IT Support Position.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Technologies :
                        Java 1.8 · EJB · JSF · Primefaces · Hibernate · Spring Boot · MariaDB · Jira/Agile · AWS ·
                        Ansible · Chef · Docker · Jenkins CI/CD · Kubernetes · Mirth Connect
                    </li>
                    <a className={classes.experience} style={{fontSize: "1.1rem", color: "#fff",}}
                       href="https://tiger.siparadigm.com/tiger/">Tiger</a>

                </div>
                <div className={classes.experience}>


                    <h1 className={classes.experience} style={{fontSize: "1.8rem"}}>Satsuma Droid Pvt. Ltd</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.5rem", color: "#01bf71"}}>Junior Java
                        Developer</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.1rem", color: "#fff"}}>Sep 2019 - Jul
                        2020</h1>

                    <p className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Worked with <span
                        style={{color: "#fff"}}>Java</span> and Spring Boot as the backend to build a website HRMS.</p>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>A Human Resource
                        Management Solution developed in Microservices Architecture.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Description: The
                        employee management system has multiple modules and it was a role-based application.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Modules were the
                        HR Module, Employee Module, Finance Module, Leave Management System module, and news feed
                        module.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Technologies :
                        Java, Spring, Spring Boot, Spring Security, Spring Cloud API Gateway, Netflix Eureka, Netflix
                        Hystrix, Spring JPA, and MySQL Database.
                    </li>

                </div>

                <div className={classes.experience}>


                    <h1 className={classes.experience} style={{fontSize: "1.8rem"}}>Satsuma Droid Pvt. Ltd</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.5rem", color: "#01bf71"}}>Android Java
                        Developer(Internship)</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.1rem", color: "#fff"}}>Jul 2019 - Sep
                        2019</h1>

                    <p className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Worked on Islamic
                        Book Android App as Android <span style={{color: "#fff"}}>Java</span> Developer.</p>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Fazail-E-Amaal
                        Islamic Book Application.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Technologies :
                        Java, Android Studio, Android developer tools, XML, and SQLite Database.
                    </li>
                    <a className={classes.experience} style={{fontSize: "1.1rem", color: "#fff",}}
                       href="https://play.google.com/store/apps/details?id=com.fazail.amaal.fazailsadqat.fazailedarood.fazailquran.fazailhaj.fazailamaal&hl=en_US&gl=US">Fazal-E-Amaal</a>

                </div>
            </div>


        </div>
    )
}

export default Experience
