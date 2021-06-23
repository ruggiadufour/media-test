import React, {useState} from 'react'

export default function Sidebar() {
    const [ deploy, setDeploy] = useState(false)

    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <img className="logo-brand" src="logo192.png" alt="Logo Template" />

                <SidebarButton text={"MediaHost®"} onClick={()=>{setDeploy(d=>!d)}}/>

                <div className={`deploy w-100 ${deploy?"deployed":"undeployed"}`}>
                    <DeployableButton text={"Acerca de MH"} icon="📄"/>
                    <DeployableButton text={"Soporte"} icon="⚙"/>
                </div>
                <SidebarButton text={"MediaSEO®"}/>
                <SidebarButton text={"MediaBlog®"} icon="🔒" />
                <SidebarButton text={"MediaInvestor®"} icon="🔒"/>
                <SidebarButton text={"MediaBroker®"}/>
                <SidebarButton text={"Más Servicios"}/>
            </div>
            
            <div className="d-flex flex-column">
                <AccountButton icon="👤" text={"Mi perfil"}></AccountButton>
                <AccountButton icon="📋" text={"Mi cuenta"}></AccountButton>
                <AccountButton icon="👋" text={"Cerrar sesión"}></AccountButton>
            </div>
        </>
    )
}

function AccountButton({text,icon, onClick=()=>{}}){
    return (
        <button className="account-button" onClick={onClick}>
            <span>{icon}</span>
            <span>{" "+text}</span>
        </button>
    )
}
function SidebarButton({text,icon, onClick=()=>{}}){
    return (
        <button className="sidebar-button" onClick={onClick}>
            <span>{text}</span>
            <span>{icon}</span>
        </button>
    )
}
function DeployableButton({text,icon, onClick=()=>{}}){
    return (
        <button className="deployable-button" onClick={onClick}>
            <span>{icon}</span>
            <span>{" "+text}</span>
        </button>
    )
}