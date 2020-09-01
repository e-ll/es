import React, { Component } from 'react';
import EventsItem from './EventsItem';
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Link } from "react-router-dom";
import { Tooltip, Button, IconButton, ButtonGroup } from "@material-ui/core";
import Lector from "../../canvas/Lector";

import Market from "../../canvas/market";
import Foodtrack from "../../canvas/foodtrack";

class EventsList extends Component{
    render(){
        const {events} = this.props;
        const trans = "translate(index*5, index*5)"
        return (
          <>
            <TransformWrapper
              wheel={{
                step: 480,
              }}
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
                    <div className="spacer" />
                    <ButtonGroup
                      orientation="vertical"
                      color="primary"
                      aria-label="vertical contained primary button group"
                      variant="text"
                    >
                      <Button onClick={zoomIn}>+</Button>
                      <Button onClick={zoomOut}>-</Button>
                      <Button onClick={resetTransform}>Reset</Button>
                    </ButtonGroup>
                  </div>
                  <div className="element">
                    <TransformComponent>
                      <div
                        style={{
                          width: "1000px",
                          height: "500px",
                          border: "1px solid",
                        }}
                      >
                        <h1>Выставка</h1>
                        <p>Экофест</p>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(6, 50px)",
                            gridGap: "2",
                          }}
                        >
                          {events.map((event, index) => (
                            <Tooltip title={`Стенд № ${index}`} interactive>
                              <Link to={`/event/${event._id}`}>
                                <IconButton
                                  style={{
                                    transform: { trans },
                                  }}
                                  aria-label="delete"
                                >
                                  <Market />
                                </IconButton>
                              </Link>
                            </Tooltip>
                          ))}
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, auto)",
                            gridGap: "2",
                          }}
                        >
                          {events.map((event, index) => (
                            <Tooltip title={`Стенд № ${event._id}`} interactive>
                              <Link to={`/event/${event._id}`}>
                                <IconButton aria-label="delete">
                                  <Foodtrack index={index} />
                                </IconButton>
                              </Link>
                            </Tooltip>
                          ))}
                        </div>

                        <Lector />
                      </div>
                    </TransformComponent>
                  </div>
                  <div className="info">
                    <h3>State</h3>
                    <h5>
                      <span className="badge badge-secondary">
                        Position x : {positionX}px
                      </span>
                      <span className="badge badge-secondary">
                        Position y : {positionY}px
                      </span>
                      <span className="badge badge-secondary">
                        Scale : {scale}
                      </span>
                      <span className="badge badge-secondary">
                        Previous scale : {previousScale}
                      </span>
                    </h5>
                  </div>
                </>
              )}
            </TransformWrapper>
          </>
        );
}
}
export default EventsList;