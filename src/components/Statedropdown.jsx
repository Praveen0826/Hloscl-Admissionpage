// import { State } from 'country-state-city';
// import Dropdown from './Commons/Dropdown'

// const StateComponent = ({countryCode = 'IN'}) => {
//     const data = State.getStatesOfCountry(countryCode).map(state => ({
//         value: state.name,
//         displayValue: `${state.name} - ${state.isoCode}`
//     }))
// 	return <Dropdown options={data}></Dropdown>
// }

// export default StateComponent;

import React, { useState, useEffect } from 'react';
import { State } from 'country-state-city';

const StateComponent = () => {
  const [states, setStates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching states of India on component mount
  useEffect(() => {
    const fetchStates = () => {
      try {
        const statesData = State.getStatesOfCountry('IN'); // Fetch all states of India
        const formattedStates = statesData.map((state) => ({
          value: state.isoCode, // The value will be the state's ISO code
          displayValue: state.name, // The name of the state
        }));
        setStates(formattedStates); // Set states to the state variable
        setIsLoading(false); // Set loading to false
      } catch (err) {
        setError('Failed to fetch states');
        setIsLoading(false); // Set loading to false
      }
    };

    fetchStates();
  }, []); // Empty dependency array ensures it runs once when the component mounts

  if (isLoading) {
    return <div>Loading states...</div>; // Display while fetching
  }

  if (error) {
    return <div>{error}</div>; // Display if an error occurs
  }

  return (
    <div className='mt-1 w-full  px-3 py-2 text-sm  rounded focus:outline-none border hover:border-slate-200  text-black border-slate-200 bg-white'>
     
      <select>
        <option value="" className='focus:outline-none'>Select State</option>
        {states.map((state) => (
          <option key={state.value} value={state.value}>
            {state.displayValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StateComponent;
