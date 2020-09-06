import React, { Component } from "react";
import EventsItem from "./EventsItem";
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

class EventsList extends Component {
  render() {
    const { events } = this.props;
    // const trans = "translate(index*5, index*5)"
    return (
      <CssBaseline>
        <div className="conteiner">
          <TransformWrapper
            wheel={{
              step: 10,
            }}
            defaultScale={2}
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
                <div
                className="tools"
              >
                <ButtonGroup
                  color="primary"
                  aria-label="vertical contained primary button group"
                  variant="text"
                >
                  <Button variant="outlined" onClick={zoomIn}>
                    +
                  </Button>
                  <Button variant="outlined" onClick={zoomOut}>
                    -
                  </Button>
                  <Button variant="outlined" onClick={resetTransform}>
                    Reset
                  </Button>
                </ButtonGroup>
              </div>
                <div
                  className="element"
                  style={{
                    width: "100%",
                    border: "1px solid red",
                    // maxWidth: "calc(100vw - 60px)",
                  }}
                >
                  <TransformComponent>
                    <div
                      className="coverf"
                      style={{
                        marginLeft: "10px",
                        width: "900px",
                        height: "400px",
                        border: "1px solid black",
                        position: "relative",

                        // objectFit: "cover",
                      }}
                    >
                      <div>
                        {events.map((event, index) => {
                          const intervalD = 30;
                          const angle = 45;
                          const radian = (Math.PI * angle) / 180;
                          const startX = 0;
                          const startY = 0;
                          const xCoordinate = intervalD * Math.cos(radian);
                          const yCoordinate = intervalD * Math.sin(radian);
                          const left = index * xCoordinate;
                          const top = index * yCoordinate;

                          return (
                            <Tooltip title={`Стенд № ${index}`} interactive>
                              <Link to={`/event/${event._id}`}>
                                <IconButton
                                  style={{
                                    position: "absolute",
                                    left: left,
                                    top: top,
                                  }}
                                  aria-label="delete"
                                >
                                  <Market />
                                </IconButton>
                              </Link>
                            </Tooltip>
                          );
                        })}
                      </div>
                      <div
                      // style={{
                      //   display: "grid",
                      //   gridTemplateColumns: "repeat(4, auto)",
                      //   gridGap: "2",
                      //   position: "relative",
                      // }}
                      >
                        {events.map((event, index) => {
                          const intervalD = 10;
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
                                <IconButton aria-label="delete">
                                  <Foodtrack
                                    index={index}
                                    style={{
                                      position: "absolute",
                                      left: left,
                                      top: top,
                                    }}
                                  />
                                </IconButton>
                              </Link>
                            </Tooltip>
                          );
                        })}
                      </div>

                      <Lector />
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
