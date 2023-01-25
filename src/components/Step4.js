import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStep } from '../redux/steps'

function Step4() {

    const planCards = useSelector((state)=> state.plans.planObj)
    const {planDuration} = useSelector((state)=> state.plans)
    const addOns = useSelector((state)=> state.addons.addonsObj)
    const dispatch = useDispatch()
    function calculateTotal(){
      let planPrice = 0;
      let addOnPrice = 0;
      planCards.map(eachPlan=> {
          if(eachPlan.selected === true){
            return planDuration ? planPrice = eachPlan.yearlyPlan : planPrice = eachPlan.monthlyPlan
          } else return null
        })
      addOns.map(addon=> {
          if(addon.selected === true){
            return addOnPrice =  planDuration ? addOnPrice + addon.yearlyPrice : addOnPrice + addon.monthlyPrice
          } else return null
        })

        return planPrice + addOnPrice

    }

  return (
    <div className='step4'>
      <h1>Finishing up</h1>
      <p>Double check everything looks OK before confirming</p>
      <div className="summary-card">
        <div className="plan-name">
        <h4> {planCards.map(eachPlan=> {
          if(eachPlan.selected === true){
            return eachPlan.title 
          } else return null
        })
        }
        {planDuration ? '(yearly)' : '(monthly)'}
          <br />
          <p style={{fontSize: 12, color: '#473dff', textDecoration: 'underline', cursor: 'pointer'}} onClick={()=> dispatch(setStep(2)) }>Change</p>
        </h4>
        <h3>${planCards.map(eachPlan=> {
          if(eachPlan.selected === true){
             return planDuration ? eachPlan.yearlyPlan : eachPlan.monthlyPlan
          } else return null
        })
        }/{planDuration ? 'yr' : 'mo'}</h3>
        </div>
        <hr style={{opacity: '30%'}} />
       
        {addOns.map(eachAddOn => {
          if (eachAddOn.selected === true){
            return (
               <div className="addons-summary">
              <p>{eachAddOn.title}</p>
              <h4>+${planDuration ? eachAddOn.yearlyPrice + '/yr' : eachAddOn.monthlyPrice + '/mo'}</h4>
               </div>
            )
          } else return null
        })}
      </div>
      <div className="total">
        <p>total ({planDuration ? 'yearly' : 'monthly'})</p>
        <h3>+${
                  calculateTotal()
          }/{planDuration ? 'yr' : 'mo'}</h3>
      </div>
    </div>
  )
}

export default Step4