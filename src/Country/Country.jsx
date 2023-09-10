import "./Country.css"

const Country = ({country}) => {
    const {name, flags, population, area, region, languages, currencies} = country;
    console.log(country)
    return (
        <div className="country">
            <h2>Name: {name?.common}</h2>
            <h3>Official Name: {name?.official}</h3>
            <img src={flags?.png} alt="" />
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
            <h3>Region: {region}</h3>
            <h3>Language: {}</h3>
            <h3>Capital: {}</h3>
            <h3>Currency: {}</h3>
        </div>
    );
};

export default Country;