import { createStore } from 'redux';
import reducer from './reducers/article';

const store = createStore(reducer);

export default store;