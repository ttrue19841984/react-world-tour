import { useState } from "react";
import "./Country.css";
import "./Countries.css";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  // console.log(country)
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // setVisited(true);
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>area: {area}</p>
      <p>Code: {cca3}</p>
      <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
      <br />
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
      <br />
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {/* {visited && 'I have visited this Country'} */}
      {visited ? "I have visited this country" : "I want to visited"}
    </div>
  );
};

export default Country;
