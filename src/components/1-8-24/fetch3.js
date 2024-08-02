

import { useEffect, useState } from "react";
import axios from "axios";

const FetchApi = () => {
    const [countries, setCountries] = useState([]); 
    const [selectedCountry, setSelectedCountry] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, status } = await axios.get("https://restcountries.com/v3.1/all");
                if (status === 200) {
                    setCountries(data);
                }
            } catch (err) {
                console.error("Error fetching countries:", err);
            }
        };

        fetchData();
    }, []);

    const handleSelectChange = (event) => {
        const selectedName = event.target.value;
        const country = countries.find(country => country.name.common === selectedName);
        setSelectedCountry(country);
    };

    return (
        <>
            <h2>Fetch API</h2>
            <select name="countrySelect" onChange={handleSelectChange} defaultValue="">
                <option value="" disabled>Select a country</option>
                {countries.map((country) => (
                    <option key={country.cca3} value={country.name.common}>
                        {country.name.common}
                    </option>
                ))}
            </select>
            {selectedCountry && (
                <div>
                    <h4>{selectedCountry.cca3}</h4>
                    <h4>{selectedCountry.name.common}</h4>
                </div>
            )}
        </>
    );
};

export default FetchApi;
