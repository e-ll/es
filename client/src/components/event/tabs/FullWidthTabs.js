import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MapView from '../map/MapView'
import Store from "../store/Store"
import Video from './Video'
import { JitsiMeet } from "../conference/JitsiMeet";
import { JitsiCalling } from "../conference/JitsiMeet";
;
function TabPanel(props) {
  const { children, value, index,event, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1200,
  },
}));

export default function FullWidthTabs(props) {
  const { event, ...other } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Информация об участнике" {...a11yProps(0)} />
          <Tab label="Видео/Трансляции" {...a11yProps(1)} />
          <Tab label="Интернет-магазин" {...a11yProps(2)} />
          <Tab label="Контакты" {...a11yProps(3)} />
          <Tab label="Видеоконференция" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {event.description}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Video videoId={event.youTubeCode} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Store event={event} />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          {event.address ? (
            <MapView
              coordinates={event.address.coordinates}
              location={event.location}
            />
          ) : null}
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <JitsiCalling event={event} />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
