import { configureStore } from '@reduxjs/toolkit'
import addOns from './addOns';
import planReducer  from './plan';
import steps from './steps';

export default configureStore({
    reducer:{
        plans: planReducer,
        addons: addOns,
        steps: steps
    }
});