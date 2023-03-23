import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCountries } from '../../redux/countriesSlice/countriesSlice';

const Country = () => {
  const { countriesData, isLoading, success } = useSelector(
    (store) => store.country,
  );
  const dispatch = useDispatch();

  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    dispatch(getAllCountries());
    if (success) setCountryData(countriesData);
  }, [dispatch, success]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        countryData.length > 0
        && countryData.map((item) => (
          <Link to={`/${item.cioc}`} key={item.name.common}>
            <img src={item.flags.png} alt={item.flags.alt} />
            <div>
              <h3>
                Name:
                {item.name.common}
              </h3>
              <p>
                Population:
                {item.capital}
              </p>
              <p>
                Population:
                {item.population}
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Country;
