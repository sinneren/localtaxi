import { combineReducers } from 'redux';
import signup from './reducers/signup/';
import signin from './reducers/signin/';
import user from './reducers/user/';

export default combineReducers({
    signup,
    signin,
    user,
})