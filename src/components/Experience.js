import React, { useEffect } from 'react';
import classes from '../assets/css/Experience.module.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Experience = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className={classes.fazal}>

            {/* ===== Education ===== */}
            <section className={classes.section}>
                <h2
                    className={classes.sectionTitle}
                    data-aos="zoom-in"
                    data-aos-once="true"
                >
                    Education
                </h2>

                <div className={classes.eduBlock} data-aos="fade-up" data-aos-once="true">
                    <div className={classes.eduItem}>
                        <p className={classes.eduDegree}>
                            Bachelor&apos;s degree, Computer Science, Grade: 83.75%
                        </p>
                        <p className={classes.eduInstitute}>
                            University of Engineering &amp; Technology Peshawar
                        </p>
                        <p className={classes.eduYear}>Sep 2017 – Aug 2021</p>
                    </div>

                    <div className={classes.eduItem}>
                        <p className={classes.eduDegree}>Diploma of Information Technology, Grade: 80.57%</p>
                        <p className={classes.eduInstitute}>
                            KP Board of Technical Education Peshawar
                        </p>
                        <p className={classes.eduYear}>2015 – 2016</p>
                    </div>
                </div>
            </section>

            {/* ===== Experience ===== */}
            <section className={classes.section}>
                <h2
                    className={classes.sectionTitle}
                    data-aos="zoom-in"
                    data-aos-once="true"
                >
                    Experience
                </h2>

                <div className={classes.cardsColumn}>

                    {/* Million Soft Technology */}
                    <article
                        className={classes.card}
                        data-aos="fade-up"
                        data-aos-once="true"
                    >
                        <h3 className={classes.company}>Million Soft Technology</h3>
                        <h4 className={classes.role}>Java Developer</h4>
                        <p className={classes.dates}>Jul 2022 – Jun 2023</p>

                        <p className={classes.summary}>
                            Worked on Chat Application and Payment Gateway as backend
                            <span> Java</span> developer.
                        </p>

                        <ul className={classes.cardList}>
                            <li>
                                Chat Application developed in
                                <span> Microservices</span> architecture.
                            </li>
                            <li>
                                Payment Gateway system developed in
                                <span> Monolithic</span> architecture.
                            </li>
                        </ul>

                        <p className={classes.summary}>Documentation:</p>
                        <ul className={classes.cardList}>
                            <li>
                                Preparing API Technical Design document – clarifying all
                                technical details before development.
                            </li>
                            <li>
                                Preparing Technical Flow document – describing system flow
                                diagrammatically.
                            </li>
                            <li>
                                Preparing Traceability Matrix document – supporting API
                                integrations and integration team understanding.
                            </li>
                            <li>
                                Preparing Technical Design document – user guide after UI
                                development.
                            </li>
                        </ul>

                        <p className={classes.summary}>Responsibilities:</p>
                        <ul className={classes.cardList}>
                            <li>
                                Analyzing and gathering business requirements and writing
                                system specification documents with UI/UX elements.
                            </li>
                            <li>
                                Designing solutions and integrating them with existing
                                systems, including required DB and code changes.
                            </li>
                            <li>
                                Full-stack development (Angular &amp; Spring Boot),
                                maintenance, and support of running applications.
                            </li>
                            <li>
                                Optimizing Java code, monitoring application performance,
                                and debugging error logs.
                            </li>
                            <li>
                                Ensuring code quality and adherence to coding standards.
                            </li>
                            <li>
                                Ensuring timely delivery of assigned tasks, production
                                deployments, and post-production support.
                            </li>
                        </ul>

                        <p className={classes.techLine}>
                            Technologies: Java 1.8 · IntelliJ IDEA · Web Services · Web
                            Development · Spring Framework · Hibernate · MyBatis · Swagger
                            API · Lombok · Spring · Spring Boot · Maven · TypeScript ·
                            JavaScript · Angular · Oracle · MySQL · GitHub · Jira · Zentao
                            Project Management System
                        </p>

                        <a
                            className={classes.link}
                            href="https://ltsql.ql-lts888666.com/login"
                            target="_blank"
                            rel="noreferrer"
                        >
                            TiTalk
                        </a>
                    </article>

                    {/* siParadigm – Java Developer */}
                    <article
                        className={classes.card}
                        data-aos="fade-up"
                        data-aos-once="true"
                    >
                        <h3 className={classes.company}>siParadigm Diagnostic Informatics</h3>
                        <h4 className={classes.role}>Java Developer</h4>
                        <p className={classes.dates}>Oct 2021 – Sep 2022</p>

                        <p className={classes.summary}>
                            Worked on healthcare software as backend
                            <span> Java</span> developer.
                        </p>

                        <ul className={classes.cardList}>
                            <li>
                                Knowledge transfer / transition and handover through formal
                                documentation (Jul 2022 – Sep 2022).
                            </li>
                            <li>Worked on Java and J2EE.</li>
                            <li>
                                Hands-on experience with Tomcat and WildFly/JBoss servers.
                            </li>
                            <li>
                                Used JSF and PrimeFaces to build registration processes.
                            </li>
                            <li>Experience creating RESTful web services.</li>
                            <li>
                                1+ years of experience in web development using Core Java,
                                JavaEE, Spring Framework, JSP, JSF, Servlet, Spring MVC,
                                Spring Security, JDBC, Hibernate, Microservices, Spring Boot,
                                Spring JPA, JasperReports.
                            </li>
                            <li>
                                Strong ability to learn new technologies quickly and work
                                independently.
                            </li>
                        </ul>

                        <p className={classes.techLine}>
                            Technologies: Java 1.8 · EJB · JSF · Primefaces · Hibernate ·
                            Spring Boot · MariaDB
                        </p>

                        <a
                            className={classes.link}
                            href="https://tiger.siparadigm.com/tiger/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Tiger
                        </a>
                    </article>

                    {/* siParadigm – DevOps / Support */}
                    <article
                        className={classes.card}
                        data-aos="fade-up"
                        data-aos-once="true"
                    >
                        <h3 className={classes.company}>siParadigm Diagnostic Informatics</h3>
                        <h4 className={classes.role}>
                            <span style={{ color: "#ffffff" }}>DevOps | Support Engineer</span> — <span style={{ color: "#ffffff" }}>Full-time</span>
                        </h4>
                        <p className={classes.dates}>Aug 2021 – Oct 2021</p>

                        <p className={classes.summary}>
                            Support Engineer / DevOps (Training Role) – Healthcare Software
                        </p>
                        <p className={classes.summary}>
                            3 Months – Training &amp; Support Assignment
                        </p>

                        <ul className={classes.cardList}>
                            <li>
                                Assisted in supporting the healthcare application under the guidance of senior engineers.
                            </li>
                            <li>
                                Documented issues, tracked bugs, and communicated resolutions to the team.
                            </li>
                            <li>
                                Learned and practiced basic Jira (Agile) workflow, Docker, and Jenkins for CI/CD tasks.
                            </li>
                            <li>
                                Retrieved data for client requests and supported day-to-day system operations.
                            </li>
                            <li>
                                Used Mirth Connect to understand HL7 messaging and HIPAA compliance.
                            </li>
                            <li>
                                Monitored Linux servers and assisted in deployments using MobaXterm (with senior supervision).
                            </li>
                        </ul>

                        <p className={classes.techLine}>
                            Tech: SQL · MariaDB · Jenkins (CI/CD) · Jira · Mirth Connect · Linux
                        </p>

                        <a
                            className={classes.link}
                            href="https://tiger.siparadigm.com/tiger/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Tiger
                        </a>
                    </article>

                    {/* Satsuma Droid – Junior Java */}
                    <article
                        className={classes.card}
                        data-aos="fade-up"
                        data-aos-once="true"
                    >
                        <h3 className={classes.company}>Satsuma Droid Pvt. Ltd</h3>
                        <h4 className={classes.role}>
                            <span style={{ color: "#ffffff" }}>Junior Java Developer</span> — <span style={{ color: "#ffffff" }}>Part-time</span>
                        </h4>
                        <p className={classes.dates}>Oct 2020 – Aug 2021</p>

                        <p className={classes.summary}>
                            Final Year <span style={{ color: "#ffffff" }}>University Project</span> –
                            <span style={{ color: "#ffffff" }}> Microservices-Based HR Management System</span> (UET Peshawar)
                        </p>

                        <ul className={classes.cardList}>
                            <li>
                                Developed backend microservices using
                                <span style={{ color: "#ffffff" }}> Java 8</span>,
                                <span style={{ color: "#ffffff" }}> Spring Boot</span>, and a frontend with
                                <span style={{ color: "#ffffff" }}> ReactJS</span>.
                            </li>
                            <li>
                                Delivered a role-based access HRMS using
                                <span style={{ color: "#ffffff" }}> microservices architecture</span>, successfully implementing and integrating major modules for a working system.
                            </li>
                            <li>
                                Received weekly reviews under
                                <span style={{ color: "#ffffff" }}> Senior Supervision</span> to track progress and uphold real-world standards.
                            </li>
                            <li>
                                Included <span style={{ color: "#ffffff" }}>HR</span>, <span style={{ color: "#ffffff" }}>Employee</span>,
                                <span style={{ color: "#ffffff" }}> Finance</span>, <span style={{ color: "#ffffff" }}>Leave Management</span>, and
                                <span style={{ color: "#ffffff" }}> News Feed</span> modules.
                            </li>
                        </ul>

                        <h5 className={classes.subHeading}>Responsibilities:</h5>
                        <ul className={classes.cardList}>
                            <li>Developed <span style={{ color: "#ffffff" }}>REST APIs</span> for different modules.</li>
                            <li>
                                Implemented <span style={{ color: "#ffffff" }}>authentication</span> and
                                <span style={{ color: "#ffffff" }}> authorization</span> using Spring Security.
                            </li>
                            <li>
                                Implemented routing with
                                <span style={{ color: "#ffffff" }}> Spring Cloud Gateway</span> and enabled
                                <span style={{ color: "#ffffff" }}> dynamic service discovery</span> using
                                <span style={{ color: "#ffffff" }}> Netflix Eureka</span>.
                            </li>
                            <li>Designed and maintained the <span style={{ color: "#ffffff" }}>MySQL database schema</span>.</li>
                            <li>Integrated backend services with <span style={{ color: "#ffffff" }}>ReactJS frontend</span>.</li>
                        </ul>

                        <p className={classes.techLine}>
                            <span style={{ color: "#ffffff" }}>Tech:</span> Java 8 · OOP · Spring · Spring Boot · Spring Security · Spring Cloud Gateway ·
                            Netflix Eureka · Netflix Hystrix · Spring Data JPA · React · JavaScript · MySQL · Maven · Microservices Architecture
                        </p>
                    </article>

                    {/* Satsuma Droid – Android Internship */}
                    <article
                        className={classes.card}
                        data-aos="fade-up"
                        data-aos-once="true"
                    >
                        <h3 className={classes.company}>Satsuma Droid Pvt. Ltd</h3>
                        <h4 className={classes.role}>
                            <span style={{ color: "#ffffff" }}>Android Java Developer</span> — <span style={{ color: "#ffffff" }}>Internship</span>
                        </h4>
                        <p className={classes.dates}>Jul 2019 – Sep 2019</p>

                        <p className={classes.summary}>
                            Android Developer <span style={{ color: "#ffffff" }}>Intern</span> – <span style={{ color: "#ffffff" }}>Islamic Book Application</span>
                        </p>

                        <ul className={classes.cardList}>
                            <li>
                                Learned Android development fundamentals while building the
                                <span style={{ color: "#ffffff" }}> Fazail-e-Amaal Islamic Book App</span>.
                            </li>

                            <li>
                                Developed core features such as
                                <span style={{ color: "#ffffff" }}> Search</span>,
                                <span style={{ color: "#ffffff" }}> Text Resizing</span>,
                                <span style={{ color: "#ffffff" }}> Bookmarking</span>, and designed the layout to streamline the reading experience and app usability.
                            </li>
                        </ul>

                        <p className={classes.techLine}>
                            <span style={{ color: "#ffffff" }}>Tech:</span> Java · OOP · Android Studio · Android SDK · XML · SQLite
                        </p>

                        <a
                            className={classes.link}
                            href="https://play.google.com/store/apps/details?id=com.fazail.amaal.fazailsadqat.fazailedarood.fazailquran.fazailhaj.fazailamaal&hl=en_US&gl=US"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Fazail-e-Amaal
                        </a>
                    </article>

                </div>
            </section>
        </div>
    );
};

export default Experience;
