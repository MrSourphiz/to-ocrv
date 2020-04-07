import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './posts';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});