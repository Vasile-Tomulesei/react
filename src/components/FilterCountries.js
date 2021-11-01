import React from 'react'

const FilterCountries = ({filterHandler }) => {
    const regions = ['Asia', 'America', 'Africa', 'Europe', 'Oceania'];
    const countryFilterHandler = (event) => {
        filterHandler(event.target.value);
    }
    return (
        <div>
            <select onChange={countryFilterHandler}>
                {regions.map(region => <option key={region}>{region}</option>)}
            </select>
        </div>
    )
}

export default FilterCountries
