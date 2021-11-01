import React, { useEffect, useState } from 'react'
import CountryView from './CountryView'
import './CountryContainer.css'
import SearchBar from './SearchBar';
import CountrySearchResultItem from './CountrySearchResultItem';
import FilterCountries from './FilterCountries';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [searchedCountries, setSearchedCountries] = useState([]);

    useEffect(() => {
        async function fetchCountries() {
            const url = 'https://restcountries.com/v2/all';
            console.log('fetchedCountries', url);
            const response = await fetch(url)
            const fetchedCountries = await response.json();

            console.log('fetchedCountries', fetchedCountries);
            setCountries(fetchedCountries);
        }
        fetchCountries();
    }, []);

    const handleSearchBarChange = (value) => {
        console.log('val', value);
        //aici apelez useEfect cu search value
        if (value.length > 2) {
            const url = 'https://restcountries.com/v3.1/name/' + value;
            fetch(url).then((response) => {
                return response.json()
            }).then((data) => {
                console.log('searchedCountries', data);
                setSearchedCountries(data);
            })
        } else if (value.length === 0) {
            setSearchedCountries([]);
        }
    }

    const filterChangeHandler = (val) => {
        console.log('value', val);
        const url = 'https://restcountries.com/v2/continent/' + val;
        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {
            console.log('filteredCountries', data);
            setSearchedCountries(data);
        })
    }

    return (
        <div className="container">
            <div className="">
                <SearchBar onSearchBarChange={handleSearchBarChange} />
                <FilterCountries filterHandler={filterChangeHandler} />
            </div>
            <div className="countriesContainer">
                {searchedCountries.length === 0 && countries.map((country) => {
                    return <CountryView key={country.name} countryData={country} />
                })}
                {searchedCountries.length && searchedCountries.map((searchedCountry) => {
                    return <CountrySearchResultItem key={searchedCountry.name} countryData={searchedCountry} />
                })}
            </div>
        </div>
    )
}

export default CountryContainer
