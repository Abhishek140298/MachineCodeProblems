import React, { useEffect, useReducer, useState } from "react";

const parkingBluePrint = [
  { floorNumber: 0, totalSpots: 10, allowedTypes: ["Handicapeed", "EV"] },
  { floorNumber: 1, totalSpots: 12, allowedTypes: ["Compact", "Large"] },
  { floorNumber: 2, totalSpots: 8, allowedTypes: ["Compact"] },
];

const createParkingLot = (blueprint) => {
  return blueprint.map((floor, index) =>
    Array.from({ length: floor.totalSpots }, (spot, spotIndex) => {
      const typeIndex = spotIndex % floor.allowedTypes.length;
      return{
         slotId: `F${floor.floorNumber}-S${spotIndex}`,
         type: floor.allowedTypes[typeIndex],
         isEmpty: true,
         timeOfParked: null,
         liscencePlate: null,
        
    //slots: [`F${floor.floorNumber}-S${spotIndex}`]:{
    //     type: floor.allowedTypes[typeIndex],
    //      isEmpty: true,
    //      timeOfParked: null,
    //      liscencePlate: null,
    // }
      };
    })
  );
};

// !For better optimization make state =>floors:{0:{"s1":{},"s2":{}}}

const parkingReducer = (state, action) => {
    console.log("Action",action,state)
  switch (action.type) {
    case "VEHICLE_PARKED":
        let newState=[...state]
          newState[action.payload.indexF]=[...newState[action.payload.indexF]]
          newState[action.payload.indexF][action.payload.indexS]={
            ...newState[action.payload.indexF][action.payload.indexS],
            isEmpty:false,
            liscencePlate:"sjhfvjhsdvjhf"
          }
          return newState

    case "VEHICLE_EXIT":
        let newStateE=[...state]
        newStateE[action.payload.indexF]=[...newStateE[action.payload.indexF]]
        newStateE[action.payload.indexF][action.payload.indexS]={
          ...newStateE[action.payload.indexF][action.payload.indexS],
          isEmpty:true,
          liscencePlate:null
        }
        return newStateE
       
};}

const ParkingLot = () => {
  // const [parkingSlots,setParkingSlots]=useState(()=>{})
  const [parkingLots, dispatch] = useReducer(
    parkingReducer,
    parkingBluePrint,
    createParkingLot
  );

  const handleVehicleParking=(slotDetails,indexF,indexS)=>{
    
   if(slotDetails.isEmpty){
    dispatch({
        type:"VEHICLE_PARKED",
        payload:{
            slotDetails,
            indexF,
            indexS
            

        }
    })
   }
   else{
    dispatch({
        type:"VEHICLE_EXIT",
        payload:{
            slotDetails,
            indexF,
            indexS
            

        }
    })
   }
       
  }

  useEffect(() => {
    console.log("Par", parkingLots);
  }, [parkingLots]);

  return (
    <>
      <header>This is my Parking Lot .Park Here</header>
      <main style={{display:'flex'}}>
        {parkingLots?.map((floorSlots, indexF) => (
          <section>
        <>Floor-{indexF}</>
        {console.log("floo",floorSlots)}
            <li>
            {floorSlots?.map((slot,indexS)=><ul  onClick={()=>handleVehicleParking(slot,indexF,indexS)} style={{border:'1px,solid,black' ,margin:'1px',background:slot.isEmpty?"Green":"Red"}}><span >{slot.slotId}
                <h6>{slot.type}</h6>
                </span></ul>)}
                

            
                 
                 
               
            </li>
          </section>
        ))}
      </main>
    </>
  );
};

export default ParkingLot
