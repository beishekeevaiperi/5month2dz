import { createStore } from 'redux';
import {calculatorReducer} from "../reducer/reducer.js";



const store = createStore(calculatorReducer);

export default store;
