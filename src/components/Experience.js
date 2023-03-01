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

                    <h1 className={classes.Education} style={{fontSize: "2.3rem"}}>Bachelor's degree, Computer
                        Science</h1>

                    <h1 className={classes.Education} style={{fontSize: "1.5rem", color: "#01bf71"}}>University of
                        Engineering & Technology Peshawar</h1>

                    <h1 className={classes.Education} style={{fontSize: "1.3rem", color: "#fff"}}>2017-2021</h1>
                </div>


                <div className={classes.experience}>

                    <h1 className={classes.experience} style={{marginTop: "10%"}} data-aos-once="true"
                        data-aos="zoom-in">Experience :</h1>

                    <h1 className={classes.experience} style={{fontSize: "2.3rem"}}>Million Soft Technology</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.5rem", color: "#01bf71"}}>Java
                        Developer</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.3rem", color: "#fff"}}>Jul 2022 - Dec
                        2022</h1>

                    <p className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Worked on Chat
                        Application as Backend<span style={{color: "#fff"}}> Java </span>Developer.</p>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Chat Application
                        Project developed in <span style={{color: "#fff"}}>Microservices</span> Architecture.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Worked on Java
                        1.8, Spring Boot, MyBatis, MongoDB, Redis, Swagger, @ Custom Annotation, Handler interceptor,
                        and Filter.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Worked on a group
                        chat application, merging nine-member profile images one image, and the first 9 members of the
                        group.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Logging Request
                        and Response Body In Spring Boot and storing it in the database. Whenever we need a logging
                        feature, we just <br></br>add the custom annotation on the end-point and we store the data of
                        logging in the database.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Using ZenTao
                        Project Management System.
                    </li>
                    <a className={classes.experience} style={{fontSize: "1.2rem", color: "#fff",}}
                       href="https://ltsql.ql-lts888666.com/login">TiTalk</a>

                </div>


                {/*Experience*/}

                <div className={classes.experience}>


                    <h1 className={classes.experience} style={{fontSize: "2.3rem"}}>siParadigm Diagnostic
                        Informatics</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.5rem", color: "#01bf71"}}>Java
                        Developer</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.3rem", color: "#fff"}}>Oct 2021 - Sep
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
                        experience in Web development using Core- Java, JavaEE, Spring Framework, JSP, JSF, Servlet,
                        Spring, Spring-MVC, <br></br>Spring Security, JDBC, Hibernate, Microservices, Spring Boot, and
                        Spring JPA Jasper Reports.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Has a strong
                        ability to learn new technologies in a short span and implement them independently.
                    </li>
                    <a className={classes.experience} style={{fontSize: "1.2rem", color: "#fff",}}
                       href="https://tiger.siparadigm.com/tiger/">Tiger</a>

                </div>
                <div className={classes.experience}>


                    <h1 className={classes.experience} style={{fontSize: "2.3rem"}}>siParadigm Diagnostic
                        Informatics</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.5rem", color: "#01bf71"}}>DevOps | Support
                        Engineer</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.3rem", color: "#fff"}}>Jul 2020 - Oct
                        2021</h1>

                    <p className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Worked on
                        Healthcare Software as a<span style={{color: "#fff"}}> Support Engineer/DevOps </span>.</p>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Effective
                        documentation of issues and bugs.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Hands-on practice
                        with Jira/Agile, AWS, Ansible, Chef, Docker, Jenkins CI/CD, and Kubernetes.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Identified and
                        fixed Production and Testing environment issues.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Data fetching from
                        different databases on client/customer requests.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Server monitoring
                        and deployment using MobaXterm (Linux Command) and Linux fundamental.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Responding in a
                        timely manner to service issues and requests while working on IT Support Position.
                    </li>
                    <a className={classes.experience} style={{fontSize: "1.2rem", color: "#fff",}}
                       href="https://tiger.siparadigm.com/tiger/">Tiger</a>

                </div>
                <div className={classes.experience}>


                    <h1 className={classes.experience} style={{fontSize: "2.3rem"}}>Satsuma Droid Pvt. Ltd</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.5rem", color: "#01bf71"}}>Junior Java
                        Developer</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.3rem", color: "#fff"}}>Sep 2019 - Jul
                        2020</h1>

                    <p className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Worked on HRMS as
                        Backend <span style={{color: "#fff"}}>Junior Java</span> Developer.</p>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>A Human Resource
                        Management Solution developed in Microservices Architecture.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Technologies :
                        Java, Spring, Spring Boot, Spring Security, Spring Cloud API Gateway, Netflix Eureka, Netflix
                        Hystrix, Spring JPA, and MySQL Database.
                    </li>

                </div>

                <div className={classes.experience}>


                    <h1 className={classes.experience} style={{fontSize: "2.3rem"}}>Satsuma Droid Pvt. Ltd</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.5rem", color: "#01bf71"}}>Android Java
                        Developer(Internship)</h1>

                    <h1 className={classes.experience} style={{fontSize: "1.3rem", color: "#fff"}}>Jul 2019 - Sep
                        2019</h1>

                    <p className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Worked on Islamic
                        Book Android App as Android <span style={{color: "#fff"}}>Java</span> Developer.</p>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Fazail-E-Amaal
                        Islamic Book Application.
                    </li>
                    <li className={classes.experience} style={{fontSize: "1.2rem", color: "#01bf71"}}>Technologies :
                        Java, Android Studio, Android developer tools, XML, and SQLite Database.
                    </li>
                    <a className={classes.experience} style={{fontSize: "1.2rem", color: "#fff",}}
                       href="https://play.google.com/store/apps/details?id=com.fazail.amaal.fazailsadqat.fazailedarood.fazailquran.fazailhaj.fazailamaal&hl=en_US&gl=US">Fazal-E-Amaal</a>

                </div>
            </div>


        </div>
    )
}

export default Experience
