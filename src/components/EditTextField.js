import React, { useState } from 'react';
import Reply from '@material-ui/icons/Reply';
import IconButton from '@material-ui/core/IconButton';
import MessengerSearch  from './MessengerSearch';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, spacing }) => {

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

const EditTextChangeHandler = (event) => {
    // SetEditText({
    //   messages: [
    //    { text : event.target.value,}
    //    ]
    // })
    console.log(event.target.value);
  }

const EditTextField = (props) => {
    const styles = useStyles();

    return (
        <div>
            <MessengerSearch className={styles.editMessage}  placeholder={'Edit Message'} 
     EditClicked={EditTextChangeHandler}
                />

        </div >
    );
}

export default EditTextField;