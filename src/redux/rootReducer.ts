import { combineReducers } from 'redux';

import hotelsReducer from './hotels/reducer';

const rootReducer = combineReducers({
  hotels: hotelsReducer,
});

export default rootReducer;
