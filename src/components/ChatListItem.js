import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import PropTypes from "prop-types";

const useStyles = makeStyles(({ palette }) => ({
  root: ({ active }) => ({
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 10,
    ...(active && {
      backgroundColor: 'rgba(0, 0, 0, .05)',
    }),
  }),
  rootHover: {
    '&:hover': {
      '& $dot': {
        display: 'none',
      },
      '& $responded': {
        display: 'none',
      },
      '& $more': {
        visibility: 'visible',
      },
    },
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  primary: ({ bold }) => ({
    ...(bold && { fontWeight: 'bold' }),
  }),
  secondary: ({ bold }) => ({
    fontSize: 13,
    color: '#999',
    ...(bold && { fontWeight: 'bold', color: palette.text.primary }),
  }),
  float: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  dot: {
    width: 12,
    height: 12,
    backgroundColor: '#09f',
    borderRadius: '50%',
  },
  more: {
    visibility: 'hidden',
    fontSize: 20,
  },
  responded: {
    width: 16,
    height: 16,
  },
}));

const ChatListItem = ({
  bold,
  active,
  avatar,
  name,
  info,
  message,
  sentTime,
  firstName,
  lastName,
  email,
  responded,
  index,
  concise,
  contact,
  onClick
}) => {
  const styles = useStyles({ bold, active });
  return (
    <Box px={1} >
      <ListItem className={cx(styles.root, styles.rootHover)} onClick={() => {onClick(contact)}}>
        <Avatar src={avatar} className={styles.avatar} />
        {/* {!concise && ( */}
          <>
            <ListItemText
              primary={firstName+" "+lastName}
              secondary={message+" • "+sentTime}
              primaryTypographyProps={{ noWrap: true }}
              secondaryTypographyProps={{ noWrap: true }}
              classes={{ primary: styles.primary, secondary: styles.secondary }}
            />
            <Box position={'relative'}>
              <MoreHoriz className={styles.more} />
              {bold && <div className={cx(styles.float, styles.dot)} />}
              {responded && (
                <Avatar
                  src={avatar}
                  className={cx(styles.float, styles.responded)}
                />
              )}
            </Box>
          </>
        {/* )} */}
      </ListItem>
    </Box>
  );
};

ChatListItem.defaultProps = {
  message: '',
  sentTime: '',
  firstName: '',
  lastName: '',
  email: '',
  contact: {},
  onClick: () => console.log("ChatList")
}

ChatListItem.propTypes = {
  message: PropTypes.string,
  sentTime: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  contact: PropTypes.object,
  onClick: PropTypes.func
};

export default ChatListItem;
