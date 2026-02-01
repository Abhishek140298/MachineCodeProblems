import React, { useState, useEffect } from "react";

const CountDownWidget = () => {
  const [datetime, setDateTime] = useState(null);
  const [timerValue, setTimerValue] = useState();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [days, setDays] = useState(0);

  const handleInputChange = (event) => {
    setDateTime((prev) => event.target.value);
  };

  const startTimer = () => {
    if (Date.parse(datetime)) {
    } else {
      let [full, value, timeType] = datetime.match(
        /^(\d+)\s*(mins?|minutes?|days?|hours?|years?)$/i
      );

      console.log("timer", value,timeType);
      if (timeType == "day" || timeType === "days") {
        const durationMs = value * 24 * 60 * 60 * 1000;

        let endDate = Date.now() + durationMs;
        let dif = endDate - Date.now();
        console.log("Dif ", dif);
        const interval = setInterval(() => {
          const diff = endDate - Date.now();

          if (diff <= 0) {
            console.log("⏰ Time's up!");
            clearInterval(interval);
            return;
          }

          const totalSeconds = Math.floor(diff / 1000);

          const days = Math.floor(totalSeconds / 86400);
          const hours = Math.floor((totalSeconds % 86400) / 3600);
          const minutes = Math.floor((totalSeconds % 3600) / 60);
          const seconds = totalSeconds % 60;
          setDays((prev) => days);
          setHours((prev) => hours);
          setMinutes((prev) => minutes);
          setSeconds((prev) => seconds);
          console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, 1000);
      }
      else if(timeType=='min'||timeType=='minutes'||timeType=='mins'||timeType==='minute') {
          const durationMS=value*60*1000
          let endDate=Date.now()+durationMS
          const interval=setInterval(()=>{
            let dif=endDate-Date.now()
            if(dif<=0){clearInterval(interval)
                return
            }
            const totalSeconds=Math.floor(dif/1000)
            
          },1000)
      }
    }
  };

  return (
    <>
      <div style={{width:'100vw',background:'aqua',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
  

        <div style={{}}>
        I am countdown
         <div style={{height:'40px'}}> <input id="timeOrDate" onChange={handleInputChange} />
          <button style={{height:'30px',background:'black',color:'white'}} onClick={startTimer}>Start </button></div>
          <div style={{ display: "flex" }}>
            {[days, hours, minutes, seconds].map((value, index) => (
              <div
                style={{
                  display: "flex",
                  border: "1px green solid ",
                  margin: "10px",
                  width: "30px",
                  height: "30px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius:'10px'
                }}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountDownWidget;
