import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowUndoOutline } from 'react-ionicons'
import { ThemeContext } from '../Context/ThemeContext'

export const Country = () => {
    let data = useLocation();
    const navigate = useNavigate();
    const { isDark } = React.useContext(ThemeContext);

    const { population, name: { common, nativeName }, region, subregion, capital, tld, currencies, languages, flags, borders } = data?.state[0];

    return (
        <section>
            <div className="container">
                <button 
                className='back-btn' 
                onClick={() => navigate('/')}>
                    <ArrowUndoOutline
                    color={isDark ? '#fff' : '#000'}
                    width={'20px'} 
                    height={"20px"} /> Back
                </button>


                <div className='content-country'>
                    <img src={flags.png} alt={`Flag of ${common}`} />


                    <div className='content-info'>
                        <h2>{common}</h2>

                        <div className='info-list'>
                            <ul>
                                <li><b>Native Name: </b>{Object.values(nativeName)?.[0].common}</li>
                                <li><b>Population: </b>{population}</li>
                                <li><b>Region: </b>{region}</li>
                                <li><b>Sub Region: </b>{subregion}</li>
                                <li><b>Capital: </b>{capital?.[0]}</li>
                            </ul>

                            <ul>
                                <li><b>Top Level Domain: </b>{tld?.[0]}</li>
                                <li><b>Currencies: </b>{
                                    Object.entries(currencies)[0]?.[1]?.name
                                }</li>
                                <li><b>Languages: </b>{
                                    [...Object.entries(languages).map(([key, value]) => value + ', ')]
                                }</li>
                            </ul>
                        </div>

                        <p className='border-countries'>
                            Border Countries: {borders?.slice(0, 3).map((border, key) => <button key={key}>{border}</button>)}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}