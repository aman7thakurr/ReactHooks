import { DragHandle } from '@material-ui/icons'
import React, { useState } from 'react'

const UseState = () => {
  const [name,setName] = useState({name:""})
  const [email,setEmail] = useState({email:""})
  const [data,setData] = useState([])
 const handleSubmit= (e)=>{
e.preventDefault()
console.log(name,email)
const inputs = {
  name: name.name,
  email: email.email
}
setData([...data,inputs])
console.log(data);
}
  return (
    <div>
<form action=""onSubmit={handleSubmit}>
<input name='name' value={name.name} onChange={(e)=>setName({...name,[e.target.name]:e.target.value})} type="text" />
<input name='email' value={email.email} onChange={(e)=>setEmail({...email,[e.target.name]:e.target.value})} type="email" />
<button>add</button> 
</form>   
{
  data.map((item)=>{
    return <div><span>{item.name}</span><span>{item.email}</span></div>
    })
}  
    </div>
  )
}

export default UseState
