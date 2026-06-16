import React ,{useState} from 'react'


const FormHandling=({fields})=>{
const [error,setErrors]=useState({})

    const handleSubmit=(e)=>{
        e.preventDefault()
       validation(e.target.Email)
    }

    const validation=(email,password)=>{
        console.log("Email,",email)
          if(!email.value){
              setErrors({...error,email:"Email required"})
          }
    }

    return(<>
   <form onSubmit={handleSubmit}>
   <input name="Email" placeholder='Enter email' type='email'/>
   {error&&error.email&&<p>{error.email}</p>}
    <input name="Passwor" placehoder ="Enter password" type="password"/>
    <button type="submit" >Submit</button>
   </form>
    </>)
}

export default FormHandling