import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import './style.scss';
import Logo from "./logo.png"



export default function Header(){
    return (<header className="nav-header">
            <h1>
				<img src={Logo} alt="kasa logo" />
			</h1>
            <nav className="nav">
				{/* This is two React Router NavLink, that will change the active class depending on the current route. */}
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to="/"
				>
					Accueil
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to="/about"
				>
					A Propos
				</NavLink>
			</nav>
    </header>)
}