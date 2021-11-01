import React from 'react'
import { Link } from 'react-router-dom'
import './CountryView.css'

const CountryView = ({ countryData }) => {
    return (
        <div className="container">
            <Link to={`/country/${countryData.name}`}>
                <img src={countryData.flag} alt={countryData.name} />
            </Link>
            <h4>{countryData.name}</h4>
            <h5>Population: {countryData.population}</h5>
            <h5>Region: {countryData.region}</h5>
            <h5>Capital: {countryData.capital}</h5>

        </div>
    )
}

export default CountryView
