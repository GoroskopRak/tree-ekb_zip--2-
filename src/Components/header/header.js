import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default class Header extends Component {
  handleNavbar() {
    const navBar = document.getElementById("navBar");
    const icon = document.querySelector(".fa");
    const burger = document.querySelector(".burger-btn");

    navBar.hidden = !navBar.hidden;
    navBar.hidden ? (icon.style.color = "black") : (icon.style.color = "white");
    navBar.hidden
      ? (burger.style.background = "inherit")
      : (burger.style.background = "#333333");
  }
  render() {
    return (
      <header>
        <div className="mobile-header">
          <div className="topnav">
            <button className="burger-btn" onClick={this.handleNavbar}>
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div id="navBar" className="nav-bar" hidden>
            <a href="#!" className="animate__animated animate__fadeIn">
              Карта
            </a>
            <a href="#!" className="animate__animated animate__fadeIn">
              Мои деревья
            </a>
            <a href="#!" className="animate__animated animate__fadeIn">
              Контакты
            </a>
            <a href="#!" className="animate__animated animate__fadeIn">
              Помощь
            </a>
          </div>
        </div>
        <div className="desktop-header">
          <div className="logo">
            <h1 className="big-h1">
              Ekb <span className="small-h1">Trees</span>
            </h1>
          </div>
          <div className="menu">
            <a href="#!">Карта</a>
            <a href="#!">Мои деревья</a>
            <a href="#!">Контакты</a>
            <a href="#!">Помощь</a>
          </div>
          <div className="sign-links">
            <NavLink exact to="/" activeclassname="active">
              Войти
            </NavLink>
            <NavLink exact to="/registration" activeclassname="active">
              Зарегистрироваться
            </NavLink>
          </div>
        </div>
      </header>
    );
  }
}
