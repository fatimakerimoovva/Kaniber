import React, { useState } from "react";
import logo from "../images/kaniber.png";
import "../css/navbar.css";

const Header = () => {
    const [language, setLanguage] = useState('AZ'); // Varsayılan dil: Azərbaycan dili

    // const handleLanguageChange = () => {
    //     setLanguage(language === 'AZ' ? 'EN' : 'AZ'); // Dil dəyişimi
    // };

    return (
        <nav>
            <div>
            <a href="" className="nav__brand">
                <img src={logo} alt="logo" className="logo" />
            </a>
            </div>
            <div>
            <ul className="navbar">
                <li className="nav__item"><a href="#" className="nav__link">Testlər</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Blog</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Xidmətlərimiz</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Haqqımızda</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Kurs</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Əlaqə</a></li>
                <li className="nav__item">
                    <a href="#"  className="nav__link"><span onClick={() => setLanguage(language === 'AZ' ? 'EN' : 'AZ')}>{language}</span></a>
                </li>
            </ul>
            </div>
        </nav>
);
};
export default Header;


                

