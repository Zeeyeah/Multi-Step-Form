import { createSlice } from "@reduxjs/toolkit";


export const addOnsReducer = createSlice ({
  name: 'addons',
  initialState: {
    addonsObj: [
  {
    selected: false,
    title: 'Online services',
    info: 'Access to multiplayer games', 
    monthlyPrice: 1,
    yearlyPrice: 12,
  },
  {
    selected: false,
    title: 'Large storage',
    info: 'Extra 1TB of cloud save', 
    monthlyPrice: 2,
    yearlyPrice: 24
  },
  {
    selected: false,
    title: 'Customizeble profile',
    info: 'Custom theme om your profile', 
    monthlyPrice: 2,
    yearlyPrice: 24
  }
]},
  reducers: {
    selectAddOn: (state, actions) => {
        state.addonsObj.map(eachPlan => {
            if (actions.payload === eachPlan.title){
                return eachPlan.selected = !eachPlan.selected 
            } else  return eachPlan
        })
    }}
})

export const {selectAddOn} = addOnsReducer.actions
export default addOnsReducer.reducer