import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import VideocamIcon from '@material-ui/icons/Videocam';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';

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
    <BottomNavigationAction label="New Meeting" icon={<VideocamIcon fontSize="large" />} />
    <BottomNavigationAction label="Join" icon={<AddCircleOutlineIcon fontSize="large" />} />
    <BottomNavigationAction label="Schedule" icon={<DateRangeIcon fontSize="large" />} />
    <BottomNavigationAction label=" Share Screen" icon={<ScreenShareIcon fontSize="large" />} />
  </BottomNavigation>
  );
};

export default ConferenceHead;
