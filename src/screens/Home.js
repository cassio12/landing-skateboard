import React from "react";
import "../App.css";

import ImgHome from "../img/chorao.png";
import ImgInta from "../img/instagram.png";
import ImgFace from "../img/facebook.png";
import ImgTwit from "../img/twitter.png";

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
                    <section className="containerHome-"></section>
                    <section className="containerHome-"></section>
                    <section className="containerHome-"></section>
                </body>
            </main>
        )
    }
}
export default Home;