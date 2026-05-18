

 
import React ,{useContext} from 'react'
import { ThemeContext } from '../App'

const ThemeComponent=()=>{
    const {theme,toggle}=useContext(ThemeContext)
    return (<div> Hello {theme}
    <button onClick={toggle}>Change Theme</button>
    </div>)
}

export default ThemeComponent