import React from 'react'
import { Link } from 'react-router-dom';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const Card = ({ allCountries }) => {
    return (
        <div className="cards">
            {allCountries?.map(({ name, population, region, capital, flags }) => {
                return (
                    <div key={name.common} className="card">
                        <Link
                            to={name.common.toLowerCase()}
                            state={allCountries.filter(country => country.name.common === name.common)}>
                            <img src={flags.png}
                                alt={name.common} />
                        </Link>

                        <div className="card--body">
                            <h2>{name.common}</h2>

                            <p>
                                <b>Population:</b>
                                {numberWithCommas(population)}
                            </p>

                            <p>
                                <b>Region:</b>
                                {region}
                            </p>

                            <p>
                                <b>Capital</b>
                                {capital}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}