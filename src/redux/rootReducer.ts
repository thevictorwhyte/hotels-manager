import { combineReducers } from 'redux';

import hotelsReducer from './hotels/reducer';
import categoriesReducer from './categories/reducer';

const rootReducer = combineReducers({
  hotels: hotelsReducer,
  categories: categoriesReducer,
});

export default rootReducer;
