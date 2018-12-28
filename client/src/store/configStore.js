import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const configStore = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk, logger)
);
export default configStore;