import React, { Component } from "react";
// import MainTabs from "./MainTabs.js";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  CircularProgress,
  LinearProgress,
} from "@material-ui/core";
// import PositionLabel from "../cursor/PositionLabel";
import EventsList from "../events/EventsList";
import newCard from "../../canvas/newCard.png"
import Spinner from "../common/Spinner";
import { getEvents } from "../../actions/eventActions";


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
      <div
        className="coverf"
        style={{
          height: "400px",
          width: "621.6px",
        }}
        className="mapWrapper"
      >
        {/* <img
          className="mapas"
          src={newCard}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            height: "100%",
            width: "auto",
          }}
        /> */}

        {events.length ? eventContent : <LinearProgress />}
        {/* <MainTabs events={events} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
});

export default connect(mapStateToProps, { getEvents })(Events);
