import React, { Component } from "react";

import { connect } from "react-redux";
import { Typography, Button, Link, Grid } from "@material-ui/core";
import EventItem from "../event/EventItem.js";

import Spinner from "../common/Spinner";
import ProfileAbout from "./ProfileAbout";
import { getCurrentProfile } from "../../actions/profileActions";
import styles from "./Profile.module.css";

class Profile extends Component {
  componentDidMount() {
    this.props.getCurrentProfile(this.props.match.params.id);
  }

  render() {
    const { user } = this.props.auth;
    const { events, profile, loading } = this.props.profile;

    const snackbarMessage = "Hello";
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else { 
      if (Object.keys(profile).length > 0) {
        
        profileContent = (
          <>
            <ProfileAbout profile={profile} />
            <Typography>Ссылки на ваши стенды:</Typography>
            <div className="links">
              {profile.events ? (
                profile.events.map(
                  (event) => (
                    // <li style={{listStyleType:"none"}}>
                    <Button color="primary" href={`/event/${event._id}`}>
                      {event.partisipantName}
                    </Button>
                  )
                  // </li>
                )
              ) : (
                <Typography>У вас пока не создан стенд</Typography>
              )}
            </div>
            {/* <EventItem
              event={event}
              snackbarMessage={snackbarMessage}
              auth={this.props.auth}
            /> */}
          </>
        );
      } else {
        profileContent = (
          <div className={styles.profile}>
            <Typography variant="overline" component="p" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="p" component="p" gutterBottom>
              Вы еще не заполнили профиль
            </Typography>
            <p></p>
            <Button
              className="primary-color marginB-2"
              component={Link}
              variant="contained"
              href="/create-profile"
            >
              Создать профиль
            </Button>
            <Typography>Ссылки на ваши стенды:</Typography>
            <div className="links">
              {profile.events ? (
                profile.events.map(
                  (event) => (
                    // <li style={{listStyleType:"none"}}>
                    <Button color="primary" href={`/event/${event._id}`}>
                      {event.partisipantName}
                    </Button>
                  )
                  // </li>
                )
              ) : (
                <Typography>У вас пока не создан стенд</Typography>
              )}
            </div>
          </div>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Профиль</h1>
        {profileContent}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
