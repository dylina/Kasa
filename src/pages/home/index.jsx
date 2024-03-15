import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from './banner.png'
import "./style.scss"


export default function Home(){
    return (<>
    <Header />
    <main>
    <div className="banner">
				<img src={Banner} className="banner-img" alt="Banner" />
				<h1 className="banner-title">Chez vous, partout et ailleurs</h1>
			</div>
    accueil

        <Link to="/logement/cb02d69b">Visiter le logement</Link>
        

    </main>
    <Footer />
    </>)
}