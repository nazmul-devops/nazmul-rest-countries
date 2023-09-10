import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])

    const [visitedCountries, setVisitedCountries] = useState([])

    const handleVisitedCountry = country => {
        console.log(`Add this to your visited countries`);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
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
            <div className="countriesContainer">
                {
                    countries.map(country => <Country 
                        key={country.cca3}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;