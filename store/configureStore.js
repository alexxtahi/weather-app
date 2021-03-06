import { createStore, combineReducers } from 'redux';
import favReducer from '../reducers/favReducer';

const rootReducer = combineReducers(
    { fav: favReducer }
);

export default configureStore = () => {
    return createStore(rootReducer);
}