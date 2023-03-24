import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setRegion } from '../../redux/countriesSlice/countriesSlice';

const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const selectRef = useRef();

  useEffect(() => {
    if (filter !== '') {
      dispatch(setRegion(filter.toLowerCase()));
    }
  }, [dispatch, filter]);

  const setRefState = () => {
    const newRegion = selectRef.current.value;
    setFilter(newRegion);
  };

  return (
    <div>
      <select name="selected" ref={selectRef} onChange={setRefState}>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania </option>
        <option value="Europe"> Europe </option>
        <option value="Americas"> Americas</option>
        <option value="Africa"> Africa</option>
      </select>
    </div>
  );
};

export default Filter;
