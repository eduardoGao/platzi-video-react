import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames"

import { logoutRequest } from "../actions"
import gravatar from "../utils/gravatar"
import "../assets/styles/components/Header.scss";
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from "../assets/static/user-icon.png";

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({})
  }

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <React.Fragment>
      <header className={headerClass}>

        <Link to="/">
          <img className="header__img" src={logo} alt="logo" />
        </Link>

        <div className="header__menu">
          <div className="header__menu-profile">
            {
              hasUser ?
                <img src={gravatar(user.email)} alt={user.email} />
                : <img src={userIcon} alt="perfil" />
            }
            <p>Perfil</p>
          </div>
          <ul className="header__menu-login">
            {
              hasUser ?
                <li>{user.name}</li>
                : null
            }

            {hasUser ?
              <li>
                <a href="#logout" onClick={handleLogout}>Cerrar Sesión</a>
              </li>
              :
              <li>
                <Link to="/login">
                  Iniciar Sesión
                </Link>
              </li>
            }
            {/* <a href="/">Cuenta</a> */}

          </ul>
        </div>
      </header>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
