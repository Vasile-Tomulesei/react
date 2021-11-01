import React from 'react'
import { Link } from 'react-router-dom'
import './CountrySearchResultItem.css'

const CountrySearchResultItem = ({ countryData }) => {
    return (
        <div className="container">
            <Link to={`/country/${countryData.name.common}`}>
                <img src={countryData.flags.svg} alt={countryData.name.common} />
            </Link>
            <h4>{countryData.name.common}</h4>
            <h5>Population: {countryData.population}</h5>
            <h5>Region: {countryData.region}</h5>
            <h5>Capital: {countryData.capital[0]}</h5>
        </div>
    )
}

export default CountrySearchResultItem
