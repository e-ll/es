import React, { Component } from "react";
import {MainTabs} from "./MainTabs.jsx";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  CircularProgress,
  LinearProgress,
} from "@material-ui/core";

import EventsList from "./EventsList";
import SelectFieldGroup from "../common/SelectFieldGroup";
import Spinner from "../common/Spinner";
import { getEvents } from "../../actions/eventActions";
import Expo from "./Expo";
const standList = [
  "All Sports",
  "Badminton",
  "Tennis",
  "Volleyball",
  "Basketball",
  "Baseball",
  "Running",
  "Table tennis",
  "Football",
  "Soccer",
];

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standType: "",
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getEvents("");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.props.getEvents(e.target.value);
  }

  render() {
    const { events, loading } = this.props.events;
    let eventContent;

    if (events === null || loading) {
      eventContent = <LinearProgress />;
    } else {
      eventContent = <EventsList events={events} />;
    }

    return (
      <>
        {/* <Grid container className="marginX-1">
          {/* <Grid item xs={12} sm={6} md={6}>
            <Typography className="marginT-2" variant="h3" component="h1">
              Экофест
            </Typography> */}
        {/* </Grid> */}
        {/* <Grid item xs={12} sm={6} md={6}>
            <SelectFieldGroup
              label="Search"
              name="standType"
              type="name"
              value={this.state.standType}
              onChange={this.onChange}
              standList={standList}
            />
          </Grid> */}
        {/* </Grid> */}
        {events.length ? eventContent : <LinearProgress />}
      <MainTabs />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
});

export default connect(mapStateToProps, { getEvents })(Events);
