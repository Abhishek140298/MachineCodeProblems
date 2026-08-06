import React, { useState } from 'react'

const FormComponent=({handleSubmit})=>{

 const [formData,setFormData]=useState()
 const [formError,setFormError]=useState()


const handleChange=(e)=>{

}

const onSubmit=(e)=>{
    e.preventDefault()
    if(validate()){
        console.log("ram")
    }
console.log("gsfs",e.target[0].value)

}
function validate(){
    if(!formData||!formData["user"]){
        setFormError({...formError,"user":`USer is required`})
        return false
    }
    return true
}

 function  renderField(name,type,required,handleChange){
      switch(type){
        case "text":
            return(<input type="text" name={name} onChange={handleChange}/>)
      }
 }


 return (<div>
    <form onSubmit={onSubmit}>
         { renderField("user","text",true,handleChange)}
         <div>{formError&&formError["user"]&&<>{formError["user"]}</>}</div>
         <button type="submit">Submit</button>
    </form>
 </div>)

}


export default FormComponent
//!continue it with the dynmic fields