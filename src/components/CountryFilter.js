import React from 'react'

const CountryFilter = () => {
    const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
    return (
        <div>
            <select>
                {
                    regions.map((region) => {
                        return <option />
                    })
                }
            </select>
        </div>
    )
}

export default CountryFilter
