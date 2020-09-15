import React, { Component } from "react";
import EventsItem from "./EventsItem";
import Rows from "./Rows"

import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Link } from "react-router-dom";
import {
  Tooltip,
  Button,
  IconButton,
  ButtonGroup,
  CssBaseline,
} from "@material-ui/core";
import Lector from "../../canvas/Lector";

import Market from "../../canvas/market";
import Foodtrack from "../../canvas/foodtrack";
import mapMain from "../../canvas/mainMap.jpg";
import Estand from "../../canvas/stands/Estand"
import Dstand from "../../canvas/stands/Dstand";

class EventsList extends Component {
  render() {
    const { events } = this.props;
    // const trans = "translate(index*5, index*5)"
    const arrS = [];
    //leftside
    const lStart = 55.0262;
    const tStart = 19.13;
    const lIndex = 1.965
    const tIndex = 1.551

    for (let i=0;i<1;i++) {
      let l = lStart + i*lIndex;
      let t = tStart + i*tIndex;
let newStand = {l:String(l)+"%", t:String(t)+"%"}
arrS.push(newStand)
    }
    const arrCoord = [
      { l: "55.0262%", t: "19.13%" },
      { l: "865.11px", t: "154px" },
      { l: "859.11px", t: "188px" },
      { l: "893.11px", t: "169px" },
      { l: "885.11px", t: "203px" },
      { l: "920.11px", t: "183px" },
    ];
    return (
      <CssBaseline>
        <div className="conteiner">
          <TransformWrapper
            wheel={{
              step: 10,
            }}
            defaultScale={1}
            defaultPositionX={0}
            defaultPositionY={0}
          >
            {({
              zoomIn,
              zoomOut,
              resetTransform,
              positionX,
              positionY,
              scale,
              previousScale,
            }) => (
              <>
                <div className="tools">
                  <ButtonGroup variant="text">
                    <Button variant="outlined" onClick={zoomIn}>
                      Увеличить +
                    </Button>
                    <Button variant="outlined" onClick={zoomOut}>
                      Уменьшить -
                    </Button>
                    <Button variant="outlined" onClick={resetTransform}>
                      Сбросить
                    </Button>
                  </ButtonGroup>
                </div>
                <div
                  className="element"
                  style={{
                    width: "100%",
                    border: "1px dashed #000000",
                  }}
                >
                  <TransformComponent>
                    <div
                      className="coverf"
                      style={{
                        height: "400px",
                      }}
                    >
                      <img
                        src={mapMain}
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          marginRight: "-50%",
                          transform: "translate(-50%, -50%)",
                          height: "200%",
                          width: "auto",
                          zIndex: "-10",
                        }}
                      />
                      <div>
                        
                        
                      </div>
                      <div

                      // style={{
                      //   display: "grid",
                      //   gridTemplateColumns: "repeat(4, auto)",
                      //   gridGap: "2",
                      //   position: "relative",
                      // }}
                      >
                        {events.slice(0,7).map((event, index) => {
                          const intervalD = 2;
                          const angle = 30;
                          const radian = (Math.PI * angle) / 180;
                          const startX = 0;
                          const startY = 0;
                          const xCoordinate = intervalD * Math.cos(radian);
                          const yCoordinate = intervalD * Math.sin(radian);
                          const left = index * xCoordinate;
                          const top = index * yCoordinate;
                         

                          return (
                            <Tooltip title={`Стенд № ${event._id}`} interactive>
                              <Link to={`/event/${event._id}`}>
                                <div>
                                  <Dstand
                                    index={index}
                                    name={event.partisipantName}
                                    logoUrl={event.imageURL}
                                    style={{
                                      position: "absolute",
                                      left: left,
                                      top: top,
                                    }}
                                  />
                                </div>
                              </Link>
                            </Tooltip>
                          );
                        })}
                      </div>
                    </div>
                  </TransformComponent>
                </div>
                {/* <div className="info">
                <h3>State</h3>
                <h5>
                  <span className="badge badge-secondary">
                    Position x : {positionX}px
                  </span>
                  <span className="badge badge-secondary">
                    Position y : {positionY}px
                  </span>
                  <span className="badge badge-secondary">Scale : {scale}</span>
                  <span className="badge badge-secondary">
                    Previous scale : {previousScale}
                  </span>
                </h5>
              </div> */}
              </>
            )}
          </TransformWrapper>
        </div>
      </CssBaseline>
    );
  }
}
export default EventsList;
