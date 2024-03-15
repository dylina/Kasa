import React from 'react';
import { Link } from 'react-router-dom';


export default function Error404(){
    return (
    <div className='error'>
			<div className="error-content">
				<h1 className='error-title'>404</h1>
				<p className='error-subtitle'>Oups! La page que vous demandez n'existe pas.</p>
			</div>
				<Link className='error-return-home' to='/'>Retourner sur la page d'accueil</Link>
	</div>
    )
}
