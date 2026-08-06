import React, { useRef, useState } from "react";
//!Requirements
//1)input boxex with border or underline
//2)subit on submit button or max limit of otp words
//3)heading
//40timer ,duration

function OTPComponent({
  number = 4,
  heading = "Enter the OTP",
  isSubmitButton = true,
  timer = true,
  duration = 5000,
  onComplete,
}) {
  const [otp, setOtp] = useState(new Array(number).fill(""));
  const inputRef = useRef([]);

  const handleChange = (e, index) => {
    console.log("index", otp);
    const value = e.target.value;
    let newOtp = [...otp];
    newOtp[index] = value;
    console.log("New otpm", newOtp);
    setOtp(newOtp);

    if (value && index < number - 1) inputRef.current[index + 1].focus();
    if(newOtp.every(digit=>digit!=""))console.log("Opt",newOtp.join(""))
        //Call the function onComplete here if no submitbutton
  };

  const handleKeyDown=(e,index)=>{
    console.log("vjbjm",e.key)
    switch(e.key){
        case "Backspace":
            if(otp[index]==""&&index>0){
                inputRef.current[index-1].focus()
            }
            const newOptp=[...otp]
            newOptp[index]=""
            setOtp(newOptp)
            break
        case "ArrowLeft":
            if(index>0){
                inputRef.current[index-1].focus()
            }    
            break
         case "ArrowRight":
               if(index<otp.length){
                inputRef.current[index+1].focus()
            }    
            break
    }
  }
  

  const handlePaste=(e)=>{
    e.preventDefault()
const pasted=e.clipboardData.getData("text").replace(/\D/g,"").slice(0,number).split("")
console.log(
    "Pasted",pasted
)
const newotp=[...otp]
pasted.forEach((element,index) => {
    console.log("skj",element,index)
    newotp[index]=element

});

setOtp(newotp)
const focusedIndex=Math.min(pasted.length,number-1)
console.log("Newoptp",focusedIndex)

inputRef.current[focusedIndex]?.focus()
  }

  return (
    <div>
      {  console.log("fchgvhjbjknlk",otp)}
      {otp.map((digit, index) => (
        <input
          key={index}
          value={digit}
          maxLength={1}
          onChange={(e) => handleChange(e, index)}
          ref={(el) => (inputRef.current[index] = el)}
          onKeyDown={(e)=>handleKeyDown(e,index)}
          onPaste={handlePaste}
        />
      ))}

      <button>Submit</button>
    </div>
  );
}

export default OTPComponent;
