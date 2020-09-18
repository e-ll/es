import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Video from "../event/tabs/Video";
import {
  Grid,
  Paper,
  ListItem,
  ListSubheader,
  ListItemText,
  List,
  Chip,
  IconButton,
  Avatar,
  Typography,
} from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import ArrowLeftRoundedIcon from "@material-ui/icons/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import { FixedSizeList } from "react-window";
// import { Tabs } from './Tabs/Tabs';
import { Tabs } from "@material-ui/core/Tabs";
import { TabBlocks } from "./Tabs/TabBlocks";
const header = {
  display: "flex",
  margin: "auto",
  color: "#26374D",
  background: "linear-gradient(180deg, #85C497 8.06%, #85C497 100%)",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2.3vh",
  height: "5vh",
  // textAlign: "center",
  fontStyle: "normal",
  fontWeight: "bold",
  // padding: "1vh 0",
};
const tabHeight = "200px";
const contentList = { padding: 4, overflow: "auto", maxHeight: tabHeight };

export default function MainTabs(props) {
  const { events } = props;

  const items = [
    "Мега Екатеринбург",
    "Ельцин-центр",
    "Ашан",
    "Item4",
    "Item5",
    "Item6",
    "Item7",
  ];

  return (
    <div
      style={{
        width: "100%",
        marginTop: "1vh",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={4} style={contentList}>
          <Paper style={header}>Расписание онлайн</Paper>
          {items.map((item) => (
            <ListItem button>
              <Avatar src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" />
              <Typography>{item}</Typography>
            </ListItem>
          ))}
        </Grid>
        <Grid item xs={4} style={contentList}>
          <Paper>
            <Grid spacing={2}>
              {/* <PeopleIcon
                  // style={{ marginLeft: "25px", marginRight: "10px" }}
                /> */}

              <Typography style={header}>Участники</Typography>
            </Grid>
          </Paper>
          {events.map((event) => (
            <ListItem button component={RouterLink} to={`/event/${event._id}`}>
              <Avatar src={event.logoUrl ? event.logoUrl : ""} />
              <Typography style={{ marginLeft: "1vw" }}>
                {event.partisipantName}
              </Typography>
            </ListItem>
          ))}
        </Grid>
        {/* <Grid item xs={3}>
          <Paper style={header}>Общий чат</Paper>
          <div>hello</div>
        </Grid> */}
        <Grid item xs={4}>
          <Paper style={header}>
            <div >
              {/* <ArrowLeftRoundedIcon /> */}
              <Typography style={header} >Трансляция</Typography>
              {/* <ArrowRightRoundedIcon /> */}
            </div>
          </Paper>
          <Video videoId="Vp5ANvd88x0" width="300px" height={tabHeight} />
        </Grid>
      </Grid>
    </div>
  );
}
