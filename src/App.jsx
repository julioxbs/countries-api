import React from 'react'
import { Search } from './components/Search';

export const App = () => {
    const [allCountries, setAllCountries] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [filter, setFilter] = React.useState('');
    const [containsError, setContainsError] = React.useState(false);

    const handleSearch = (data) => {
        setTimeout(() => {
            setAllCountries(data.length > 8 ? data.slice(0, 8) : data);
        }, 500);
    }

    React.useEffect(() => {
        async function getAllCountries() {
            let name;
            let isFilter = filter.length > 0 && `region/${filter}`;

            if (search.length > 0) {
                setFilter('');
                name = `name/${search}`;
            } else {
                name = 'all';
            }

            try {
                const res = await fetch(`https://restcountries.com/v3.1/${isFilter ? isFilter : name}`);

                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(text);
                }

                const data = await res.json();

                setContainsError(false);

                return handleSearch(data);

            } catch (err) {
                setContainsError(true);
            }
        }

        getAllCountries();
    });

    return (
        <Search
            allCountries={allCountries}
            setSearch={setSearch}
            setFilter={setFilter}
            containsError={containsError}
        />
    );
}