import { createStore } from 'redux';

const initialState = { tasks: [] };
const reducer = (state = initialState, action: any) => state;

const store = createStore(reducer);
export default store;
