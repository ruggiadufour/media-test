import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
const assets_path = "mediacore/assets";

export default function Header({setMenu, menu}) {
    return (
        <header className="header d-flex align-items-center">
            <div className="menu-container" onClick={()=>{setMenu(m=>!m)}}>
                <div className={`${menu?"menu-btn menu-btn-clicked":"menu-btn"}`}>
                    <div></div>
                </div>
            </div>

            <p className="brand ">MediaCore®</p>
            <div className="d-flex gap-3 align-items-center right-elements">
                <img src={`${assets_path}/svgs/bell.svg`} alt="bell icon" />
                <span className="user-name">Rubén Fuenzalida</span>
                <span className="user-admin">Administrador</span>
                <img className="avatar" src={`${assets_path}/avatar.png`} alt="avatar administrador" />
                <Link to="/clientes/mediacore/login">LogIn</Link>
            </div>
      </header>
    )
}
