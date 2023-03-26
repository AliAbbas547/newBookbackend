import React, { useState } from 'react'
import axios from "axios";

const Form = () => {
    const [userR, userU] = useState({
        username : "",
        email : "",
        phone : "",
        password : ""
       })
       const [records , setRecords] = useState([]);
    const handleInput = (e)=>{
       const name = e.target.name
       const value = e.target.value
       userU({...userR , [name] : value})
    }
    const handlesubmit = (e)=>{
        e.preventDefault()
       const newRecodrd = { ...userR , id:new Date().getTime().toString()}
       setRecords([...records,newRecodrd])
       console.log(...records)
    }
    const Postdata = async (e)=>
    { e.preventDefault()
       const { username , email , phone , password  } = userR
      const res =  await fetch('functionup/interns',{
        method : "POST",
        headers: {
          'Content-Type': 'application/json'
          },
          body : JSON.stringify({  username , email , phone , password})
       })
       const data = await res.json();
       if(data.status === false || !data)
       {
        window.alert("invalid registration")
        console.log(data)
       }else{
        window.alert("successfully registration")
        console.log(res.body)
       }
    } 
    const postapi =  async (e)=>{
      try {
        e.preventDefault()
        const { username , email , phone , password  } = userR
       let x = await axios.post('/functionup/interns',{ 
        "name": username, 
        "email": email, 
        "mobile": phone, 
        "collegeName": password
      })
      window.alert("successfully registration")
      userU({      username : "",
      email : "",
      phone : "",
      password : ""})
      } catch(e) {
        console.log(e)
      }
    }
  return (
    <div>
      <form action='' onSubmit={handlesubmit}>
        <div>
            <label htmlFor='username' >FullName</label>
            <input type="text" value={userR.username} onChange={handleInput} name='username' id='username/>'/>
        </div>
        <div>
            <label htmlFor='email'>E-mail</label>
            <input type="text" value={userR.email} onChange={handleInput} name='email' id='email/>'/>
        </div>
        <div>
            <label htmlFor='phone'>phone</label>
            <input type="text"  value={userR.phone} onChange={handleInput} name='phone' id='phone/>'/>
        </div>
        <div>
            <label htmlFor='password'>password</label>
            <input type="text" value={userR.password} onChange={handleInput} name='password' id='password/>'/>
        </div>
      <button type='Submit' onClick={postapi} >Registration</button>
</form>
<div>

</div>
{
    records.map((e)=> {
        return <div>
          <p>{ e.username}</p> 
          <p>{ e.email}</p> 
          <p> {e.phone}</p> 
        </div>
        
    })
}
    </div>
    
  )
}

export default Form

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2I5NDc4ZjVhYThhN2YzNjk1MmJiNmMiLCJiYXRjaCI6ImxpdGhpdW0iLCJwcm9qZWN0IjoiQm9va3MtTWFuYWdlbWVudCIsImlhdCI6MTY3MzA5MTA1MywiZXhwIjoxNjczMTM0MjUzfQ.N_58Kdf0iBwj07q-eWGF0pKAZyv9OwZSQ2uGB9GKy0E