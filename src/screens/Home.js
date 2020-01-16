import React from "react";
import "../App.css";

import ImgHome from "../img/chorao.png";
import ImgInta from "../img/instagram.png";
import ImgFace from "../img/facebook.png";
import ImgTwit from "../img/twitter.png";
import IconArow from "../img/arow.png"

import Text from "../components/Text";

class Home extends React.Component {

    render(){
        return(
            <main className="containerHome">
                <header className="containerHome-header">
                    <nav className="header-navegation">
                        <p className="navegation-logo">Skater.</p>
                        <ul className="navegation-boxList">
                            <li className="boxList-iten">skate news</li>
                            <li className="boxList-iten">videos</li>
                            <li className="boxList-iten">events</li>
                            <li className="boxList-iten">contact</li>
                        </ul>
                    </nav>
                    <div className="header-boxSubscribe">
                        <Text value="subscribe"/>
                        <figure className="subscribe-boxItens">
                            <img className="boxItens-iten" src={ImgFace}></img>
                            <img className="boxItens-iten" src={ImgTwit}></img>
                            <img className="boxItens-iten" src={ImgInta}></img>
                        </figure>
                    </div>
                </header>
                <body className="containerHome-body">
                    <section className="containerHome-sectionHome">
                        <div className="sectionHome-boxApresentação">
                            <img className="boxApresentação-imgHome" src={ImgHome}></img>
                            <p className="boxApresentação-textHome">Meet the skateboarder of the year.</p>
                        </div>
                        <h1 className="sectionHome-title">Skater.</h1>
                    </section>
                    <section className="containerHome-sectioFirstPlace">
                        <div className="sectioFirstPlace-boxDirectionImage">
                            <div className="boxDirectionImage-circleYellow"></div>
                            <figure className="boxDirectionImage-boxImage">
                                <img className="boxImage-img" src={ImgHome}></img>
                            </figure>
                        </div>
                        <div className="sectioFirstPlace-boxInfo">
                            <div className="boxInfo-numberPlacing">
                                <p className="numberPlacing-numberOne">01</p>
                                <h2 className="numberPlacing-nameFirstPlacing">Alexandre Magno</h2>
                            </div>
                            <p className="boxInfo-paragrafoInfoFirstPlacing">
                                Alexander the Great Abram,
                                better known by its stage name Weeping,
                                was a singer, songwriter, skateboarder, filmmaker,
                                Brazilian writer and businessman. He was the vocalist.    
                            </p>
                            <div className="boxInfo-boxLinkBio">
                                <a href="#" className="boxLinkBio-Txt">Read Full Bio</a>
                                <img className="boxLinkBio-imgArow arow" src={IconArow}></img>
                            </div>
                        </div>
                    </section>
                    <section className="containerHome-">
                        <div className="">
                            <div></div>
                            <figure>
                                <img></img>
                            </figure>
                        </div>
                        <div>
                            <div>
                                <p></p>
                                <h2></h2>
                            </div>
                            <p></p>
                            <div>
                                <a href="#"></a>
                                <img className="arow" src={IconArow}></img>
                            </div>
                        </div>
                    </section>
                    <section className="containerHome-"></section>
                </body>
            </main>
        )
    }
}
export default Home;