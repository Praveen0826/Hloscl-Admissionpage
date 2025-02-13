import  { useState, useEffect } from 'react';
import { Country } from 'country-state-city';

const CountryComponent = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching countries on component mount
  useEffect(() => {
    const fetchCountries = () => {
      try {
        const countriesData = Country.getAllCountries(); // Fetch all countries
        const formattedCountries = countriesData.map((country) => ({
          value: country.isoCode, // The value will be the country's ISO code
          displayValue: country.name, // The name of the country
        }));
        setCountries(formattedCountries); // Set countries to state variable
        setIsLoading(false); // Set loading to false
      } catch (err) {
        setError('Failed to fetch countries');
        setIsLoading(false); // Set loading to false
      }
    };

    fetchCountries();
  }, []); // Empty dependency array ensures it runs once when the component mounts

  if (isLoading) {
    return <div>Loading countries...</div>; // Display while fetching
  }

  if (error) {
    return <div>{error}</div>; // Display if an error occurs
  }

  return (
    <div className='mt-1 w-full  px-3 py-2 text-sm  rounded focus:outline-none border hover:border-slate-200  text-black border-slate-200 bg-white'>
      
      <select>
        <option value="" className='focus:outline-none'>Select Country</option>
        {countries.map((country) => (
          <option className='focus:outline-none' key={country.value} value={country.value}>
            {country.displayValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryComponent;
