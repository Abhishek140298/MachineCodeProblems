import React from 'react'
import "../App.css";
export default function LightAndDark(){
const [darkMode,setDarkMode]=React.useState(false)
const handleChangeInMode=()=>{
setDarkMode(prev=>!prev)
const current = document.documentElement.getAttribute("data-theme");
document.documentElement.setAttribute(
  "data-theme",
  current === "light" ? "dark" : "light"
);
}
    return (
        <div className='myBox'>
         <h1>About Me</h1>
         <p>Abhishek Yadav gsdjfkshfklsjbklshblksjbklsjfblsjblksfblksjf<br/>sfhskhfgkfhalhfgyf<br/>
         szfjhsfbslhf<br/>
         </p>
         <button onClick={handleChangeInMode}>{darkMode?"Light":"Dark"}</button>
        </div>
    )
}