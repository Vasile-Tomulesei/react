import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './CountryDetails.css';

const CountryDetails = () => {
    const { id } = useParams();
    const [countryData, setCountryData] = useState({});
    const url = 'https://restcountries.com/v2/name/' + id;
    useEffect(() => {
        async function fetchCountry() {
            const response = await fetch(url);
            const fetchedCountry = await response.json();
            setCountryData(fetchedCountry[0]);
        }
        fetchCountry();
    }, [url])
    return (
        <div>
 
            <Link to="/">
                <button className="backButton">Back</button>
            </Link>
            <div className='CDetailscontainer'>
                <img className="CDetailsFlag" src={countryData.flag} alt={countryData.name} />
                <div className="CDetailsText">
                    <h2>{countryData.name}</h2>
                    <h5>Native Name: {countryData.nativeName}</h5>
                    <h5>Population: {countryData.population}</h5>
                    <h5>Region: {countryData.region}</h5>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails
