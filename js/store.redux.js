import {createStore, combineReducers} from 'redux';
import comments from './reducers/comments.redux';

const reducer = combineReducers({
	comments
});

const store = createStore(reducer);

export default store;