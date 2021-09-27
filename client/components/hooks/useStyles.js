import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => (
  {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    pane: {
      width: '50%',
      minWidth: '650px',
      marginBottom: '1rem',
    },
    pane2: {
      width: '50%',
      minWidth: '650px',
      marginBottom: '1rem',
      height: '100%',
      overflow: 'auto',
    },
    viewWindow: {
      display: 'flex',
      flexWrap: 'wrap',
      height: '57vh',
    },
    table: {
      height: '100%',
    },
    tableContainer: {
      height: '100%',
      overflow: 'hidden',
    },
    colName: {
      cursor: 'pointer',
      width: '17%',
    },
    bigCell: {
      width: '17%',
    },
    smallCell: {
      width: '7%',
    },
    userName: {
      cursor: 'pointer',
      width: '17%',
    },
    btn: {
      cursor: 'pointer',
    },
    calBarBtn: {
      height: ' 3rem',
    },
    calendarToolbar: {
      display: 'flex',
      flexwrap: 'wrap',
      alignItem: 'center',
      justifyContent: 'space-evenly',
    },
    dateInput: {
      display: 'flex',
      width: 'max-content',
    },
    calBtnGroup: {
      alignItems: 'center',
    },
    mapToobar: {
      display: 'flex',
    },
    eventDescriptionName: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    eventAvatarPhoto: {
      display: 'inline-block',
    },
    eventInfo: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    submitBtn: {
      width: '5em',
    },
    editProfileBtn: {
      width: '10em',
    },
    myProfilePhoto: {
      width: '10em',
      height: '10em',
    },
    logins: {
      padding: '2.25rem 5rem',
    },
    // toolbar: theme.mixins.toolbar,
    // main: {
    //   display: 'flex',
    //   marginTop: '40px',
    // },
  }
));

export default useStyles;
