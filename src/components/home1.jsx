import React from "react";
import "../css/home1.css"
import lock from "../images/lock.png"
import big_star from "../images/big_star.png"
import small_star from "../images/small_star.png"
import codesyntacsis from "../images/codesyntacsis.png"
import frame from "../images/frame.png"
import tridots from "../images/3dots.png"
import line from "../images/line.png"
import defence from "../images/defence.png"
import circle from "../images/circle.png"





const Home1 = () => {
    return(
        <div className="container">
          <div className="row">
            <div className="text">
              <p id="p1">
              Real <i>təhlükəsizlik problemlərini</i> həll edərək bacarıqlarını göstər!
              </p>
              <p id="p2">
              Blue Team və Red Team konseptlərinə əsaslanan praktiki ssenarilərlə real dünya təhlükələrini aşkar et, zəiflikləri analiz et və hücumlara qarşı strateji həllər qur. İndi liderlər sırasına qoşul!              
              </p>
              <button id="button">
                Indi başla <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="lock">
              <div><img src={lock} alt="lock" className="lockphoto" /></div>
              <div><img src={big_star} alt="big_star" className="big_star" /></div>
              <div><img src={small_star} alt="big_star" className="small_star" /></div>
              <div><img src={codesyntacsis} alt="codesyntacsis" className="codesyntacsis" /></div>
              <div><img src={frame} alt="frame1" className="frame1" /></div>
              <div><img src={frame} alt="frame2" className="frame2" /></div>
              <div><img src={frame} alt="frame3" className="frame3" /></div>
              <div><img src={tridots} alt="tridots" className="tridots" /></div>
              <div><img src={line} alt="line" className="line" /></div>
              <div><img src={defence} alt="defence" className="defence" /></div>
              <div><img src={circle} alt="circle" className="circle" /></div>
            </div>
          </div>
        </div>

    )
}

export default Home1