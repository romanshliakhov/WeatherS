import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { accountReducer } from './account/reducer';
import { sportReducer } from './sport/reducer';

const rootReducer = combineReducers({
  account: accountReducer,
  sport: sportReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
