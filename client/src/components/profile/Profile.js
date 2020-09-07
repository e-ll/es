import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Typography, Button } from '@material-ui/core';

import Spinner from '../common/Spinner';
import ProfileAbout from './ProfileAbout';
import { getCurrentProfile  } from '../../actions/profileActions';
import styles from './Profile.module.css';

class Profile extends Component{
  componentDidMount(){
     this.props.getCurrentProfile(this.props.match.params.id);
  }
    
  render(){
    const {user} = this.props.auth;
    const {profile, loading} = this.props.profile;
    
    let profileContent;
    
    if(profile === null || loading){
        profileContent = <Spinner />;
    }
    else{
      if(Object.keys(profile).length > 0){
        profileContent = (
          <ProfileAbout profile={profile} />
        );
      }
      else{
        profileContent = (
          <div className={styles.profile}>
            <Typography variant="overline" component="p" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="p" component="p" gutterBottom>
              Вы еще не заполнили профиль
            </Typography>
            <p></p>
            <Button className="primary-color marginB-2" component={Link} variant="contained" to="/create-profile">
              Создать профиль
            </Button>
          </div>
        );
      }
    }
    
    return(
        <div>
          <h1 className="text-center">Профиль</h1>
          {profileContent}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, {getCurrentProfile})(Profile); 