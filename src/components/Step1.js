import React, {useState} from 'react'

function Step1() {

    const [name, setName] = useState('') 
    const [email, setEmail] = useState('') 
    const [phoneNumber, setPhoneNumber] = useState() 
    const [nameError, setNameError] = useState() 
    const [emailError, setEmailError] = useState() 
    const [phoneNumberError, setPhoneNumberError] = useState() 

  return (
    <section className='step1'>
        <h1>Personal info</h1>
        <p>Please provode yourname, emaail address, and phone number.</p>
        <div className="input-name">
            <p>Name</p>
            <input
             type="username" 
             placeholder='eg: Erwin Smith'
             value={name}
             onChange={(e)=> setName(e.target.value)}
             />
            {nameError && <p style={{color: 'red', 
            fontSize: 13, margin: 0, marginTop: 2}} >This feild is requried</p>}
        </div>
        <div className="input-name" >
            <p>Email</p>
            <input 
            type="email" 
            placeholder='eg: erwinsmith@gmail.com'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
            {emailError && <p style={{color: 'red', 
            fontSize: 13, margin: 0, marginTop: 2}} >Invalid email</p>}
        </div>
        <div className="input-name" >
            <p>Phone Number</p>
            <input 
            type="tel" 
            placeholder='eg: 9999 999 999'
            value={phoneNumber}
            onChange={(e)=> setPhoneNumber(e.target.value)}
            />
            {phoneNumberError && <p style={{color: 'red', 
            fontSize: 13, margin: 0, marginTop: 2}} >Invalid Phone Number</p>}
        </div>
    </section>
  )
}

export default Step1