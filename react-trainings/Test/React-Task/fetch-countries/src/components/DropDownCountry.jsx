import { useState, useEffect } from "react";
import "./DropDown.css";

function DropDownCountry() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://geodata.phplift.net/api/index.php?type=getCountries"
      );
      const data = await response.json();
      //   console.log("Data From Fetch Country",data);
      if (Array.isArray(data?.result) && data?.result.length > 0) {
        const formattedData = data.result.map((item) => ({
          id: item.id,
          name: item.name,
        }));
        // console.log("Formatted Data from Fetch Country",formattedData);
        setCountries(formattedData);
      }
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const fetchStates = async (countryId) => {
    try {
      const response = await fetch(
        `https://geodata.phplift.net/api/index.php?type=getStates&countryId=${countryId}`
      );
      const data = await response.json();
      //   console.log("Data From Fetch State ",data);
      if (Array.isArray(data?.result) && data?.result.length > 0) {
        const formattedData = data.result.map((item) => ({
          id: item.id,
          name: item.name,
        }));
        // console.log("Formatted Data from Fetch State",formattedData);
        setStates(formattedData);
      } else {
        setStates([]);
      }
      setCities([]);
      setSelectedState("");
      setSelectedCity("");
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchCities = async (countryId, stateId) => {
    try {
      const response = await fetch(
        `https://geodata.phplift.net/api/index.php?type=getCities&countryId=${countryId}&stateId=${stateId}`
      );
      const data = await response.json();
      //   console.log("Data From Fetch City",data);

      if (Array.isArray(data?.result) && data?.result.length > 0) {
        const formattedData = data.result.map((item) => ({
          id: item.id,
          name: item.name,
        }));
        // console.log("Formatted Data from Fetch City",formattedData);
        setCities(formattedData);
      } else {
        setCities([]);
      }
      setSelectedCity("");
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    fetchStates(selectedCountry);
  };

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setSelectedState(selectedState);
    fetchCities(selectedCountry, selectedState);
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedCountryObj = countries.find(
      (country) => country.id === selectedCountry
    );
    const selectedStateObj = states.find((state) => state.id === selectedState);
    const selectedCityObj = cities.find((city) => city.id === selectedCity);

    console.log("Country:", selectedCountryObj?.name);
    console.log("State:", selectedStateObj?.name);
    console.log("City:", selectedCityObj?.name);

    setSelectedState("");
    setSelectedCity("");
    setSelectedCountry("");
  };

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit} className="form-container">
  //       <label>Country:</label>
  //       <select value={selectedCountry} onChange={handleCountryChange}>
  //         <option value="">Select Country</option>
  //         {countries.map((country) => (
  //           <option key={country.id} value={country.id}>
  //             {country.name}
  //           </option>
  //         ))}
  //       </select>

  //       <label>State:</label>
  //       <select value={selectedState} onChange={handleStateChange}>
  //         <option value="">Select State</option>
  //         {states.length === 0 ? (
  //           <option disabled>No States Available</option>
  //         ) : (
  //           states.map((state) => (
  //             <option key={state.id} value={state.id}>
  //               {state.name}
  //             </option>
  //           ))
  //         )}
  //       </select>

  //       <label>City:</label>
  //       <select value={selectedCity} onChange={handleCityChange}>
  //         <option value="">Select City</option>
  //         {cities.length === 0 ? (
  //           <option disabled>No Cities Available</option>
  //         ) : (
  //           cities.map((city) => (
  //             <option key={city.id} value={city.id}>
  //               {city.name}
  //             </option>
  //           ))
  //         )}
  //       </select>

  //       <button type="submit">Submit</button>
  //     </form>
  //   </div>
  // );

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Country:
          </label>
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            State:
          </label>
          <select
            value={selectedState}
            onChange={handleStateChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select State</option>
            {states.length === 0 ? (
              <option disabled>No States Available</option>
            ) : (
              states.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))
            )}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            City:
          </label>
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select City</option>
            {cities.length === 0 ? (
              <option disabled>No Cities Available</option>
            ) : (
              cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))
            )}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default DropDownCountry;
