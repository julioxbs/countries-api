import React from 'react'
import { SearchOutline } from 'react-ionicons'
import { Card } from './Card';

const options = [
    { value: '', title: 'Filter by region' },
    { value: 'europe', title: 'Europe' },
    { value: 'asia', title: 'Asia' },
    { value: 'africa', title: 'Africa' },
    { value: 'americas', title: 'Americas' },
    { value: 'oceania', title: 'Oceania' },
];

export const Search = ({ allCountries, setSearch, setFilter, containsError }) => {
    return (
        <main className='container'>
            <div className='search'>
                <div className='search-input'>
                    <SearchOutline
                        height="20px"
                        width="20px"
                        color="hsl(0, 0%, 52%)"
                    />

                    <input
                        type="search"
                        placeholder='Search for a country...'
                        onChange={(e) => setSearch(e.target.value)} />
                </div>

                <select onChange={(e) => setFilter(e.target.value)}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.title}
                        </option>
                    ))}
                </select>
            </div>

            {!containsError ? (<Card allCountries={allCountries} />) : (<h2>Country not found: Try to write the name in English.</h2>)}
        </main>
    )
}