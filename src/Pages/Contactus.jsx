import React, { useState } from 'react'
import Header from '../Layout/Header'
import '../Styles/Contactus.css';
import Button from '../components/Button';

function Contactus() {
  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [message,setMessage] = useState('');
  const [error,setError] = useState('');
  const [errortrue,setErrortrue] = useState(false);
  const userMessage = {fname,lname,email,phoneNumber,message};

  const handleSedn = ()=>{
    if(fname !== '' && lname !== '' && email !== '' && phoneNumber !== '' && message !== ''){
      localStorage.setItem('Message',JSON.stringify(userMessage))
      setErrortrue(true)
      setError('sent successfully');
    }else{
      setError('field is empty');
      setErrortrue(false)
    }
  }
console.log(fname);
   return (
    <>
    <Header />
   <div className="col-12">
   <div className="contactUstext">
            <h2>===</h2>
            <h1>Contact us</h1>
            <h2>===</h2>
          </div>
   </div>
<div className="container-fluid">
<div class="row g-3" style={{justifyContent:'center'}}>
  <div className="col-4">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name" onChange={(e)=>{setFname(e.target.value)}}/>
  </div>
  <div className="col-4">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" onChange={(e)=>{setLname(e.target.value)}}/>
  </div>


<div class="row g-3" style={{justifyContent:'center',marginTop:'5px'}}>
  <div className="col-4">
    <input type="text" class="form-control" placeholder="Email" aria-label="Email" onChange={(e)=>{setEmail(e.target.value)}} />
  </div>
  <div className="col-4">
    <input type="text" class="form-control" placeholder="Phone Number" aria-label="Phone Number" onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
  </div>

  <div class="mb-3 col-8">
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Your Message' onChange={(e)=>{setMessage(e.target.value)}}></textarea>
</div>
  {errortrue ? <p style={{color:'green'}}>{error}</p> : <p style={{color:'red'}}>{error}</p>}
</div>
<div className="col-11" >
    <div className="container"  style={{justifyContent:'start',display:'flex',width:'70%'}}>
    <Button text='Send' onClick={()=>{handleSedn()}} />
    </div>
</div>
</div>

</div>

       
    </>
  )
}

export default Contactus
