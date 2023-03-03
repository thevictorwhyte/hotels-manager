import { useEffect } from 'react';
import { AppDispatch } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCountries } from '../../redux/country/reducer';

import { selectCountries, selectStatus } from '../../redux/country/selector';

const useCountriesGet = () => {
  const dispatch = useDispatch<AppDispatch>();
  const countries = useSelector(selectCountries);
  const status = useSelector(selectStatus);

  useEffect(() => {
    if (countries.length === 0 && status === 'idle') {
      dispatch(fetchCountries());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);

  return { countries, status };
};

export default useCountriesGet;
