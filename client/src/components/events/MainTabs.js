import React from "react";
import {
  Grid,
  Paper,
  ListItem,
  ListSubheader,
  ListItemText,
  List,
} from "@material-ui/core";
import { FixedSizeList } from "react-window";
const header = {
  color: "#26374D",
  background: "linear-gradient(180deg, #85C497 8.06%, #85C497 100%)",
  boxSizing: "border-box",
  fontSize: "2.3vh",
  height: "5vh",
  textAlign: "center",
  fontStyle: "normal",
  fontWeight: "bold",
  padding: "1vh 0",
};
export default function UniTable() {
  const items = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6", "Item7"];
  return (
    <div
      style={{
        width: "100%", marginTop: "1vh"
      }}
    >
      <Grid container spacing={1}>
        <Grid
          item
          xs={3}
          style={{ padding: 4, overflow: "auto", maxHeight: 200 }}
        >
          <Paper style={header}>Расписание онлайн</Paper>
          {items.map((item) => (
            <ListItem button>{item}</ListItem>
          ))}
        </Grid>
        <Grid item xs={3}>
          <Paper style={header}>Участники</Paper>
          <div>
            <div>Privet</div>
            <div>Privet</div>
            <div>Privet</div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <Paper style={header}>Общий чат</Paper>
          <div>hello</div>
        </Grid>
        <Grid item xs={3}>
          <Paper style={header}>Трансляции</Paper>
          <div>hello</div>
        </Grid>
      </Grid>
    </div>
  );
}
