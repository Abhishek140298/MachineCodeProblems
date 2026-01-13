import React,{useState} from 'react'
const formFields=["name","firstName","lastName","Age","Tech"]

function JSONCreater(){

const [formData,setForm]=useState(null)

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("gvjhjnm",e.target.elements)
    let fields=Array.from(e.target.elements)
    const newForm = {};
    fields.forEach((field,index)=>{
        if (field.name) {           // skip elements without name
            newForm[field.name] = field.value;
          }
})
setForm(JSON.stringify(newForm))

}
console.log("Form data",formData)


return (<div>

    <form
    onSubmit={handleSubmit}
    >

{formFields.map((field,index)=><>
<label >{field.toUpperCase()}
</label>
<input name={field} placeholder={field.toUpperCase()}/>
</>)}

<button type='submit'>Convert TO JSON</button>

    </form>
    {formData && (
      
        //   <pre>{JSON.stringify(formData, null, 2)}</pre>
        <div>
            {formData}
            </div>
    
      )}
</div>)

}

export default JSONCreater