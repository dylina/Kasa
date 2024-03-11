import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Home(){
    return (<>
    <Header />
    accueil

        <Link to="/logement/cb02d69b">Visiter le logement</Link>

    <Footer />
    </>)
}
