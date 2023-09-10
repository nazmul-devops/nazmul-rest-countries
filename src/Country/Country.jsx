import { useState } from "react";
import "./Country.css"

const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, population, area, region} = country;
    
    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2>Name: {name?.common}</h2>
            <h3>Official Name: {name?.official}</h3>
            <img style={{width: '320px', height: '200px'}} src={flags?.png} alt="" />
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
            <h3>Region: {region}</h3>
            <button style={{backgroundColor: visited ? 'blue' : 'white'}} onClick={() => handleVisitedCountry(country)}>I visited</button> <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Wanna Go'}</button>
            {/* <h3>Language: {}</h3>
            <h3>Capital: {}</h3>
            <h3>Currency: {}</h3> */}
        </div>
    );
};

export default Country;