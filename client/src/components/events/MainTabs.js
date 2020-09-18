import React from "react";
import Video from "../event/tabs/Video"
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
import { Tabs } from '@material-ui/core/Tabs';
import { TabBlocks } from './Tabs/TabBlocks';
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
const tabHeight = "200px";
const contentList = { padding: 4, overflow: "auto", maxHeight: tabHeight};

export default function MainTabs(props) {
  
  const items = ["Мега Екатеринбург", "Ельцин-центр", "Ашан", "Item4", "Item5", "Item6", "Item7"];
  
  return (
    <div
      style={{
        width: "100%",
        marginTop: "1vh",
        marginLeft: "1vw",
        marginRight: "1vw"

      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={3} style={contentList}>
          <Paper style={header}>Расписание онлайн</Paper>
          {items.map((item) => (
            <ListItem button>
              <Avatar src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" />
              <Typography>{item}</Typography>
            </ListItem>
          ))}
        </Grid>
        <Grid item xs={3} style={contentList}>
          <Paper style={header}>
            <Grid style={{ display: "flex" }} spacing={2}>
              <Grid item>
                <PeopleIcon
                  style={{ marginLeft: "25px", marginRight: "10px" }}
                />
              </Grid>
              <Grid>
                <Typography variant="h5">Участники</Typography>
              </Grid>
            </Grid>
          </Paper>
          {items.map((item) => (
            <ListItem button>
              <Avatar src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" />
              <Typography>{item}</Typography>
            </ListItem>
          ))}
        </Grid>
        {/* <Grid item xs={3}>
          <Paper style={header}>Общий чат</Paper>
          <div>hello</div>
        </Grid> */}
        <Grid item xs={3}>
          <Paper style={header}>
            <div style={{ display: "flex" }}>
              <ArrowLeftRoundedIcon />
              <Typography variant="h5">Трансляции</Typography>
              <ArrowRightRoundedIcon />
            </div>
          </Paper>
          <Video videoId="ZKo7PP4WTpc" width="300px" height={tabHeight} />
        </Grid>
      </Grid>
    </div>
  );
}



