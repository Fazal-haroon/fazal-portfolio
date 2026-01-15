import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import classes from '../assets/css/ScrollToTop.module.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // 1. Toggle visibility based on scroll position
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // 2. The actual scroll function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // 3. Add scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the listener when component unmounts
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={classes.scrollToTop}>
            {isVisible && (
                <div onClick={scrollToTop} className={classes.iconContainer}>
                    <FaArrowUp className={classes.icon} />
                </div>
            )}
        </div>
    );
};

export default ScrollToTop;