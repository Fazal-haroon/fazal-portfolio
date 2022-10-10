import React from 'react';
import classes from '../assets/css/Project.module.css'
import web from "../assets/images/web.png"
import ad1 from "../assets/images/ad1.png"
import ad2 from "../assets/images/ad2.png"
import web2 from "../assets/images/web2.png"
import web3 from "../assets/images/web4.png"
import cam1 from "../assets/images/cam1.png"
import cam2 from "../assets/images/cam2.png"
import cam3 from "../assets/images/cam3.jpeg"
import elec1 from "../assets/images/elec1.jpeg"
import elec2 from "../assets/images/elec2.jpeg"
import elec4 from "../assets/images/elec4.jpeg"
import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from 'react';
import "aos/dist/aos.css"
import Aos from "aos"

const Project = () => {
  useEffect(() => {
    Aos.init({duration:1000});
  }, []);
  return <>
 <div className={classes.fazal}>

  

<div className={classes.img}  >

<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={web}
      alt="First slide"
    />
    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={web2}
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

<h1 className={classes.head} data-aos-once="true" data-aos="zoom-in"  >Chat Application(TiTalk)</h1>

<a className={classes.link} href="https://ltsql.ql-lts888666.com/login" >TiTalk</a>

<p className={classes.list}>Worked on Chat Application as Backend Java Developer.</p>
<li className={classes.list} >Chat Application Project developed in Microservices Architecture.</li>
<li className={classes.list} >Worked on Java 1.8, Spring Boot, Lombok, MyBatis, MongoDB, Redis, Swagger, @ Custom Annotation, Handler interceptor, and Filter.</li>
<li className={classes.list} >Worked on group chat application, merge nine member profile image one images, the first 9 members of the group/room. 
</li> 
<li className={classes.list} >Logging Request and Response Body In Spring Boot and store it in the database. Whenever we need logging feature, we just add the custom annotation on the end-point and we store the data of logging in database.</li> 
<li className={classes.list} >Using ZenTao Project Management System.</li> 

</div>
<div/>
</div>
</div>
   
{/*second  */}
<div className={classes.img} style={{marginTop:"35rem"}}>

<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cam1}
      alt="First slide"
    />
    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cam2}
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

<h1 className={classes.head} data-aos-once="true" data-aos="zoom-in"  >Tiger</h1>

<a className={classes.link} href="https://tiger.siparadigm.com/tiger/" >Tiger</a>

<p className={classes.list}>Worked on Healthcare Software as a Backend Java Developer.</p>
<li className={classes.list} >Worked on Java and J2EE.</li>
<li className={classes.list} >Hands-on experience on Tomcat and WildFly JBoss Servers.</li>
<li className={classes.list} >JSF Framework and Primefaces. Created Registration Process.</li>
<li className={classes.list} >Knowledge of creating restful Web Services.</li>
<li className={classes.list} >1+ years of experience in Web development using Core- Java, JavaEE, Spring Framework, JSP, JSF, Servlet, Spring, Spring-MVC, Spring Security, JDBC, Hibernate, Microservices, Spring Boot, and Spring JPA Jasper Reports.</li>
<li className={classes.list} >Has a strong ability to learn new technologies in a short span and implement them independently.</li>

</div>
<div/>
</div>
</div>
   
   
{/*third  */}

<div className={classes.img}  style={{marginTop:"-38rem"}}  >

<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={elec1}
      alt="First slide"
    />
    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={elec2}
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={elec4}
      alt="Third slide"
    />

    <Carousel.Caption>
 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


<div className={classes.pro}>


<div className={classes.content}>

<h1 className={classes.head} data-aos-once="true" data-aos="zoom-in" >HRMS</h1>

<p className={classes.link} href="" >Human Resource Management Solution</p>

<p className={classes.list}>Worked on HRMS as Full Stack.</p>
<li className={classes.list} >A Human Resource Management Solution developed in Microservices Architecture.</li>
<li className={classes.list} >Worked with Java and Spring Boot as the backend to build a website using React Javascript library as the frontend.</li>
<li className={classes.list} >Technologies : Frontend React JavaScript library, Java, Spring, Spring Boot, Spring Security, Spring Cloud Gateway, Spring Netflix Eureka, Netflix Hystrix, Spring JPA, and MySQL Database.</li>

</div>
<div/>
</div>
</div>
   

   
fourth 
<div className={classes.img} style={{marginTop:"-3rem"}}   >

<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ad1}
      alt="First slide"
    />
    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src={ad2}
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item> */}
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
<h1 className={classes.head} data-aos-once="true" data-aos="zoom-in"  >Fazal-E-Amaal</h1>
<a className={classes.link} href="https://play.google.com/store/apps/details?id=com.fazail.amaal.fazailsadqat.fazailedarood.fazailquran.fazailhaj.fazailamaal&hl=en_US&gl=US" >Fazal-E-Amaal</a>

<p className={classes.list}>Worked on Islamic Book Android App as Java Android Developer.</p>
<li className={classes.list} >Fazail-E-Amaal Islamic Book Application.</li>
<li className={classes.list} >Technologies : Java, Android Studio, Android developer tools, XML, and SQLite Database.</li>

</div>
<div/>
  </div>
  </div>
   

</div> 
  
  
  
  
  </>;



};

export default Project;
