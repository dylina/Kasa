import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Flat(){

    const { id } = useParams();
    const [flat, setFlat] = useState(null)

    const [isLoading, setIsLoading] = useState(true);
    const [isError404, setIsError404] = useState(false)

    useEffect(() => {

        fetch('/data.json')
        .then(response => response.json())
        .then(flats => {

            let isFound = false;

            flats.forEach(item => {
                if(item.id === id){
                    setFlat(item)
                    isFound = true;
                }
            });

            if(!isFound){
                setIsError404(true)
            }

            setIsLoading(false)
        })

    }, [])


    if(isLoading) {
        return (<>Chargement en cours...</>)
    }

    if(isError404) {
        return (<>Erreur 404</>)
    }

    return (<>
        <Header />
        logement : {flat.title}

    </>)
}
