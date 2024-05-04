import React, { useState } from 'react'

const UseState = () => {
    const[count,setCount]=useState(0);
    const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
 function handleClick(){
        setCount(count+1)
    }
   
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user, email)

  }
   return(
    <>
    <div className="wrapper" style={{display:'flex',gap:'30px'}}>
        <div className="-"  onClick={count===0?()=>setCount(0):()=>setCount((count)=>count-1)}><button>-</button></div>
        <div className="val">{count}</div>
        <div className="+" onClick={handleClick}><button>+</button></div><br/><br/>
<p>clicked {count} times</p>
    </div>
    <br/><br/><br/>
    <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter your name"  onChange={(e) => {setUser(e.target.value)}} value ={user} required />
                <br/>
            <input type="email" placeholder="enter your email"  onChange={(e)  => {setEmail(e.target.value)}} value={email} required />
            <br/><button type="submit">Submit</button>
            <p>your name is {user} and your email is {email}</p>
        </form>
    </>
   )
}

export default UseState
