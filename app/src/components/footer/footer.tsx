"use client";

import React, { JSX } from "react";
import Link from "next/link";
import footerStyles from "./footer.module.css";
import links from "../../data/links.json";
import { FaGithub, FaDiscord, FaInstagram, FaFacebook, FaLinkedin, FaArrowUp } from "react-icons/fa";

const iconDictionary: { [key: string]: JSX.Element } = {
    Github: <FaGithub />,
    Discord: <FaDiscord />,
    Instagram: <FaInstagram />,
    Facebook: <FaFacebook />,
    LinkedIn: <FaLinkedin />
};

const Footer: React.FC = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.footerTop}>
                <div id="footer-company" className={footerStyles.column}>
                    <Link href="#footer-company"><h3>Company</h3></Link>
                    <ul>
                        <li><Link href="/p/privacy-policy" target="_blank">Privacy Policy</Link></li>
                        <li><Link href="/p/terms-of-service" target="_blank">Terms of Service</Link></li>
                    </ul>
                </div>
                <div id="footer-something" className={footerStyles.column}>
                    <Link href="#footer-companies"><h3>Something</h3></Link>
                    <ul>
                        <li><a href="" target="_blank">Thing 1</a></li>
                        <li><a href="" target="_blank">Thing 2</a></li>
                    </ul>
                </div>
                <div id="footer-resources" className={footerStyles.column}>
                    <Link href="#footer-resources"><h3>Resources</h3></Link>
                    <ul>
                        <li><a href="" target="_blank">Status Page</a></li>
                        <li><a href="https://discord.gg/PvyRJzN5Pr" target="_blank">Support</a></li>
                    </ul>
                </div>
            </div>
            <div className={footerStyles.footerBottom}>
                <ul className={footerStyles.footerLinks}>
                    {links.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener">
                            {iconDictionary[link.name]}
                        </a>
                    ))}
                </ul>
                <ul className={footerStyles.toTop}>
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <FaArrowUp />
                    </button>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
