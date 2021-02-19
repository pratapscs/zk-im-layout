import React from 'react';
import Reply from '@material-ui/icons/Reply';
import IconButton from '@material-ui/core/IconButton';
import MessengerSearch  from './MessengerSearch';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => {

    return {
    iconBtn: {
        opacity: 0,
        padding: 6,
        color: 'rgba(0,0,0,0.34)',
        '&:hover': {
          color: 'rgba(0,0,0,0.87)',
        },
        margin: '0 4px',
        '& svg': {
          fontSize: 20,
        },
      },
}
});


const ReplyTextField = () => {
    const [setAnchorEl] = React.useState(null);
    const styles = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log('hello')
    };

    return (
        <div>
            <IconButton className={styles.iconBtn} onClick={handleClick}>
                <Reply />
            </IconButton>
            <MessengerSearch className={styles.editMessage}
                placeholder={'Type Message'} />

        </div >
    );
}

export default ReplyTextField;