import React, {Component} from 'react'; 
import {NavLink} from 'react-router-dom';
import './login-form.css';

import twitterIcon from '../../img/twitter.png';
import vkIcon from '../../img/vk.png';
import facebookIcon from '../../img/facebook.png';
import googleIcon from '../../img/google.png';

export default class LoginForm extends Component{
    render(){
        return(
            <section>
                <aside className="login-aside">
                    <h2>С возвращением!</h2>
                    <p>Войдите в аккаунт, чтобы продолжить</p>
                    <NavLink className="link-register" exact to='/registration' activeclassname="active">Зарегистрироваться</NavLink>
                </aside>
                <form name="authorization" action="" className="login-form animate__animated animate__slideInLeft">
                    <h2>Вход в аккаунт</h2>
                    <input type="email" placeholder="Логин" name="email" id="user-email" required/>
                    <input type="password" placeholder="Пароль" name="psw" id="user-password" required/>
                    <button type="submit">Войти</button>
                    <p className="login-help">
                    <label className="login-checkbox">
                            <input type="checkbox" name="remember" className="visually-hidden"/>
                            <span className="checkbox-indicator"></span>
                            Запомните меня
                        </label>
                        <a className="restore" href="#!">Забыли пароль?</a>
                    </p>
                    <p className="login-message">или войдите с</p>
                    <div className="flex">
                        <div className="social">
                            <a href="#!" target="_blank"><img src={googleIcon} alt="google-link"></img></a>
                        </div>
                        <div className="social">
                            <a href="#!" target="_blank"><img src={vkIcon} alt="google-link"></img></a>
                        </div>
                        <div className="social">
                            <a href="#!" target="_blank"><img src={facebookIcon} alt="facebook-link"></img></a>    
                        </div>
                        <div className="social">
                            <a href="#!" target="_blank"><img src={twitterIcon} alt="twitter-link"></img></a>
                        </div>
                    </div>
                    <div className="flex-register">
                    <p>Нет аккаунта?</p><p className="yellow"> <NavLink to='/registration'>Зарегистрируйтесь сейчас!</NavLink></p>
                </div>
                
                <p className="privacy-terms">© 2020 — 2021 Privacy-Terms</p>
                </form>           
            </section>
        );
    }
}