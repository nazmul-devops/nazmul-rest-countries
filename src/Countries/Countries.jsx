import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])

    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedCountry = country => {
        console.log(`Add this to your visited countries`);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlag = flag => {
        console.log(`Adding Flags`);
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        
        <div>
            {/* Visited Countries Name */}
            <h2>Countries: {countries.length}</h2>
            <div>
                <h2>Visited Countries: {visitedCountries.length}</h2>
                <ol>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>
                            {country.name.common}
                        </li>)
                    }
                </ol>
            </div>
            
            <div>
                {/* Visited Flags */}
                <h2>Visited Flags: {visitedFlags.length}</h2>
                <div className="flagContainer">
                    {
                        visitedFlags.map((flag, id) => <img key={id} src={flag}></img>)
                    }
                </div>
            </div>
            <div className="countriesContainer">
                {
                    countries.map(country => <Country 
                        key={country.cca3}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlag={handleVisitedFlag}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;