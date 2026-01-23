import React, {useEffect, useState} from "react";
import classes from "../assets/css/Footer.module.css";
import {FaCheck, FaCopy, FaEnvelope, FaGithub, FaLinkedin, FaStackOverflow, FaYoutube,} from "react-icons/fa";

const Footer = () => {
    const email = "fazal.haroon01@gmail.com";
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
        } catch (err) {
            // Fallback for older browsers / some insecure contexts
            const textarea = document.createElement("textarea");
            textarea.value = email;
            textarea.setAttribute("readonly", "");
            textarea.style.position = "absolute";
            textarea.style.left = "-9999px";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            setCopied(true);
        }
    };

    useEffect(() => {
        if (!copied) return;
        const t = setTimeout(() => setCopied(false), 1600);
        return () => clearTimeout(t);
    }, [copied]);

    return (
        <footer className={classes.footer}>
            <div className={classes.socialContainer}>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/fazalharoon/"
                    className={classes.icon}
                >
                    <FaLinkedin/>
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Fazal-haroon"
                    className={classes.icon}
                >
                    <FaGithub/>
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://stackoverflow.com/users/9947525/fazal-haroon"
                    className={classes.icon}
                >
                    <FaStackOverflow/>
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UC2dVZU2FEe-JEXr7L8grk6Q"
                    className={classes.icon}
                >
                    <FaYoutube/>
                </a>
            </div>

            <div className={classes.emailContainer}>
                {/* Mailto (click to open email) */}
                <a href={`mailto:${email}`} className={classes.emailLink}>
                    {/* prevent “icon gets copied” issues */}
                    <span className={classes.emailIcon} aria-hidden="true">
            <FaEnvelope/>
          </span>
                    <span className={classes.emailText}>{email}</span>
                </a>

                {/* Copy button (click to copy) */}
                <button
                    type="button"
                    onClick={copyEmail}
                    className={`${classes.copyBtn} ${copied ? classes.copied : ""}`}
                    aria-label={copied ? "Email copied" : "Copy email"}
                    title={copied ? "Copied!" : "Copy"}
                >
          <span className={classes.copyIcon} aria-hidden="true">
            {copied ? <FaCheck/> : <FaCopy/>}
          </span>
                    <span className={classes.copyLabel}>{copied ? "Copied" : "Copy"}</span>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
