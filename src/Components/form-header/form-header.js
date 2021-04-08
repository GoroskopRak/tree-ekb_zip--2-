import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './form-header.css';

export default class FormHeader extends Component{  
    render(){
        return(
            <div className="welcome">
                <h1 className="big-h1">Ekb <span className="small-h1">Trees</span></h1>
                <h2>Добро пожаловать!</h2>
                <p>Пожалуйста, войдите в аккаунт или зарегистрируйтесь, чтобы начать</p>
                <div className="links">
                    <button className="btn-login"><NavLink exact to='/' activeclassname="active-link">Войти</NavLink></button>
                    <button className="btn-sign-up"><NavLink exact to='/registration' activeclassname="active-link">Зарегистрироваться</NavLink></button>
                </div>
            </div>
        )
    }
}