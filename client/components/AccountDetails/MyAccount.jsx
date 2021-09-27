/* eslint-disable react/prop-types */
import React from 'react';
import {
  Typography, Container, Button, Avatar,
} from '@material-ui/core';
import useStyles from '../hooks/useStyles';

const MyAccount = (props) => {
  const classes = useStyles();
  const { profileInfo, setIsEditing } = props;
  const {
    name, performer, followers, bio, cashappURL, zipcode, photo, email,
  } = profileInfo;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '2.5em' }}>
      <Typography variant="h4">Account Settings</Typography>
      <Button
        className={classes.editProfileBtn}
        variant="contained"
        type="button"
        onClick={() => (setIsEditing(true))}
      >edit profile</Button>
      <Avatar
        className={classes.myProfilePhoto}
        src={photo}
        alt="profile avatar"
        style={{ height: '25vh', width: '25vh' }}
      />
      <Typography>{`Name: ${name}`}</Typography>
      <Typography>{`Email: ${email}`}</Typography>
      <Typography>{`Bio: ${bio}`}</Typography>
      <Typography>{`Home Zipcode: ${zipcode}`}</Typography>
      {
        performer
          ? (
            <div>
              <Typography>{`Follower Count: ${followers}`}</Typography>
              <Typography>{`CashApp: ${cashappURL ? cashappURL : 'Add a cashapp link for tips!'}`}</Typography>
            </div>
          )
          : null
      }
    </div >
  );
};
export default MyAccount;
