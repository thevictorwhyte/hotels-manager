import { combineReducers } from 'redux';

import hotelsReducer from './hotels/reducer';
import categoriesReducer from './categories/reducer';
import countryReducer from './country/reducer';

const rootReducer = combineReducers({
  hotels: hotelsReducer,
  categories: categoriesReducer,
  country: countryReducer,
});

export default rootReducer;
