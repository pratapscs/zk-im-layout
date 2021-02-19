import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import VideocamIcon from '@material-ui/icons/Videocam';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});


const ConferenceHead = () => {
  const styles = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    showLabels
    className={styles.root}
  >
    <BottomNavigationAction component={Link} to={{ pathname: '/meetingpage', meeting: { meetingId: '2329451172', password: '164494', email: 'pratap@zkteco.in', role: 1 } }} 
        value="start" label="NewMeeting" icon={<VideocamIcon fontSize="large" />} />
    <BottomNavigationAction component={Link} to="/join" value="join" label="Join" icon={<AddCircleOutlineIcon fontSize="large" />}  />
    <BottomNavigationAction component={Link} to="/schedule" value="schedule" label="Schedule" icon={<DateRangeIcon fontSize="large" />}  />
    <BottomNavigationAction component={Link} to="/share" value="share" label=" Share Screen" icon={<ScreenShareIcon fontSize="large" />} />

  </BottomNavigation>
  );
};

export default ConferenceHead;
