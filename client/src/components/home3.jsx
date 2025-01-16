import React, { useState } from "react";
import "../css/home2.css"
import missiya from "../images/missiya.png"
import security from "../images/security.png"
import programmer from "../images/prog.png"
import kablo from "../images/kablo.png"
import pp from "../images/pp1.png"
import clock from "../images/clockicon.png"
import heart from "../images/hearticon.png"
import chat from "../images/chatscircle.png"
import bookmark from "../images/bookmarkicon.png"
import menu from "../images/menu.png"
import whois from "../images/whios.png"
import logo from "../images/kaniber.png";
import arrow from "../images/arrow.png";
import linkedln from "../images/in.png";
import vector from "../images/vector.png";
import instagram from "../images/instagramlogo.png";
import facebook from "../images/facebooklogo.png";



const Home3 = () => {
    const [likeCount1, setLikeCount1] = useState(0); 
    const [likeCount2, setLikeCount2] = useState(0); 
    const [likeCount3, setLikeCount3] = useState(0); 
    const handleLikeClick1 = () => {
    setLikeCount1(likeCount1 + 1);
    }  
    const handleLikeClick2 = () => {
    setLikeCount2(likeCount2 + 1);
    }  
    const handleLikeClick3 = () => {
    setLikeCount3(likeCount3 + 1);
    }  


    return (
        <div className="home3">
            <div className="home3__container">
                <img src={missiya} alt="missiya" className="missiya" />
                <div className="mission">
                    <p id="mission">Missiyamiz</p>
                    <p id="mission_desc">Kibertəhlükəsizlik sahəsində geniş təhsil və praktiki təcrübə imkanları təqdim edərək istifadəçiləri müasir təhdidlərə qarşı hazırlayacaq və onları real dünya təhlükəsizlik problemləri ilə üzləşdirərək bacarıqlarını inkişaf etdirmələrinə imkan yaradacağıq.</p>
                </div>
            </div>
            <div className="blog">
                <div className="blog_info">
                    <p id="p1_blog"><i class="fa-solid fa-less-than"></i> Blog <i class="fa-solid fa-greater-than"></i></p>
                    <p id="p2_blog"><i>Kiber dünyanın</i> yeniliklərindən xəbərdar olun</p>
                    <p id="p3_blog">Mütəmadi olaraq paylaşılacaq bloglar vasitəsilə yeni kiber təhdidlər, texnologiyalar və mütəxəssis tövsiyələri ilə tanış olacaqsınız</p>
                </div>
                <div className="blog_cards">
                    <div className="blog_card1">
                        <div className="blog_card1_info" >
                            <div className="card1_img">
                                <img src={security || "security.png"} alt=""  />
                            </div>
                            <div className="card1_info">
                                <p id="p1_card">2024-cü ilin Kibertəhlükəsizlik Trendləri</p>
                                <p id="p2_card">Yeni hücum növləri və onlara qarşı qorunma yolları haqqında bilik əldə <br />edin.</p>
                                <div style={{display: "flex", alignItems: "center", marginTop: "5px"}}>
                                    <img src={pp} alt=""/>
                                    <p style={{color: "rgba(128, 128, 128, 1)", fontWeight: "500", fontSize: "20px"}}>Kamal Atluxanov</p>
                                </div>
                            </div>
                        </div>
                        <div className="icons">
                            <div className="icons1">
                                <div className="time_icons">
                                <img className="clock" src={clock} alt="" />
                                <p className="time">22 Noyabr, 19:51</p>
                                </div>
                                <div className="like_icons">
                                <div className="like_icons">
                                        <img
                                            className="heart"
                                            src={heart}
                                            alt="heart"
                                            onClick={handleLikeClick1} 
                                        />
                                        <p className="like">{likeCount1}</p>
                                </div>
                                <div className="comment_icons">
                                <img className="chat" src={chat} alt="" />
                                <p className="comment_number">47</p>
                                </div>
                            </div>
                        </div>
                            <div className="icons2">
                                <div className="bookmark_icons">
                                <img className="bookmark" src={bookmark} alt="" />
                                <img className="menu" src={menu} alt="" />
                                </div>
                            </div>
                    </div>
                </div>
                <div className="blog_card2">
                        <div className="blog_card2_info">
                            <div className="card2_info">
                                <p id="p1_card">Etik Xakinq: Ən Çətin Simulyasiyalar</p>
                                <p id="p2_card">Hücum texnikalarını öyrənin və rəqəmsal sistemləri necə zəiflədə <br />biləcəyinizi başa düşün</p>
                                <div style={{display: "flex", alignItems: "center", marginTop: "5px"}}>
                                    <img src={pp} alt=""/>
                                    <p style={{color: "rgba(128, 128, 128, 1)", fontWeight: "500", fontSize: "20px"}}>Nuran Memisov</p>
                                </div>
                            </div>
                            <div className="card2_img">
                                <img src={programmer || "programmer.png"} alt="" />
                            </div>
                        </div>
                        <div className="icons">
                            <div className="icons1">
                                <div className="time_icons">
                                <img className="clock" src={clock} alt="" />
                                <p className="time">22 Noyabr, 19:51</p>
                                </div>
                                <div className="like_icons">
                                <img
                                    className="heart"
                                    src={heart}
                                    alt="heart"
                                    onClick={handleLikeClick2} />
                                    <p className="like">{likeCount2}</p>
                                </div>
                                <div className="comment_icons">
                                <img className="chat" src={chat} alt="" />
                                <p className="comment_number">47</p>
                                </div>
                            </div>
                            <div className="card2_icons2">
                                <div className="bookmark_icons">
                                <img className="bookmark" src={bookmark} alt="" />
                                <img className="menu" src={menu} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog_card3">
                        <div className="blog_card3_info">
                            <div className="card3_img">
                                <img src={kablo} alt="" />
                            </div>
                            <div className="card3_info">
                                <p id="p1_card">İstənməyən Hücumlara Qarşı Müdafiə Strategiyaları</p>
                                <p id="p2_card">Müasir alətlər və metodlarla şəbəkə və sistemlərinizi qoruyun.</p>
                                <div style={{display: "flex", alignItems: "center", marginTop: "5px"}}>
                                    <img src={pp} alt=""/>
                                    <p style={{color: "rgba(128, 128, 128, 1)", fontWeight: "500", fontSize: "20px"}}>Amin Qurbanli</p>
                                </div>
                            </div>
                        </div>
                        <div className="icons">
                            <div className="icons1">
                                <div className="time_icons">
                                <img className="clock" src={clock} alt="" />
                                <p className="time">22 Noyabr, 19:51</p>
                                </div>
                                <div className="like_icons">
                                <img
                                className="heart"
                                src={heart}
                                alt="heart"
                                onClick={handleLikeClick3} />
                                <p className="like">{likeCount3}</p>
                                </div>
                                <div className="comment_icons">
                                <img className="chat" src={chat} alt="" />
                                <p className="comment_number">47</p>
                                </div>
                            </div>
                            <div className="card2_icons2">
                                <div className="bookmark_icons">
                                <img className="bookmark" src={bookmark} alt="" />
                                <img className="menu" src={menu} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <svg viewBox="0 0 1867.81 167.13" xmlns="http://www.w3.org/2000/svg">
                <path id="wavePath" fill="transparent" d="M0,83.56 Q150,167.13 300,83.56 T600,83.56 T900,83.56 T1200,83.56 T1500,83.56 T1800,83.56 T1800,83.56" />
                <text fill="#6E0B13" font-size="32" font-family="Arial" fontWeight={600}>
                    <textPath href="#wavePath">
                        rEtibarlı və güvənli rəqəmsal həllər Etibarlı və güvənli rəqəmsal həllər Etibarlı və güvənli rəqəmsal həllər Etibarlı və güvənli rəqəm
                    </textPath>
                 </text>
            </svg>
            <div className="whois">
                <div className="whois_div">
                    <div className="whois_info">
                            <p id="p1">Biz <i>Kimik</i>?</p>
                            <p id="p2">Kaniber, informasiya təhlükəsizliyi sahəsində irəliləyişlərə<br /> töhfə vermək üçün bir araya gəlmiş üç qrup yoldaşı<br /> tərəfindən təsis edilmiş innovativ bir startapdır. <br /> Məqsədimiz, lokal istedadların inkişafını dəstəkləməklə <br /> regional və beynəlxalq kibertəhlükəsizlik mühitində <br />rəqabətə hazır bir ekosistem yaratmaqdır.</p>
                            <p id="p3"><i class="fa-solid fa-less-than"></i> Haqqimizda <i class="fa-solid fa-greater-than"></i></p>
                    </div>
                    <div className="whois_img">
                        <img src={whois} alt="" />
                    </div>
                </div>
            </div>
            <div className="kurs">
                <div className="kurs_div">
                    <div className="kurs_info1">
                        <div className="buttons">
                            <p id="p1">Kampus</p>
                            <p id="p2">4 ayliq tedris</p>
                        </div>
                        <p id="p-xidmetlerimiz">Xidmetlerimiz:</p>
                        <i id="i1">Kiber tehlukesizlik tedrisi</i>
                        <p id="p3"><i class="fa-solid fa-less-than"></i> Kurs <i class="fa-solid fa-greater-than"></i></p>
                    </div>
                <div className="kurs_info2">
                    <p>Real təcrübə və müasir biliklər əldə edərək peşəkar gələcəyinizi <br /> qurun. 4 aylıq kursumuzda kibertəhlükəsizlik sahəsinin əsaslarını  <br />öyrənəcək, praktiki yanaşmalarla real dünyada tətbiq edilən <br /> metodikaları mənimsəyəcəksiniz.  Mütəxəssis təlimçilərin rəhbərliyi <br /> altında, zəifliklərin təhlili, hücum və müdafiə strategiyaları kimi vacib <br /> bacarıqlarınızı inkişaf etdirəcəksiniz. Gələcəyinizə mükəmməl bir <br />başlanğıc etmək üçün bizə qoşulun!</p>
                    <p id="p4">Muraciet edin</p>
                </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer_div">
                    <div className="footer_info">
                        <img src={logo} alt="" />
                        <p>Fikirləriniz bizim üçün dəyərlidir. Əlaqə saxlamaq və ya suallarınızı paylaşmaq üçün mail adresinizi daxil edin</p>
                        <div class="mail">
                            <p>Mail adresiniz</p>
                            <div class="input-wrapper">
                                <input type="text" placeholder="example@example.com" />
                                <img src={arrow} alt="arrow" />
                            </div>
                        </div>
                    </div>
                    <div className="footer_contact">
                    <div className="s-media">
                        <p id="s1">Sosial media</p>
                        <div class="social-media-list">
                            <div class="social-item">
                                <div class="icon-wrapper">
                                    <img id="linkedln" src={linkedln} alt="LinkedIn Logo" />
                                    <img id="vector" src={vector} alt="Vector" />
                                </div>
                                <p>Linkedln</p>
                            </div>
                            <div class="social-item">
                                <img src={instagram} alt="Instagram Logo" />
                                <p>Instagram</p>
                            </div>
                            <div class="social-item">
                                <img src={facebook} alt="Facebook Logo" />
                                <p>Facebook</p>
                            </div>
                        </div>
                    </div>
                        <div className="contact">
                         <p id="c1">Əlaqə</p>
                         <p className="number">+994 55 555 55 55</p>
                         <p className="email">kaniber@gmail.com</p>
                         </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>



        );
    };
   



export default Home3;