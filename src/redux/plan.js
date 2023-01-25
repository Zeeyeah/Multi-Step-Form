import { createSlice } from "@reduxjs/toolkit";
import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'

export const planReducer = createSlice ({
  name: 'plans',
  initialState: {
    planObj: [
         {
        icon: arcadeIcon,
        title: "Arcade",
        yearly: false,
        monthlyPlan: 9,
        yearlyPlan: 108,
        selected: false
      },
      {
        icon: advancedIcon,
        title: "Advanced",
        yearly: false,
        monthlyPlan: 12,
        yearlyPlan: 144,
        selected: true
      },
      {
        icon: proIcon,
        title: "Pro",
        yearly: false,
        monthlyPlan: 15,
        yearlyPlan: 180,
        selected: false
    }
    ],
    planDuration: true
  },
  reducers: {
    changePlan: (state, actions) =>{
        state.planObj.map(eachPlan => {
            if (actions.payload === eachPlan.title){
               return eachPlan.selected= true
            } else return eachPlan.selected = false
        })
    },
    changePlanDuration: (state) =>{
        state.planDuration = !state.planDuration
    }
  }

})

export const {changePlan, changePlanDuration} = planReducer.actions
export default planReducer.reducer