import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePlan, changePlanDuration } from '../redux/plan'




function Step2() {
  
  const dispatch = useDispatch()
  const planCards = useSelector((state)=> state.plans.planObj)
  const {planDuration} = useSelector((state)=> state.plans)
  
 

  function PlanCards(){
   const displayPlanCards = planCards.map(card => {
        return(
          <div
          onClick={()=> dispatch(changePlan(card.title))}
           key={card.monthlyPlan}
           className={`plan-card ${card.selected && 'selected'}`
          }>
            <img src={card.icon} alt="" />
            <h2>{card.title}</h2>
            <p>${planDuration ? card.yearlyPlan + '/yr' : card.monthlyPlan + '/mo'}</p>
          </div>
        )
    })

    return (
      <div className="plan-cards-wrapper">
        {displayPlanCards}
      </div>
    )
  }
  return (
    <div className='step2'>
      <h1>Select Your plan</h1>
      <p>You have the option of monthy or yearly billing</p>
      <PlanCards />
      <div className="toggle">
        <h5 className='monthly'
        style ={planDuration ? {color: '#c2c2c2'}  :{color: 'hsl(213, 96%, 18%)'}}
        >Monthy</h5>
      <label className="switch">
      <input type="checkbox" defaultChecked={planDuration} onClick={()=> dispatch(changePlanDuration())}/>
      <span className="slider round"></span>
      </label>
      <h5 
      className='yearly'
      style ={planDuration ? {color: 'hsl(213, 96%, 18%)'} : {color: '#c2c2c2'}}
      >Yearly</h5>
      </div>
    </div>
  )
}

export default Step2