import React from 'react';
import Logo from "./footerLogo.png"
import './style.scss'

export default function Footer(){
    return (<>
        <footer className="footer-container">
			<img src={Logo} className="footer-logo" alt="Kasa Logo" />
			<h3 className="footer-credit">© 2020 Kasa. All rights reserved</h3>
		</footer>
    </>)
}
