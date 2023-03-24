import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCountries, getRegion } from '../../redux/countriesSlice/countriesSlice';

const Country = () => {
  const {
    countriesData, isLoading, success, region,
  } = useSelector(
    (store) => store.country,
  );
  const dispatch = useDispatch();

  // const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    if (!countriesData.length) dispatch(getAllCountries());
    // if (success) setCountryData(countriesData);
    if (region) {
      dispatch(getRegion(region));
    }
  }, [dispatch, success, region]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        countriesData.length > 0
        && countriesData.map((item) => (
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
