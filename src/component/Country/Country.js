import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const {flags, name, area, population, status, region} = props.country;
    return (
        <div className='country-container'>
            <img src={flags.png} alt="flag" />
            <h3>Name: {name.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Rgion: {region}</small></p>
            <p><small>Status: {status}</small></p>
        </div>
    );
};

export default Country;