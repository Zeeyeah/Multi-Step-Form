import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./components/SideBar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import { decrement, increment } from "./redux/steps";

function App() {

  const currentStep = useSelector((state)=> state.steps.step)
  const dispatch = useDispatch()
  function Steps() {
    switch (currentStep) {
      case 1:
        return <Step1 />
      case 2:
        return <Step2 />
      case 3:
        return <Step3 />
      case 4:
        return <Step4 /> 
      default:
        <Step1 />
        break;
    }
  }
 function Buttons(){
  return(
    <div className="btn-wrapper">
      {
        currentStep === 4 && <button 
         className="next-btn"
         >Confirm</button>
      }
      { currentStep < 4 && <button 
         className="next-btn"
         onClick={()=> dispatch(increment())}
         >Next Step</button>}
         {currentStep >= 2 &&  <button
         className="prev-btn"
         onClick={()=> dispatch(decrement())}
          >Go Back
         </button> }
    </div>
  )
 }

  return (
    <div className="App">
      <div className="card">
         <SideBar currentStep={currentStep} />
         <Steps />         
         <Buttons />
      </div>
    </div>
  );
}

export default App;
