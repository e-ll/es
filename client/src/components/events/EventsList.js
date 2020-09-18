import React, { Component } from "react";
import EventsItem from "./EventsItem";
import Sshow from "../../components/map/Sshow";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Link } from "react-router-dom";
import {
  Tooltip,
  Button,
  IconButton,
  ButtonGroup,
  CssBaseline,
} from "@material-ui/core";
import data from "./data";
import ReactCursorPosition from "react-cursor-position";
import Lector from "../../canvas/Lector";
import PositionLabel from "../cursor/PositionLabel";
import mapMain from "../../canvas/mainMap.jpg";
import Estand from "../../canvas/stands/E8stand";
import Dstand from "../../canvas/stands/D7stand";
import Basic from "../cursor/Basic";

class EventsList extends Component {
  toggleSetting = (type) => {
    this.setState((p) => ({ [type]: !p[type] }));
  };
  render() {
    const { events } = this.props;

    // const trans = "translate(index*5, index*5)"
    const arrS = [];
    //leftside
    const lStart = 55.0262;
    const tStart = 19.13;
    const lIndex = 1.965;
    const tIndex = 1.551;

    for (let i = 0; i < 1; i++) {
      let l = lStart + i * lIndex;
      let t = tStart + i * tIndex;
      let newStand = { l: String(l) + "%", t: String(t) + "%" };
      arrS.push(newStand);
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
            options: { limitToBounds, transformEnabled, disabled },
            ...rest
          }) => (
            <>
              <div className="tools">
                {/* <span className="badge badge-secondary">
                    Position x : {positionX}px
                  </span>
                  <span className="badge badge-secondary">
                    Position y : {positionY}px
                  </span>
                  <span className="badge badge-secondary">Scale : {scale}</span>
                  <span className="badge badge-secondary">
                    Previous scale : {previousScale}
                  </span> */}
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
                  // width: "100%",
                  border: "1px dashed #000000",
                }}
              >
                <ReactCursorPosition>
                  <TransformComponent>
                    <div
                      className="coverf"
                      style={{
                        height: "418px",
                        width: "1342px",
                        
                      }}
                    >
                      <img
                        className="mapa"
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

                      {data.map((stand, index) => (
                        <Sshow event={events[5]} stand={stand} key={index} />
                      ))}
                    </div>
                  </TransformComponent>
                  <PositionLabel />
                </ReactCursorPosition>
              </div>
            </>
          )}
        </TransformWrapper>
      </div>
    );
  }
}
export default EventsList;
