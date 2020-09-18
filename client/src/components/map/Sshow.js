import React from "react";
import A1stand  from "../../canvas/stands/A1stand";
import  A2stand from "../../canvas/stands/A2stand";
import  B3stand from "../../canvas/stands/B3stand";
import  B4stand from "../../canvas/stands/B4stand";
import  C5stand from "../../canvas/stands/C5stand";
import  C6stand from "../../canvas/stands/C6stand";
import  D7stand from "../../canvas/stands/D7stand";
import  E8stand from "../../canvas/stands/E8stand";
import  F9stand from "../../canvas/stands/F9stand";
import  F10stand  from "../../canvas/stands/F10stand";
import  G11stand  from "../../canvas/stands/G11stand";
import  G12stand  from "../../canvas/stands/G12stand";
import  H13stand  from "../../canvas/stands/H13stand";
import  I14stand  from "../../canvas/stands/I14stand";
import  I15stand  from "../../canvas/stands/I15stand";
import  K16stand  from "../../canvas/stands/K16stand";





import {
  Tooltip,
  Button,
  IconButton,
  ButtonGroup,
  CssBaseline,
  Link,
} from "@material-ui/core";

export default function Sshow(props) {
  const { event, stand } = props;
   
  let ast = null
switch(stand.type) {
    case 0 : ast = <A1stand name={event.partisipantName} logoUrl={event.logoUrl}/>
    break
    case 1 : ast = <A2stand name={event.partisipantName} logoUrl={event.logoUrl}/>
    break
    case 2 : ast = <B3stand name={event.partisipantName} logoUrl={event.logoUrl}/>
    break
    case 3 : ast = <B4stand name={event.partisipantName} logoUrl={event.logoUrl}/>
    break
    case 4 : ast = <C5stand name={event.partisipantName} logoUrl={event.logoUrl}/>
    break
    case 5 : ast = <C6stand name={event.partisipantName} logoUrl={event.logoUrl}/>
    break
    case 6 : ast = <D7stand name={event.partisipantName} logoUrl={event.logoUrl}/>
    break
    case 7 : ast = <A1stand name={event.partisipantName} logoUrl={event.logoUrl}/>
    break
    case 8 : ast = <E8stand name={event.partisipantName} logoUrl={event.logoUrl}/>
    break
    case 9 : ast = <F9stand name={event.partisipantName} logoUrl={event.logoUrl}/>
    break
    case 10 : ast = <F10stand name={event.partisipantName} logoUrl={event.logoUrl}/>
    break
    case 11 : ast = <G11stand name={event.partisipantName} logoUrl={event.logoUrl}/>
    break
    case 12 : ast = <G12stand name={event.partisipantName} logoUrl={event.logoUrl}/>
    break
    case 13 : ast = <H13stand name={event.partisipantName} logoUrl={event.logoUrl}/>
    break
    case 14 : ast = <I15stand name={event.partisipantName} logoUrl={event.logoUrl}/>
    break
    case 15 : ast = <I14stand name={event.partisipantName} logoUrl={event.logoUrl}/>
    break
    case 16 : ast = <K16stand name={event.partisipantName} logoUrl={event.logoUrl}/>
    break

}
 



  //  return (
  //   <div>
  
    /* {events.slice(0, 15).map((event, index) => {
      
      const leftStep = 3.55*1.3;
      const topStep = 3.2*1.3;
      
      let leftStart = 66.72;
      let topStart = 25.52;
      let k=0; 
      if (index>7) {k=8
  leftStart = 60
  topStart = 35


      const left = String(leftStart + (index-k) * leftStep) + "%";
      const top = String(topStart + (index-k) * topStep) + "%"; */
  

  return (
    <div
      style={{
        position: "absolute",
        left: stand.left,
        top: stand.top,
        height: "3.95%",
        width: "auto",
      }}
    >
      <Tooltip title={`Стенд № ${event._id}`} interactive>
        <Link to={`/event/${event._id}`}>
          <IconButton >
            {/* <Dstand
              name={event.partisipantName}
              logoUrl="https://sun9-8.userapi.com/c853620/v853620963/13b4d5/aFszB8VaQCY.jpg"
            /> */}
            {ast}
          </IconButton>
        </Link>
      </Tooltip>
    </div>
  );
  // })}
  // </div>
  // )
}
