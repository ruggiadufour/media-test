import React, {useState} from 'react'
import './Sidebar.scss'

export default function Sidebar() {
    const [ deploy, setDeploy] = useState(false)

    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <img className="logo-brand" src="assets/svgs/logo.svg" alt="Logo Template"
                 width="100%" />

                <SidebarButton text={"MediaHost®"} onClick={()=>{setDeploy(d=>!d)}}/>

                <div className={`deploy w-100 ${deploy?"deployed":"undeployed"}`}>
                    <DeployableButton text={"Acerca de MH"} icon="assets/svgs/about-doc.svg"/>
                    <DeployableButton text={"Soporte"} icon="assets/svgs/gear.svg"/>
                </div>
                <SidebarButton text={"MediaSEO®"}/>
                <SidebarButton text={"MediaBlog®"} icon="assets/svgs/lock.svg" />
                <SidebarButton text={"MediaInvestor®"} icon="assets/svgs/lock.svg"/>
                <SidebarButton text={"MediaBroker®"}/>
                <SidebarButton text={"Más Servicios"}/>
            </div>
            
            <div className="d-flex flex-column">
                <AccountButton icon="assets/svgs/profile.svg" text={"Mi perfil"}></AccountButton>
                <AccountButton icon="assets/svgs/account.svg" text={"Mi cuenta"}></AccountButton>
                <AccountButton icon="assets/svgs/close-session.svg" text={"Cerrar sesión"}></AccountButton>
            </div>
        </>
    )
}

function AccountButton({text,icon, onClick=()=>{}}){
    return (
        <button className="account-button" onClick={onClick}>
            {icon && <img src={icon} alt="icon button" width="15px"/>}
            <span>{text}</span>
        </button>
    )
}
function SidebarButton({text,icon, onClick=()=>{}}){
    return (
        <button className="sidebar-button" onClick={onClick}>
            <span>{text}</span>
            {icon && <img src={icon} alt="icon button" />}
        </button>
    )
}
function DeployableButton({text,icon, onClick=()=>{}}){
    return (
        <button className="deployable-button" onClick={onClick}>
            {icon && <img src={icon} alt="icon button" width="18px" />}
            <span>{" "+text}</span>
        </button>
    )
}