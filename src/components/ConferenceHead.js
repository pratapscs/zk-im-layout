import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import Videocam from '@material-ui/icons/Videocam';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
  },
  root: {
    padding: '8px 8px 8px 16px',
  },
  primary: {
    fontWeight: 'bold',
  },
  secondary: {
    fontSize: 12,
  },
  iconBtn: {
    '& svg': {
      color: 'rgb(0, 153, 255)',
    },
  },
}));

const ConversationHead = ({
  avatar,
  primary,
  secondary
}) => {
  const styles = useStyles();
  return (
    <ListItem
      ContainerComponent={'div'}
      ContainerProps={{ className: styles.container }}
      className={styles.root}
    >
      <ListItemAvatar>
        <Avatar src={avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={primary}
        secondary={secondary}
        classes={{ primary: styles.primary, secondary: styles.secondary }}
      />
      <ListItemSecondaryAction>
        <IconButton className={styles.iconBtn}>
          <PhoneInTalkIcon />
        </IconButton>
        <IconButton className={styles.iconBtn}>
          <Videocam />
        </IconButton>
        <IconButton className={styles.iconBtn}>
          <GroupAddIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

ConversationHead.defaultProps = {
  primary: '',
  secondary: ''
}

ConversationHead.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string
};

export default ConversationHead;
