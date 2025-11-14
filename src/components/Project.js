import React, {useEffect} from 'react';
import classes from '../assets/css/Project.module.css'
import almaerp from "../assets/images/almaerp.png"
import almaerp1 from "../assets/images/almaerp1.png"
import globalpay1 from "../assets/images/globalpay1.png"
import globalpay2 from "../assets/images/globalpay2.png"
import globalpay3 from "../assets/images/globalpay3.png"
import globalpay4 from "../assets/images/globalpay4.png"
import globalpay5 from "../assets/images/globalpay5.png"
import titalk1 from "../assets/images/titalk1.png"
import titalk2 from "../assets/images/titalk2.png"
import fazaleamaal from "../assets/images/fazaleamal.png"
import fazaleamaal2 from "../assets/images/fazaleamal2.png"
import fazaleamaal3 from "../assets/images/fazaleamal3.png"
import fazaleamaal4 from "../assets/images/fazaileamaal4.png"
import tigerImg1 from "../assets/images/tiger1.png"
import tigerImg2 from "../assets/images/tiger2.png"
import ytImg1 from "../assets/images/Yt1.png"
import ytImg2 from "../assets/images/Yt2.png"
import ytImg3 from "../assets/images/Yt3.png"
import ytImgU1 from "../assets/images/yt4.png"
import hrmsImg1 from "../assets/images/hrms1.jpeg"
import hrmsImg2 from "../assets/images/hrms2.jpeg"
import hrmsImg3 from "../assets/images/hrms3.jpeg"
import Carousel from 'react-bootstrap/Carousel';
import "aos/dist/aos.css"
import Aos from "aos"

const Project = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
    return <>
        <div className={classes.fazal}>

            {/*7th Project*/}
            <div className={`${classes.img} ${classes.section}` } style={{marginTop: "00rem"}}>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={almaerp}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={almaerp1}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className={classes.pro}>
                    <div className={classes.content}>
                        <h1 className={classes.head} data-aos-once="true" data-aos="zoom-in">Almabani’s ERP</h1>
                        <a className={classes.link} href="https://erp.almabani.com/" target="_blank"
                           rel="noreferrer">AlmaERP</a>
                        <p className={classes.list}>
                            Developed and maintained Almabani’s HRMS ERP, delivering high reliability and strong performance.
                        </p>
                        <li className={classes.list}>
                            Tech: Java 11 · Spring Framework · Hibernate · OpenAPI/Swagger · Lombok · Spring Boot · Maven · Gradle · IntelliJ IDEA · WebStorm · TypeScript · JavaScript · Angular · MySQL · JasperReports · Git · Jira
                        </li>
                        <li className={classes.list}>
                            Security & Integration: Focused on reliability, performance, and comprehensive security across each layer of the system, ensuring safe integrations and consistent operation.
                        </li>
                    </div>
                    <div/>
                </div>
            </div>

            {/*6th Project*/}
            <div className={`${classes.img} ${classes.section}` } style={{marginTop: "00rem"}}>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={globalpay1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={globalpay2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={globalpay3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item><Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={globalpay4}
                        alt="fourth slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item><Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={globalpay5}
                        alt="fifth slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                <div className={classes.pro}>
                    <div className={classes.content}>
                        <h1 className={classes.head} data-aos-once="true" data-aos="zoom-in">Payment Gateway</h1>
                        <p className={classes.link} href="">GlobalPay</p>
                        <p className={classes.list}>
                            Payment gateway system — monolithic architecture; full-stack delivery with Angular (frontend) and Spring Boot (backend).
                        </p>
                        <li className={classes.list}>
                            Tech: Java 8 · RESTful Web Services · Spring Framework · Hibernate · OpenAPI/Swagger · Lombok · Spring Boot · JWT · Maven · TypeScript · JavaScript · Angular · MySQL · GitHub · Jira
                        </li>
                    </div>
                    <div/>
                </div>
            </div>

            {/*5th Project*/}
            <div className={`${classes.img} ${classes.section}`} style={{marginTop: "00rem"}}>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={titalk1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={titalk2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className={classes.pro}>
                    <div className={classes.content}>
                        <h1 className={classes.head} data-aos-once="true" data-aos="zoom-in">Chat Application - TiTalk (WeChat)</h1>
                        <a className={classes.link} href="https://ltsql.ql-lts888666.com/login" target="_blank"
                           rel="noreferrer">TiTalk</a>
                        <p className={classes.list}>
                            Chat application — microservices architecture; backend services built for scalable, real-time messaging.
                        </p>
                        <li className={classes.list}>
                            Tech: Java 8 · IntelliJ IDEA · RESTful Web Services · Spring Framework · MyBatis · OpenAPI/Swagger · Lombok · Spring Boot · JWT · Maven · TypeScript · JavaScript · Angular · Oracle · MySQL · Git · Jira · ZenTao Project Management System
                        </li>
                    </div>
                    <div/>
                </div>
            </div>
            {/*4th Project*/}
            <div className={`${classes.img} ${classes.section}`} style={{marginTop: "-32rem"}}>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={tigerImg1}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={tigerImg2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className={classes.pro}>
                    <div className={classes.content}>
                        <h1 className={classes.head} data-aos-once="true" data-aos="zoom-in">Healthcare - Tiger</h1>
                        <a className={classes.link} href="https://tiger.siparadigm.com/tiger/" target="_blank"
                           rel="noreferrer">Tiger</a>
                        <p className={classes.list}>
                            Web-based laboratory management system for a U.S. healthcare organization, streamlining test case and results workflows.
                        </p>
                        <li className={classes.list}>
                            Tech: Java 8 · JSF · PrimeFaces · Hibernate · Spring Boot · MariaDB · Jenkins (CI/CD) · Jira · Mirth Connect · Linux
                        </li>
                    </div>
                    <div/>
                </div>
            </div>
            {/*3rd Project*/}
            <div className={`${classes.img} ${classes.section}`} style={{marginTop: "-32rem"}}>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={hrmsImg1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={hrmsImg2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={hrmsImg3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className={classes.pro}>
                    <div className={classes.content}>
                        <h1 className={classes.head} data-aos-once="true" data-aos="zoom-in">HR Management System</h1>
                        <p className={classes.link} href="" >Final Year University Project</p>
                        <p className={classes.list}>
                            Final Year Project — microservices-based Human Resource Management System (UET Peshawar).
                        </p>
                        <li className={classes.list}>
                            Tech: Java 8 · OOP · Spring · Spring Boot · Spring Security · Spring Cloud Gateway · Netflix Eureka · Netflix Hystrix · Spring Data JPA · React · JavaScript · MySQL · Maven · Microservices Architecture
                        </li>
                    </div>
                    <div/>
                </div>
            </div>
            {/*2nd Project*/}
            <div className={`${classes.img} ${classes.section}`} style={{marginTop: "-25rem"}}>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ytImgU1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ytImg1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ytImg2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ytImg3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className={classes.pro}>
                    <div className={classes.content}>
                        <h1 className={classes.head} data-aos-once="true" data-aos="zoom-in">
                            Content Creator / Mentor
                        </h1>
                        <a className={classes.link} href="https://www.youtube.com/channel/UC2dVZU2FEe-JEXr7L8grk6Q" target="_blank"
                           rel="noreferrer">Fazal TechWorld</a>
                        <p className={classes.list}>
                            Created educational and tutorial-based content for a tech-focused YouTube channel with 23K+ subscribers, primarily targeting beginners and aspiring tech learners
                        </p>
                        <li className={classes.list}>
                            Technologies & Tools: YouTube · Adobe Premiere Pro · VideoScribe · Camtasia · Snagit · Canva · Snappa
                        </li>
                    </div>
                    <div/>
                </div>
            </div>
            {/*1st Project*/}
            <div className={`${classes.img} ${classes.section}`} style={{marginTop: "-25rem"}}>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={fazaleamaal}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={fazaleamaal2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={fazaleamaal3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={fazaleamaal4}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className={classes.pro}>
                    <div className={classes.content}>
                        <h1 className={classes.head} data-aos-once="true" data-aos="zoom-in">Fazail e Amaal</h1>
                        <a className={classes.link}
                           target="_blank"
                           rel="noreferrer"
                           href="https://play.google.com/store/apps/details?id=com.fazail.amaal.fazailsadqat.fazailedarood.fazailquran.fazailhaj.fazailamaal&hl=en_US&gl=US">Fazail-e-Amaal</a>
                        <p className={classes.list}>
                            Fazail-e-Amaal Islamic Book App.
                        </p>
                        <li className={classes.list}>
                            Tech: Java · OOP · Android Studio · Android SDK · XML · SQLite
                        </li>
                    </div>
                    <div/>
                </div>
            </div>
        </div>
    </>;
};

export default Project;
