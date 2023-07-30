import React from 'react';
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";


import "./Footer.scss";

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='footer-content'>
                <div className="col">
                    <div className='title'>About</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium mollitia eligendi temporibus iusto, saepe eum consequuntur ipsam odit error quos.
                    </div>
                </div>
                <div className="col">
                <div className='title'>Contact</div>
                    <div className="c-item">
                        <FaLocationArrow/>
                        <div className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus.</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt/>
                        <div className="text">
                            Phone: 7410852963
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope/>
                        <div className="text">
                            Email: abc@xyz.com
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className='title'>Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projecters</span>
                </div>
                <div className="col">
                <div className='title'>Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions1</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        MYSTORE 2023 CREATED BY UTKARSH SINGH. PREMIUM E-COMMERCE SOLUTION.
                    </div>
                    <img src={Payment} alt="not found" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
