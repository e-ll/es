import React from 'react';
import {Dstand} from "../../canvas/stands/Dstand";
import {Cstand} from "../../canvas/stands/Cstand";
import {
  Tooltip,
  Button,
  IconButton,
  ButtonGroup,
  CssBaseline,
  Link
} from "@material-ui/core";

export default function Show (props) {
  const {events, type, left, top, name, logoUrl, height} = props
  const f = [
    Dstand({ name: events[0].partisipantName }),
    Cstand({ name: events[0].partisipantName }),
  ];
 return (
  <div>
    {events.slice(0, 15).map((event, index) => {
      
      const leftStep = 3.55*1.3;
      const topStep = 3.2*1.3;
      
      let leftStart = 66.72;
      let topStart = 25.52;
      let k=0; 
      if (index>7) {k=8
  leftStart = 60
  topStart = 35
}

      const left = String(leftStart + (index-k) * leftStep) + "%";
      const top = String(topStart + (index-k) * topStep) + "%";

      return (
        <Tooltip title={`Стенд № ${event._id}`} interactive>
          <Link to={`/event/${event._id}`}>
            <IconButton
              style={{
                position: "absolute",
                left: left,
                top: top,
                height: "3.95%",
                width: "auto",
              }}
            >
              {/* <Dstand
                index={index}
                name={event.partisipantName}
                logoUrl={event.imageURL}
              /> */}
              {f[type]}
              
            </IconButton>
          </Link>
        </Tooltip>
      );
    })}
  </div>
)
  }