import React, {useEffect} from 'react';
import classes from '../assets/css/Experience.module.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import {FaAndroid, FaApple, FaBriefcase, FaFileAlt, FaGlobe, FaGraduationCap} from 'react-icons/fa';

const Experience = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    const calculateDuration = (startYear, startMonth) => {
        const startDate = new Date(startYear, startMonth - 1); // month is 0-based
        const currentDate = new Date();

        let years = currentDate.getFullYear() - startDate.getFullYear();
        let months = currentDate.getMonth() - startDate.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        const yearText = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
        const monthText = months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

        return `${yearText}${yearText && monthText ? ", " : ""}${monthText} (Present)`;
    };

    return (
        <div className={classes.fazal}>

            {/* ===== Education ===== */}
            <section className={classes.section}>
                <h2
                    className={classes.sectionTitle}
                    data-aos="zoom-in"
                    data-aos-once="true"
                >
                    <FaGraduationCap/> Education
                </h2>

                <div className={classes.cardsColumn}>
                    <article className={classes.card} data-aos="fade-up" data-aos-once="true">
                        <h3 className={classes.company}>University of Engineering &amp; Technology Peshawar</h3>

                        <section className={classes.roleBlock}>
                            <div className={classes.timelineDot}/>

                            <h4 className={classes.roleTitle}>
                                <span style={{color: "#ffffff"}}>Bachelor’s Degree</span> —{" "}
                                <span>Computer Science</span>
                            </h4>

                            <p className={classes.roleMeta}>Sep 2017 – Aug 2021</p>

                            <ul className={classes.cardList}>
                                <li>
                                    Final Grade: <span style={{color: "#ffffff"}}>83.75% (CGPA: 3.35 / 4.00)</span>
                                </li>
                            </ul>
                        </section>
                    </article>

                    <article className={classes.card} data-aos="fade-up" data-aos-once="true">
                        <h3 className={classes.company}>KP Board of Technical Education Peshawar</h3>

                        <section className={classes.roleBlock}>
                            <div className={classes.timelineDot}/>

                            <h4 className={classes.roleTitle}>
                                <span style={{color: "#ffffff"}}>Diploma</span> —{" "}
                                <span>Information Technology</span>
                            </h4>

                            <p className={classes.roleMeta}>2015 – 2016</p>

                            <ul className={classes.cardList}>
                                <li>
                                    Final Grade: <span style={{color: "#ffffff"}}>80.57%</span>
                                </li>
                            </ul>
                        </section>
                    </article>
                </div>
            </section>

            {/* ===== Experience ===== */}
            <section className={classes.section}>
                <h2
                    className={classes.sectionTitle}
                    data-aos="zoom-in"
                    data-aos-once="true"
                >
                    <FaBriefcase/> Experience
                </h2>
                <div className={classes.cardsColumn}>


                    <article
                        className={classes.card}
                        data-aos="fade-up"
                        data-aos-once="true"
                    >
                        <h3 className={classes.company}>Almabani General Contractors</h3>

                        <p className={classes.meta}>
                            <span style={{color: "#ffffff"}}>
                                {calculateDuration(2023, 7)}
                            </span>
                        </p>


                        {/* Role 1 – Current */}
                        <section className={classes.roleBlock}>
                            <div className={classes.timelineDot}/>

                            <h4 className={classes.roleTitle}>
                                <span style={{color: "#ffffff"}}>Senior Analyst – Full Stack Developer</span>
                            </h4>

                            <p className={classes.roleMeta}>
                                Aug 2024 – Present · Saudi Arabia
                            </p>

                            <ul className={classes.cardList}>
                                <li>
                                    Leading the development and enhancement of
                                    <span style={{color: "#ffffff"}}> Almabani’s HRMS ERP (AlmaERP)</span>,
                                    <span style={{color: "#ffffff"}}> AlmaMobile applications</span>,
                                    <span style={{color: "#ffffff"}}> Lending Website</span>, and
                                    <span style={{color: "#ffffff"}}> Supplier / Vendor Portal</span>.
                                </li>
                                <li>
                                    Building
                                    <span style={{color: "#ffffff"}}> scalable</span>,
                                    <span style={{color: "#ffffff"}}> secure</span>, and
                                    <span style={{color: "#ffffff"}}> high-performance</span> systems using
                                    Java Spring Boot, Angular, Ionic, PHP Laravel, MySQL, and JasperReports.
                                </li>
                                <li>
                                    Collaborating with
                                    <span style={{color: "#ffffff"}}> cross-functional teams</span> to deliver
                                    reliable solutions that support business operations and organizational growth.
                                </li>
                                <li>
                                    Driving
                                    <span style={{color: "#ffffff"}}> digital transformation initiatives </span>
                                    resulting in measurable improvements in efficiency and project outcomes.
                                </li>
                            </ul>
                        </section>

                        {/* Role 2 – Previous */}
                        <section className={classes.roleBlock}>
                            <div className={classes.timelineDot}/>

                            <h4 className={classes.roleTitle}>
                                <span style={{color: "#ffffff"}}>Systems Developer</span>
                            </h4>

                            <p className={classes.roleMeta}>
                                Jul 2023 – Aug 2024 · 1 year 2 months · Saudi Arabia
                            </p>

                            <ul className={classes.cardList}>
                                <li>
                                    Developed and maintained
                                    <span style={{color: "#ffffff"}}> AlmaERP</span> using
                                    <span style={{color: "#ffffff"}}> Java Spring Boot</span>,
                                    <span style={{color: "#ffffff"}}> Angular</span>,
                                    <span style={{color: "#ffffff"}}> MySQL</span>, and
                                    <span style={{color: "#ffffff"}}> JasperReports</span>.
                                </li>
                                <li>
                                    Focused on
                                    <span style={{color: "#ffffff"}}> layered security</span>,
                                    <span style={{color: "#ffffff"}}> safe integrations</span>, and
                                    <span style={{color: "#ffffff"}}> consistent system performance </span>
                                    across all modules.
                                </li>
                                <li>
                                    Participated in
                                    <span style={{color: "#ffffff"}}> requirement gathering</span>,
                                    <span style={{color: "#ffffff"}}> system architecture discussions</span>,
                                    and led development of new ERP modules.
                                </li>
                                <li>
                                    Improved system efficiency through
                                    <span style={{color: "#ffffff"}}> refactoring</span>,
                                    <span style={{color: "#ffffff"}}> performance tuning</span>, and
                                    resolving bugs across existing modules.
                                </li>
                                <li>
                                    Worked closely with
                                    <span style={{color: "#ffffff"}}> systems teams</span> and
                                    <span style={{color: "#ffffff"}}> business stakeholders </span>
                                    to ensure ERP alignment with operational goals.
                                </li>
                            </ul>

                            <p className={classes.techLine}>
                                <span style={{color: "#ffffff"}}>Tech:</span> Java · Spring Boot · Angular · Ionic ·
                                PHP Laravel · MySQL · JasperReports · REST APIs · Git · Jira
                            </p>
                        </section>
                        <div className={classes.linksRow}>
                            <a
                                className={classes.link}
                                href="https://apps.apple.com/sa/app/almamob/id6475034380"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaApple className={classes.storeIcon}/> AlmaMOB
                            </a>

                            <span className={classes.pipe}>&nbsp;|&nbsp;</span>

                            <a
                                className={classes.link}
                                href="https://play.google.com/store/apps/details?id=com.almabani.mobile.app&hl=en_US"
                                target="_blank"
                                rel="noreferrer"
                            ><FaAndroid className={classes.storeIcon}/> AlmaMOB
                            </a>

                            <span className={classes.pipe}>&nbsp;|&nbsp;</span>

                            <a
                                className={classes.link}
                                href="https://erp.almabani.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGlobe className={classes.storeIcon}/> AlmaERP
                            </a>

                            <span className={classes.pipe}>&nbsp;|&nbsp;</span>

                            <a
                                className={classes.link}
                                href="https://almabani.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGlobe className={classes.storeIcon}/> AlmaWebsite
                            </a>

                            <span className={classes.pipe}>&nbsp;|&nbsp;</span>

                            <a
                                className={classes.link}
                                href="https://supregistration.almabani.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGlobe className={classes.storeIcon}/> Vendor Portal
                            </a>

                            <span className={classes.pipe}>&nbsp;|&nbsp;</span>

                            <a className={classes.link}
                               href="https://drive.google.com/file/d/1XWYFlvQk77UUok1aCwbgbppsXzecgdyc/view?usp=sharing"
                               target="_blank" rel="noreferrer">
                                <FaFileAlt className={classes.storeIcon}/> User Manual
                            </a>

                        </div>
                    </article>

                    {/* Million Soft Technology */}
                    <article
                        className={classes.card}
                        data-aos="fade-up"
                        data-aos-once="true"
                    >
                        <h3 className={classes.company}>Million Soft Technology</h3>
                        <p className={classes.meta}>
                            <span style={{color: "#ffffff"}}>1 year</span>
                        </p>

                        <section className={classes.roleBlock}>
                            <div className={classes.timelineDot}/>
                            <h4 className={classes.role}>
                                <span>Java Software Engineer</span>
                            </h4>

                            <p className={classes.dates}>
                                Jul 2022 – Jun 2023 · Dubai, United Arab Emirates
                            </p>
                            <p className={classes.summary}>
                                Worked on enterprise-grade systems including a
                                <span style={{color: "#ffffff"}}>  Chat Application</span> and a
                                <span style={{color: "#ffffff"}}>  Payment Gateway</span>, contributing across
                                <span style={{color: "#ffffff"}}>  backend</span> and
                                <span style={{color: "#ffffff"}}>  full-stack</span> development.
                            </p>

                            <p className={classes.summary}>
                                <span>Projects:</span>
                            </p>

                            <ul className={classes.cardList}>
                                <li>
                                    <span style={{color: "#ffffff"}}> TiTalk Chat Application</span> —
                                    Microservices architecture with
                                    <span style={{color: "#ffffff"}}>  Spring Boot </span>backend.
                                </li>
                                <li>
                                    <span style={{color: "#ffffff"}}> Payment Gateway System</span> —
                                    Monolithic architecture with
                                    <span style={{color: "#ffffff"}}>  Angular</span> frontend and
                                    <span style={{color: "#ffffff"}}>  Spring Boot</span> backend.
                                </li>
                            </ul>

                            <p className={classes.summary}>
                                <span>Documentation Prepared:</span>
                            </p>

                            <ul className={classes.cardList}>
                                <li>
                                    <span style={{color: "#ffffff"}}> API Technical Design Document</span> — created
                                    before development
                                    to clarify technical requirements and integration points.
                                </li>
                                <li>
                                    <span style={{color: "#ffffff"}}> Technical Flow Document</span> — illustrated
                                    system workflows
                                    and architecture diagrammatically.
                                </li>
                                <li>
                                    <span style={{color: "#ffffff"}}> Traceability Matrix Document</span> — mapped API
                                    integrations
                                    for the integration team.
                                </li>
                                <li>
                                    <span style={{color: "#ffffff"}}> Technical Design / User Guide</span> — prepared
                                    after UI
                                    development to support users and implementation.
                                </li>
                            </ul>

                            <p className={classes.summary}>
                                <span>Key Responsibilities:</span>
                            </p>

                            <ul className={classes.cardList}>
                                <li>
                                    Gathered and analyzed business requirements, producing clear
                                    <span style={{color: "#ffffff"}}>  system specification documents</span>.
                                </li>
                                <li>
                                    Designed backend solutions and integrated new features into
                                    existing systems, including required
                                    <span style={{color: "#ffffff"}}>  database and code changes</span>.
                                </li>
                                <li>
                                    Built and maintained backend services using
                                    <span style={{color: "#ffffff"}}>  Java Spring Boot</span>, ensuring
                                    <span style={{color: "#ffffff"}}>  reliability</span>,
                                    <span style={{color: "#ffffff"}}>  security</span>, and
                                    <span style={{color: "#ffffff"}}>  performance</span>.
                                </li>
                                <li>
                                    Optimized Java code by monitoring logs and resolving performance
                                    and production issues.
                                </li>
                                <li>
                                    Enforced
                                    <span style={{color: "#ffffff"}}>  clean code practices</span>,
                                    <span style={{color: "#ffffff"}}>  coding standards</span>, and proper
                                    <span style={{color: "#ffffff"}}>  version control</span>.
                                </li>
                                <li>
                                    Led deployment activities and provided
                                    <span style={{color: "#ffffff"}}>  post-production support </span>
                                    to ensure smooth system operation.
                                </li>
                            </ul>

                            <p className={classes.techLine}>
                                <span style={{color: "#ffffff"}}>Tech:</span>{" "}
                                Java 8 · Spring · Spring Boot · Hibernate · MyBatis ·
                                Swagger API · Lombok · Maven · Angular · TypeScript · JavaScript ·
                                Oracle · MySQL · GitHub · Jira · Zentao
                            </p>
                        </section>
                        <a
                            className={classes.link}
                            href="https://ltsql.ql-lts888666.com/login"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGlobe className={classes.storeIcon}/> TiTalk
                        </a>
                    </article>

                    {/* siParadigm – All Roles */}
                    <article className={classes.card} data-aos="fade-up" data-aos-once="true">
                        <h3 className={classes.company}>siParadigm Diagnostic Informatics</h3>

                        <p className={classes.meta}>
                            <span style={{color: "#ffffff"}}>1 year 2 months</span>
                        </p>

                        {/* Role 1 */}
                        <section className={classes.roleBlock}>
                            <div className={classes.timelineDot}/>

                            <h4 className={classes.roleTitle}>
                                <span style={{color: "#ffffff"}}>Java Developer</span> —{" "}
                                <span style={{color: "#ffffff"}}>Knowledge Transfer &amp; Handover</span>
                            </h4>

                            <p className={classes.roleMeta}>
                                Jul 2022 – Sep 2022 · 3 months · Dubai, United Arab Emirates
                            </p>

                            <ul className={classes.cardList}>
                                <li>
                                    Delivered complete <span style={{color: "#ffffff"}}>KT</span> to the new developer,
                                    explaining
                                    <span style={{color: "#ffffff"}}> project workflow</span>,
                                    <span style={{color: "#ffffff"}}> code structure</span>, and
                                    <span style={{color: "#ffffff"}}> healthcare domain rules</span>.
                                </li>
                                <li>
                                    Created <span style={{color: "#ffffff"}}>supporting documentation</span> and guided
                                    him until he
                                    managed the system <span style={{color: "#ffffff"}}>independently</span>.
                                </li>
                                <li>
                                    Worked <span style={{color: "#ffffff"}}>remotely from Dubai</span> while serving
                                    notice period.
                                </li>
                            </ul>

                            <p className={classes.techLine}>
                                <span style={{color: "#ffffff"}}>Tech:</span> Java 8 · JSF · PrimeFaces · Hibernate ·
                                Spring Boot ·
                                MariaDB · Jenkins (CI/CD) · Jira · Mirth Connect · Linux
                            </p>
                        </section>

                        {/* Role 2 */}
                        <section className={classes.roleBlock}>
                            <div className={classes.timelineDot}/>

                            <h4 className={classes.roleTitle}>
                                <span style={{color: "#ffffff"}}>Java Developer</span>
                            </h4>

                            <p className={classes.roleMeta}>
                                Oct 2021 – Sep 2022 · 1 year · Islamabad, Pakistan
                            </p>

                            <ul className={classes.cardList}>
                                <li>
                                    Developed and enhanced <span
                                    style={{color: "#ffffff"}}>backend functionalities</span> using
                                    <span style={{color: "#ffffff"}}> Java</span>,
                                    <span style={{color: "#ffffff"}}> J2EE</span>, and
                                    <span style={{color: "#ffffff"}}> Spring Boot</span>.
                                </li>
                                <li>
                                    Deployed and configured applications using
                                    <span style={{color: "#ffffff"}}> Tomcat</span> and
                                    <span style={{color: "#ffffff"}}> WildFly (JBoss)</span> servers.
                                </li>
                                <li>
                                    Designed and implemented <span style={{color: "#ffffff"}}>UI components</span> with
                                    <span style={{color: "#ffffff"}}> JSF</span> and
                                    <span style={{color: "#ffffff"}}> PrimeFaces</span>, including the
                                    <span style={{color: "#ffffff"}}> patient/registration module</span>.
                                </li>
                                <li>
                                    Created and integrated <span
                                    style={{color: "#ffffff"}}>RESTful Web Services</span> to support
                                    <span style={{color: "#ffffff"}}> internal</span> and
                                    <span style={{color: "#ffffff"}}> external system communication</span>.
                                </li>
                                <li>
                                    Delivered a <span
                                    style={{color: "#ffffff"}}>web-based laboratory management system</span> for a
                                    <span style={{color: "#ffffff"}}> U.S.-based healthcare company</span>, streamlining
                                    the handling of
                                    <span style={{color: "#ffffff"}}> test cases</span> and
                                    <span style={{color: "#ffffff"}}> results</span>.
                                </li>
                                <li>
                                    Hands-on experience across core web technologies:
                                    <span style={{color: "#ffffff"}}> Java EE</span> ·
                                    <span style={{color: "#ffffff"}}> Spring MVC</span> ·
                                    <span style={{color: "#ffffff"}}> Spring Security</span> ·
                                    <span style={{color: "#ffffff"}}> Hibernate</span> ·
                                    <span style={{color: "#ffffff"}}> JDBC</span> ·
                                    <span style={{color: "#ffffff"}}> Microservices</span> ·
                                    <span style={{color: "#ffffff"}}> JPA</span> ·
                                    <span style={{color: "#ffffff"}}> JSP</span> ·
                                    <span style={{color: "#ffffff"}}> Servlets</span> ·
                                    <span style={{color: "#ffffff"}}> JasperReports</span>.
                                </li>
                                <li>
                                    Demonstrated ability to <span style={{color: "#ffffff"}}>learn quickly</span> and
                                    deliver solutions
                                    <span style={{color: "#ffffff"}}> independently</span>.
                                </li>
                            </ul>
                        </section>

                        {/* Role 3 */}
                        <section className={classes.roleBlock}>
                            <div className={classes.timelineDot}/>

                            <h4 className={classes.roleTitle}>
                                <span style={{color: "#ffffff"}}>Support Engineer / DevOps</span>
                            </h4>

                            <p className={classes.roleMeta}>
                                Aug 2021 – Oct 2021 · 3 months · Islamabad, Pakistan
                            </p>

                            <p className={classes.summary}>
                                <span style={{color: "#ffffff"}}>Training Role</span> — Healthcare Software · 3 Months –
                                Training &amp; Support Assignment
                            </p>

                            <ul className={classes.cardList}>
                                <li>
                                    Assisted in supporting the healthcare application under
                                    <span style={{color: "#ffffff"}}> senior supervision</span>.
                                </li>
                                <li>
                                    Documented issues, tracked <span style={{color: "#ffffff"}}>bugs</span>, and
                                    communicated resolutions to the team.
                                </li>
                                <li>
                                    Learned and practiced <span style={{color: "#ffffff"}}>Jira (Agile)</span>,
                                    <span style={{color: "#ffffff"}}> Docker</span>, and
                                    <span style={{color: "#ffffff"}}> Jenkins CI/CD</span> tasks.
                                </li>
                                <li>
                                    Retrieved data for client requests and supported
                                    <span style={{color: "#ffffff"}}> day-to-day system operations</span>.
                                </li>
                                <li>
                                    Used <span style={{color: "#ffffff"}}>Mirth Connect</span> to understand
                                    <span style={{color: "#ffffff"}}> HL7 messaging</span> and
                                    <span style={{color: "#ffffff"}}> HIPAA compliance</span>.
                                </li>
                                <li>
                                    Monitored <span style={{color: "#ffffff"}}>Linux servers</span> and assisted
                                    deployments using
                                    <span style={{color: "#ffffff"}}> MobaXterm</span>.
                                </li>
                            </ul>

                            <p className={classes.techLine}>
                                <span style={{color: "#ffffff"}}>Tech:</span> SQL · MariaDB · Jenkins (CI/CD) · Jira ·
                                Mirth Connect · Linux
                            </p>
                        </section>
                        <a
                            className={classes.link}
                            href="https://tiger.siparadigm.com/tiger/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGlobe className={classes.storeIcon}/> Tiger
                        </a>
                    </article>

                    {/* Satsuma Droid – Android Internship */}
                    <article
                        className={classes.card}
                        data-aos="fade-up"
                        data-aos-once="true"
                    >

                        <h3 className={classes.company}>Satsuma Droid Pvt. Ltd</h3>
                        <p className={classes.meta}>
                            <span style={{color: "#ffffff"}}>3 months</span>
                        </p>
                        <section className={classes.roleBlock}>
                            <div className={classes.timelineDot}/>
                            <h4 className={classes.roleTitle}>
                                <span style={{color: "#ffffff"}}>Android Java Developer</span> —{" "}
                                <span style={{color: "#ffffff"}}>Internship</span>
                            </h4>
                            <p className={classes.roleMeta}>
                                Jul 2019 – Sep 2019 · Islamabad, Pakistan
                            </p>

                            <p className={classes.summary}>
                                <span style={{color: "#ffffff"}}>Android Developer Intern</span> —{" "}
                                <span style={{color: "#ffffff"}}>Islamic Book Application</span>
                            </p>

                            <ul className={classes.cardList}>
                                <li>
                                    Learned <span
                                    style={{color: "#ffffff"}}>Android development fundamentals</span> while
                                    building the <span style={{color: "#ffffff"}}>Fazail-e-Amaal Islamic Book App</span>.
                                </li>

                                <li>
                                    Developed core features such as
                                    <span style={{color: "#ffffff"}}> Search</span>,
                                    <span style={{color: "#ffffff"}}> Text Size Adjustment</span>,
                                    <span style={{color: "#ffffff"}}> Bookmarking</span>, and designed the
                                    <span style={{color: "#ffffff"}}> UI layout</span> to streamline the
                                    reading experience and improve <span style={{color: "#ffffff"}}>app usability</span>.
                                </li>
                            </ul>

                            <p className={classes.techLine}>
                                <span style={{color: "#ffffff"}}>Tech:</span>{" "}
                                Java · OOP · Android Studio · Android SDK · XML · SQLite
                            </p>
                        </section>
                        <a
                            className={classes.link}
                            href="https://play.google.com/store/apps/details?id=com.fazail.amaal.fazailsadqat.fazailedarood.fazailquran.fazailhaj.fazailamaal&hl=en_US&gl=US"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaAndroid className={classes.storeIcon}/> Fazail-e-Amaal
                        </a>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Experience;
