import { combineReducers } from 'redux';
import signup from './reducers/signup/';
import signin from './reducers/signin/';

export default combineReducers({
    signup,
    signin,
})