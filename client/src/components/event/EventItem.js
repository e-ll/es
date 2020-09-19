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
  Menu,
  MenuItem,
  Fade
} from "@material-ui/core";
import Gallery from "./galery/Gallery";
import Store from "./store/Store";
import Video from "./tabs/Video";
import CloseIcon from "@material-ui/icons/Close";
import FullWidthTabs from "./tabs/FullWidthTabs";
import MapView from "./map/MapView";
import DeleteDialog from "../common/DeleteDialog";
import styles from "./EventItem.module.css"
import sportImage from "../../img/noImage.svg";
import { deleteEvent, joinEvent } from "../../actions/eventActions";
import Plug from "./Plug.js";
import { JitsiMeet } from "./conference/JitsiMeet";


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
      borderRadius: "8px",
      fontSize: "2.3vh",
      height: "5vh",
      textAlign: "center",
      fontStyle: "normal",
      fontWeight: "bold",
      padding: "1vh 0",
    };
    const styles = {
      buttons : {
        fontSize: "2vw"
      }
    }
    return (
      <Paper className="pad-2">
        <Grid container className={styles.container}>
          <Grid
            item
            style={{ display: "flex", justifyContent: "flex-end" }}
            xs={12}
          >
            {event.user._id === auth.user.id ? (
              <ButtonGroup className={styles.buttons}>
                <Button
                  component={Link}
                  to={`/edit-event/${event._id}`}
                  variant="contained"
                  color="primary"
                >
                  Изменить
                </Button>
                <Button
                  onClick={this.handleClickOpen.bind(this)}
                  variant="contained"
                  color="secondary"
                >
                  Удалить
                </Button>
              </ButtonGroup>
            ) : null}
          </Grid>
          <Grid item xs={6} className={styles.first}>
            <Grid>
              {event.youTubeCode ? (
                <Plug videoId={event.youTubeCode} />
              ) : (
                <img
                  style={{ width: "100%", height: "auto" }}
                  src="/img/greenfestPlug.jpg"
                />
              )}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography style={header}>О нас</Typography>
            <Grid
              style={{ marginLeft: "30px", height: "100%" }}
              dangerouslySetInnerHTML={{
                __html: event.description,
              }}
            ></Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography style={header}>Галерея</Typography>
            <Grid>
              <Gallery images={event.galeryUrl} />
            </Grid>
          </Grid>
          <Grid container direction="row" justify="space-around">
            <Grid style={{ width: "50%" }}>
              <Grid
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Typography style={header}>Видеочат с участником</Typography>
                <JitsiMeet
                  roomName={event.partisipantName}
                  style={{ height: "300px" }}
                />
                <img
                  src="/img/call.jpg"
                  style={{
                    width: "50%",
                    height: "auto",
                    borderRadius: "30px",
                    marginTop: "5%",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item style={{ width: "50%" }}>
              <Typography style={header}>Как нас найти</Typography>
              <MapView
                coordinates={event.address.coordinates}
                location={event.location}
              />
            </Grid>
          </Grid>

          {/* event.shopId */}
          {event.shopId ? (
          
              <Grid style={{ maxHeight: "100%" }}>
              <Typography style={header}>Интернет-магазин</Typography>
                <Store shopId={event.shopId} />
              </Grid>
           
          ) : null}
        </Grid>

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
