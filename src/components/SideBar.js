import React, { useState } from 'react'
import sideBarBg from '../assets/images/bg-sidebar-desktop.svg'
import sideBarMobileBg from '../assets/images/bg-sidebar-mobile.svg'
const sideObj = [
    {
        step: 1,
        title: "YOUR NAME",
        active: false
    },
    {
        step: 2,
        title: "SELECT PLAN",
        active: false
    },
    {
        step: 3,
        title: "ADD-ONS",
        active: false
    },
    {
        step: 4,
        title: "SUMMARY",
        active: false
    },
]

function SideBar({currentStep}) {

        const [sidebarNum] = useState(sideObj)

  return (
    <>
    <img  src={sideBarMobileBg} alt="" className="sidebar-bg-mobile" />
    <img  src={sideBarBg} alt="" className="sidebar-bg" />
    <section className="side-bar">
            {sidebarNum.map(obj=>{
                return(
                    <div key={obj.step} className="side-steps">
                        <h1 
                        className={currentStep === obj.step ? "sidebar-num-active" : "sidebar-num"}
                        >{obj.step}</h1>
                            <div>
                            <h6>STEP {obj.step}</h6>
                            <b>{obj.title}</b>
                            </div>
                    </div>
                )
            })}
    </section>
            </>
  )
}

export default SideBar