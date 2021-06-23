import React from 'react'

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
                <span>🔔</span>
                <span className="user-name">Rubén Fuenzalida</span>
                <span className="user-admin">Administrador</span>
                <img className="avatar" src="assets/avatar.png" alt="avatar administrador" />
            </div>
      </header>
    )
}
