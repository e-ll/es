import React, { Component } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Paper,
  Grid,
  Box,
  Chip,
  Avatar,
  Snackbar,
  IconButton,
  ButtonGroup,
  Button,
  Typography,
} from "@material-ui/core";
import Gallery from "./galery/Gallery";
import Store from "./store/Store";
import Video from "./tabs/Video";
import CloseIcon from "@material-ui/icons/Close";
import FullWidthTabs from "./tabs/FullWidthTabs";
import MapView from "./map/MapView";
import DeleteDialog from "../common/DeleteDialog";
import styles from "./Event.module.css";
import sportImage from "../../img/noImage.svg";
import { deleteEvent, joinEvent } from "../../actions/eventActions";
import Plug from "./Plug.js";
import { JitsiMeet } from "./conference/JitsiMeet"

class EventItem extends Component {
  constructor() {
    super();
    this.state = {
      openDeleteDialog: false,
      openSnackbar: false,
      openVideo: false,
    };
  }
  handleClickOpen() {
    this.setState({ openDeleteDialog: true });
  }
  handleClickVideo() {
    this.setState({ openVideo: true });
    console.log("Video clicked");
  }

  handleClose() {
    this.setState({ openDeleteDialog: false });
  }

  handleCloseSnackbar() {
    this.setState({ openSnackbar: false });
  }

  onDeleteClick(id) {
    this.props.deleteEvent(id);
    this.props.history.push("/events");
  }

  onJoinClick(id) {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
    this.setState({ openSnackbar: true });

    this.props.joinEvent(id);
  }

  render() {
    const { event, snackbarMessage, auth } = this.props;
    const header = {
      color: "#26374D",
      background: "linear-gradient(180deg, #85C497 8.06%, #85C497 100%)",
      boxSizing: "border-box",
      borderRadius:"8px",
      fontSize: "2.3vh",
      height: "5vh",
      textAlign: "center",
      fontStyle: "normal",
      fontWeight: "bold",
      padding: "1vh 0",
    };
    return (
      <Paper className="pad-2">
        <Grid container>
          <Grid item xs={6}>
            <Grid>
              <Plug />
            </Grid>
            <Typography>Галерея</Typography>
            <Grid>
              <Gallery images={event.galeryUrl} />
            </Grid>
            {/* event.shopId */}
            {event.shopId ? (
              <>
                <Typography>Интернет-магазин</Typography>
                <Grid style={{ maxHeight: "300px" }}>
                  <Store />
                </Grid>
              </>
            ) : null}
          </Grid>
          <Grid item xs={6}>
            <Grid>{event.description}</Grid>
            <Grid container direction="row" justify="space-around">
              <Grid style={{ width: "50%" }} item>
                <Typography style={header}>Чат с участником</Typography>
                <JitsiMeet
                  roomName={event.partisipantName}
                  style={{ height: "300px" }}
                />
              </Grid>
              <Grid item style={{ width: "50%" }}>
                <Typography style={header}>Как нас найти</Typography>
                <MapView
                  coordinates={event.address.coordinates}
                  location={event.location}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* <Grid container> */}
        {/* <Grid item xs={12} md={6}>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <span className={styles.labelInfo}>Type of Sport</span>
                <p>{event.standType}</p>
              </Grid>

              <Grid item xs={6}>
                <span className={styles.labelInfo}>Number of Player</span>
                <p>
                  <i className="fas fa-users"></i>
                  {event.numberofplayer}
                </p>
              </Grid>
            </Grid>

            <span className={styles.labelInfo}>Location</span>
            <p>{event.location ? event.location : "To Be Announced"}</p>

            <span className={styles.labelInfo}>Start Date</span>
            <p>
              {event.start ? (
                <Moment format="MM/DD/YYYY">{event.start}</Moment>
              ) : (
                "To Be Announced"
              )}
            </p>

            <span className={styles.labelInfo}>Description</span>
            <p>{event.description ? event.description : "None"}</p> */}

            {/* <Typography display="inline">
              <Link to={`/profile/${event.user._id}`}>
                Host By {event.user.name}
              </Link>
            </Typography> */}

            {event.user._id === auth.user.id ? (
              <ButtonGroup className="marginL-1">
                <Button
                  component={Link}
                  to={`/edit-event/${event.user._id}`}
                  variant="contained"
                  color="primary"
                >
                  Edit
                </Button>
                <Button
                  onClick={this.handleClickOpen.bind(this)}
                  variant="contained"
                  color="secondary"
                >
                  Delete
                </Button>
              </ButtonGroup>
            ) : null}
          {/* </Grid> */}
        {/* <Grid container item xs={12} md={6}>
            <img
              className="marginB-1"
              style={{ width: "100%" }}
              src={event.imageURL ? event.imageURL : sportImage}
              alt="Sport"
            />
          </Grid>
        </Grid>
        {event.address ? (
          <MapView
            coordinates={event.address.coordinates}
            location={event.location}
          />
        ) : null}
        <hr />
        <Box display="flex">
          <Button
            className="primary-color"
            onClick={this.onJoinClick.bind(this, event._id)}
            variant="contained"
            color="primary"
          >
            {auth.isAuthenticated ? "Join This Event" : "Login to Join"}
          </Button>
          <p className="marginL-1">
            {event.numberofplayer - event.listofplayer.length} spots left
          </p>
        </Box>
        <div className="marginT-1">
          {event.listofplayer.map((player, index) => {
            return (
              <Chip
                key={player._id}
                className="marginR-1 marginX-1"
                avatar={<Avatar>{index + 1}</Avatar>}
                label={player.name}
                variant="outlined"
              />
            );
          })}
        </div>*/}
        <DeleteDialog
          onDeleteClick={this.onDeleteClick.bind(this, event._id)}
          openDeleteDialog={this.state.openDeleteDialog}
          handleClose={this.handleClose.bind(this)}
        />

        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={this.state.openSnackbar}
          autoHideDuration={5000}
          onClose={this.handleCloseSnackbar.bind(this)}
          message={snackbarMessage}
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={this.handleCloseSnackbar.bind(this)}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
        {/* <FullWidthTabs event={event} /> */}
      </Paper>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteEvent, joinEvent })(
  withRouter(EventItem)
);
