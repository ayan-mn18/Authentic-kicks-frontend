import React from 'react';
import './Footer.css'; // Your component's CSS file
import twitterIcon from '../../assets/twitter.png';
import linkedinIcon from '../../assets/linkedin.png';
import discordIcon from '../../assets/discord.png';
import instagramIcon from '../../assets/instagram.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-text">
                All Rights Reserved by Custom Tees 2023
            </div>
            <div className="footer-social-media-icons">
                <a href="https://twitter.com" >
                    <div className="icon-box-footer">
                        <img src={twitterIcon} alt="Twitter" />
                    </div>
                </a>
                <a href="https://linkedin.com" >
                    <div className="icon-box-footer">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </div>
                </a>
                <a href="https://discord.com">
                    <div className="icon-box-footer">
                        <img src={discordIcon} alt="Discord" />
                    </div>
                </a>
                <a href="https://instagram.com" >
                    <div className="icon-box-footer">
                        <img src={instagramIcon} alt="Instagram" />
                    </div>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
