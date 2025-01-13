import React from "react";
import "../css/home2.css"
import hacker from "../images/hacker.png"
import medal from "../images/medal.png"
import network from "../images/network.png"
import cloudsecurity from "../images/cloudsecurity.png"
import missiya from "../images/missiya.png"



const Home2 = () => {
    return (
        <div className="home2">
            <div className="home2__container">
                <div className="test_bolmesi">
                    <p id="p1"><i class="fa-solid fa-less-than"></i> Test bolmesi <i class="fa-solid fa-greater-than"></i></p>
                    <p id="p2">Gələcəyin <i>təhlükəsizlik mütəxəssisi</i><br />olmaq yolunda bizimlə birlikdə irəliləyin</p>
                </div>
                <div className="cards">
                    <div className="card1">
                        <div className="hacker_icon">
                            <img src={hacker} alt="hacker" />
                        </div>
                        <div className="card1_info">
                        <div className="card1_text">
                            <p><span id="span">Blue Team:</span> Müdafiəni Gücləndirin</p>
                        </div>
                        <div className="card1_desc">
                            <p>Şəbəkə və sistemlərə hücumları aşkar edərək real təhdidlərə qarşı müasir müdafiə metodları tətbiq edəcəksiniz. Zəiflikləri tapıb qorunma strategiyaları ilə sistemlərinizi gücləndirə bilərsiniz.</p>
                        </div>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="hacker_icon">
                            <img src={network} alt="network" />
                        </div>
                        <div className="card1_info">
                        <div className="card1_text">
                            <p>Şəbəkə təhlükəsizlik zəifliklərini anlamaq</p>
                        </div>
                        <div className="card1_desc">
                            <p>Şəbəkə zəifliklərini təhlil edin və real hücumlara qarşı müdafiə strategiyaları qurun. Qazanacağınız təcrübə, şəbəkə təhlükəsizliyi bacarıqlarınızı müasir təhdidlərə qarşı gücləndirəcək.</p>
                        </div>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="hacker_icon">
                            <img src={cloudsecurity} alt="cloud" />
                        </div>
                        <div className="card1_info">
                        <div className="card1_text">
                            <p><span style={{color:"#A0101B"}}>Red Team:</span> Hücum Taktikaları və Kəşfiyyat</p>
                        </div>
                        <div className="card1_desc">
                            <p>Təhlükəsizlik boşluqlarını tapacaq və sızılma ssenariləri üzərində işləyəcəksiniz. Real hücum taktikaları ilə zəiflikləri istismar edərək, təhlükəsizlik həllərini test etməyiniz mümkündür.</p>
                        </div>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="hacker_icon">
                            <img src={medal} alt="medal" />
                        </div>
                        <div className="card1_info">
                        <div className="card1_text">
                            <p>Liderlik Yüksəlişi və Nailiyyətlər</p>
                        </div>
                        <div className="card1_desc">
                            <p>Şəbəkə zəifliklərini təhlil edin və real hücumlara qarşı müdafiə strategiyaları qurun. Qazanacağınız təcrübə, şəbəkə təhlükəsizliyi bacarıqlarınızı müasir təhdidlərə qarşı gücləndirəcək.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="more-container">
                    <div class="more">
                        <p>Daha çox</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
};

export default Home2;
