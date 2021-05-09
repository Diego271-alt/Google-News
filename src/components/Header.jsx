import React from 'react'
import './styles/Header.css'


export default function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span style={{color:"white"}}>
                    Google News
                </span>
            </div>
        </nav>
    )
}
