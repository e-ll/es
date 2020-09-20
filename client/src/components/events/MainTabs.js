import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Video from "../event/tabs/Video";
import {Link} from "@material-ui/core"
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
import styles from "./MainTabs.module.css";
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
const tabHeight = "300px";
const contentList = { padding: 4, overflow: "auto", maxHeight: tabHeight };

export default function MainTabs(props) {
  const { events } = props;

  const items = [
    // "Мега Екатеринбург",
    // "Ельцин-центр",
    // "Ашан",
    // "Item4",
    // "Item5",
    // "Item6",
    // "Item7",
    "Онлайн расписание"
  ];

  return (
    <div
      style={{
        width: "100%",
        marginTop: "1vh",
      }}
    >
      <Grid className={styles.tabsContainer} container spacing={1}>
        <Grid item sm={4} style={contentList}>
          <Paper style={header}>Расписание онлайн</Paper>
          {items.map((item) => (
            <Link href="https://docs.google.com/document/u/1/d/e/2PACX-1vQStLV49nC112_Z6z0mMiFjRHZgc4yNrXOqGis0q5iMm39bF4MuAqMk9b6Y5o-UIF12RGUbXudBXxIS/pub">
              <ListItem button>
                <Avatar src="https://w7.pngwing.com/pngs/862/497/png-transparent-green-circle-miscellaneous-atmosphere-sphere.png" />
                <Typography>{item}</Typography>
              </ListItem>
            </Link>
          ))}
        </Grid>
        <Grid item sm={4} style={contentList}>
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
        <Grid sm={4} item>
          <Paper style={header}>
            <div>
              {/* <ArrowLeftRoundedIcon /> */}
              <Typography style={header}>Трансляция</Typography>
              {/* <ArrowRightRoundedIcon /> */}
            </div>
          </Paper>
          <Video videoId="RTohsZyNNts" width="300px" height={tabHeight} />
        </Grid>
      </Grid>
    </div>
  );
}
