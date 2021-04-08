import React, {Component} from 'react';
import './footer.css';

import facebookIcon from '../../img/facebook.png';
import twitterIcon from '../../img/twitter.png';
import instagramIcon from '../../img/instagram.png';
import youtubeIcon from '../../img/youtube.png';
import pinterestIcon from '../../img/pinterest.png';

export default class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="menu">
                    <a href="#!">Карта</a>
                    <a href="#!">Мои деревья</a>
                    <div className="logo">
                        <h1 className="big-h1">Ekb <span className="small-h1">Trees</span></h1>
                    </div>
                    <a href="#!">Контакты</a>
                    <a href="#!">Помощь</a>
                </div>
                <div className="line"></div>
                <div className="social">
                    <img src={facebookIcon} alt=""></img>
                    <img src={twitterIcon} alt=""></img>
                    <img src={instagramIcon} alt=""></img>
                    <img src={youtubeIcon} alt=""></img>
                    <img src={pinterestIcon} alt=""></img>
                </div>
                <p className="privacy-terms">© 2020 — 2021 Privacy-Terms</p>
            </footer>
        )
    }
}