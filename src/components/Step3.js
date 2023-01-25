import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAddOn } from '../redux/addOns'



function Step3() {

  const addOns = useSelector((state)=> state.addons.addonsObj)
  const {planDuration} = useSelector((state)=> state.plans)
  const dispatch = useDispatch()

  const dispayAddOns = addOns.map(addOn => {
    return (
      <div 
      key={addOn.title}
      className= {`add-ons ${addOn.selected && 'selected'}`}
      onClick = {()=> dispatch(selectAddOn(addOn.title)) }
      >
        <input type= "checkbox" onChange={()=> dispatch(selectAddOn(addOn.title))} checked={addOn.selected} />
        <div className="add-on-detail">
          <h4>{addOn.title}
          <p>{addOn.info}</p>
          </h4>
        </div>
        <p>+${planDuration ? addOn.yearlyPrice : addOn.monthlyPrice}/{planDuration ? 'yr' : 'mo'}</p>
      </div>
    )
  })

  return (
    <div className='step3'>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience</p>
      {dispayAddOns}
    </div>
  )
}

export default Step3