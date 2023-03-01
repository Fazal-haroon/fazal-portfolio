import React, {useEffect} from 'react';
import classes from '../assets/css/Project.module.css'
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
import tigerImg1 from "../assets/images/tiger1.png"
import tigerImg2 from "../assets/images/tiger2.png"
import ytImg1 from "../assets/images/Yt1.png"
import ytImg2 from "../assets/images/Yt2.png"
import ytImg3 from "../assets/images/Yt3.png"
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


            {/*6th Project*/}
            <div className={classes.img} style={{marginTop: "00rem"}}>

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

                        <h1 className={classes.head} data-aos-once="true" data-aos="zoom-in">Payment Gateway -
                            GlobalPay</h1>

                        <p className={classes.link} href="">GlobalPay</p>

                        <p className={classes.list}>Payment Gateway: GlobalPay - (backend and frontend)</p>

                        <li className={classes.list}>Skills : Java 1.8 · IntelliJ IDEA · Web Services · Web Development
                            · Spring Framework · Hibernate · Swagger API · Lombok · Spring · Spring Boot · Maven ·
                            TypeScript · JavaScript · Angular · Oracle · MySQL · GitHub · Jira
                        </li>

                    </div>
                    <div/>
                </div>
            </div>

            {/*5th Project*/}
            <div className={classes.img} style={{marginTop: "00rem"}}>

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
                    {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src={web3}
      alt="Third slide"
    />

    <Carousel.Caption>
 
    </Carousel.Caption>
  </Carousel.Item> */}
                </Carousel>


                <div className={classes.pro}>


                    <div className={classes.content}>

                        <h1 className={classes.head} data-aos-once="true" data-aos="zoom-in">Chat Application - TiTalk |
                            WeChat</h1>

                        <a className={classes.link} href="https://ltsql.ql-lts888666.com/login">TiTalk</a>

                        <p className={classes.list}>Worked on Chat Application as Backend Java Developer.</p>

                        <li className={classes.list}>Skills : Java 1.8 · IntelliJ IDEA · Web Services · Web Development
                            · Spring Framework · MyBatis · Swagger API · Lombok · Spring · Spring Boot · Maven · MySQL ·
                            Bitbucket · Zentao Project Management System
                        </li>

                    </div>
                    <div/>
                </div>
            </div>

            {/*4th Project*/}
            <div className={classes.img} style={{marginTop: "-32rem"}}>

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
                    {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src={cam3}
      alt="Third slide"
    />

    <Carousel.Caption>
 
    </Carousel.Caption>
  </Carousel.Item> */}
                </Carousel>


                <div className={classes.pro}>


                    <div className={classes.content}>

                        <h1 className={classes.head} data-aos-once="true" data-aos="zoom-in">Healthcare - Tiger</h1>

                        <a className={classes.link} href="https://tiger.siparadigm.com/tiger/">Tiger</a>

                        <p className={classes.list}>This is a web-based tool for a laboratory in the US to facilitate
                            the flow of the tests to be performed against cases.</p>
                        <li className={classes.list}>Skills : Java 1.8 · IntelliJ IDEA · EJB · JSF · Primefaces ·
                            Hibernate · Spring Boot · MariaDB
                        </li>

                    </div>
                    <div/>
                </div>
            </div>


            {/*3rd Project*/}
            <div className={classes.img} style={{marginTop: "-32rem"}}>

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

                        <h1 className={classes.head} data-aos-once="true" data-aos="zoom-in">HRMS - Graduation
                            Project</h1>

                        <p className={classes.link} href="">Human Resource Management Solution</p>
                        <p className={classes.list}>A Human Resource Management Solution developed in Microservices
                            Architecture.
                        </p>
                        <li className={classes.list}>Skills : Frontend React JavaScript library · Java · Spring · Spring
                            Boot · Spring Security · Spring Cloud API Gateway · Netflix Eureka · Netflix Hystrix ·
                            Spring JPA · MySQL Database.
                        </li>

                    </div>
                    <div/>
                </div>
            </div>

            {/*2nd Project*/}
            <div className={classes.img} style={{marginTop: "-25rem"}}>

                <Carousel fade>
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
                        <h1 className={classes.head} data-aos-once="true" data-aos="zoom-in">YouTube Content
                            Creator</h1>
                        <a className={classes.link} href="https://www.youtube.com/c/FazalTuts4Uf">Fazal Tuts4U</a>
                        <p className={classes.list}>Education and Tutorial Channel</p>
                        <li className={classes.list}>Skills : YouTube · snappa.com · Adobe Premiere Pro cc · Videoscribe
                            Animation · Techsmith CamtAsia · Techsmith Snagit
                        </li>

                    </div>
                    <div/>
                </div>
            </div>

            {/*1st Project*/}
            <div className={classes.img} style={{marginTop: "-25rem"}}>

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
                </Carousel>
                <div className={classes.pro}>
                    <div className={classes.content}>
                        <h1 className={classes.head} data-aos-once="true" data-aos="zoom-in">Fazail E Amaal</h1>
                        <a className={classes.link}
                           href="https://play.google.com/store/apps/details?id=com.fazail.amaal.fazailsadqat.fazailedarood.fazailquran.fazailhaj.fazailamaal&hl=en_US&gl=US">Fazal-E-Amaal</a>
                        <p className={classes.list}>Fazail-E-Amaal Islamic Book Application.</p>
                        <li className={classes.list}>Skills : Java · Android Studio · Android developer tools ·
                            XML · SQLite
                            Database
                        </li>
                    </div>
                    <div/>
                </div>
            </div>
        </div>
    </>;

};

export default Project;
