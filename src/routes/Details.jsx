import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../redux/countriesSlice/countriesSlice';

const Details = () => {
  const { countrySearch } = useSelector((store) => store.country);
  const dispatch = useDispatch();
  const { code } = useParams();

  useEffect(() => {
    if (code) {
      dispatch(getCountry(code.toLowerCase()));
    }
  }, [dispatch, code]);
  return (
    <div>
      {countrySearch.length > 0 ? (
        <div>
          <div>
            <img
              src={countrySearch[0].flags.png}
              alt={countrySearch[0].flags.alt}
            />
            <h2>{countrySearch[0].name.common}</h2>
          </div>
          <div>
            <p>{countrySearch[0].population}</p>
          </div>
        </div>
      ) : (
        <h1>no detail</h1>
      )}
    </div>
  );
};

export default Details;
