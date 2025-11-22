import React, {useState} from 'react';
import classes from '../assets/css/Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => setClicked(!clicked)

    return <>

        <nav className={classes.fazal}>

            <h2 className={classes.resume}>

                <a style={{color: 'inherit', textDecoration: 'inherit'}}
                   href='https://drive.google.com/file/d/1-eiPloBVFrWqXDAj28gYUpUVkBvwOxee/view?usp=sharing' target="_blank" rel="noreferrer">RESUME</a>
            </h2>

            <ul className={clicked ? classes.mobilelinks : classes.navlinks} onClick={() => setClicked(false)}>

                <li><NavLink className={({ isActive }) =>
                                 isActive ? `${classes.about} ${classes.active}` : classes.about
                } style={{color: 'inherit', textDecoration: 'inherit'}}
                             to="/">ABOUT</NavLink></li>
                <li><NavLink to="/skills" className={({ isActive }) =>
                                 isActive ? `${classes.about} ${classes.active}` : classes.about
                } style={{color: 'inherit', textDecoration: 'inherit'}}>SKILLS</NavLink></li>
                <li><NavLink className={({ isActive }) =>
                                 isActive ? `${classes.about} ${classes.active}` : classes.about
                } style={{color: 'inherit', textDecoration: 'inherit'}}
                             to="/project">PROJECTS</NavLink></li>
                <li><NavLink className={({ isActive }) =>
                                 isActive ? `${classes.about} ${classes.active}` : classes.about
                } style={{color: 'inherit', textDecoration: 'inherit'}}
                             to="/experience">EXPERIENCE</NavLink></li>

            </ul>

            <button className={classes.mobile} onClick={handleClick}>

                {clicked ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}

            </button>
        </nav>
    </>;
};

export default Navbar;
