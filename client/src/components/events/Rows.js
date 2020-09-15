import React, { Component } from "react";
import Estand from "../../canvas/stands/Estand";
// import Bstand from '../../canvas/stands/Bstand'
import {
  Tooltip,
  Link,
  Button,
  IconButton,
  ButtonGroup,
  CssBaseline,
} from "@material-ui/core";

export default class Rows {
  constructor(props) {}
  render() {
  // const { type } = props;
  const arrStands = [0, 1, 2, 3];
  // const arrStands = [];
  //leftside
  const lStart = 55.0262;
  const tStart = 19.13;
  const lIndex = 1.965;
  const tIndex = 1.551;

  // for (let i = 0; i < 1; i++) {
  //   let l = lStart + i * lIndex;
  //   let t = tStart + i * tIndex;
  //   let newStand = { l: String(l) + "%", t: String(t) + "%" };
  //   arrStands.push(newStand);
  // }
  const arrCoord = [
    { l: "55.0262%", t: "19.13%" },
    { l: "865.11px", t: "154px" },
    { l: "859.11px", t: "188px" },
    { l: "893.11px", t: "169px" },
    { l: "885.11px", t: "203px" },
    { l: "920.11px", t: "183px" },
  ];
  
  // type = [<Estand />, <Bstand />, ]
  Array(5).map((index) => {
    const intervalD = 2;
    const angle = 45;
    const radian = (Math.PI * angle) / 180;
    const startX = 55.0262;
    const startY = 19.13;
    const xCoordinate = intervalD * Math.cos(radian);
    const yCoordinate = intervalD * Math.sin(radian);
    const left = startX + index * xCoordinate;
    const top = startY + index * yCoordinate;
    const l = String(left) + "%";
    const t = String(top) + "%";

    return (
      <>
        <Tooltip title={`Стенд № ${0}`} interactive>
          <Link to={`/event/${0}`}>
            <div
              style={{
                position: "absolute",
                left: l,
                top: t,
                height: "3.95%",
                width: "auto",
              }}
              aria-label="delete"
            >
              <Estand
                logoUrl="https://www.logaster.ru/blog/wp-content/uploads/2018/02/google.png"
                name="Google"
              />
            </div>
          </Link>
        </Tooltip>
      </>
    );
  });
}
}