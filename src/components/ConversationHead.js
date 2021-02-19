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
import ChatModal from './ChatModal';
import MessengerSearch from './MessengerSearch';

const useStyles = makeStyles((theme) => ({
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
  HeaderIcon: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  }
}));

const useMessageSearchStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .04)',
    borderRadius: 40,
    width: '100%'
  },
  input: {
    boxSizing: 'border-box',
    minHeight: 36
  },
  icon: {
    color: 'rgb(0, 153, 255)',
    width: 35,
    height: 35,
  },
}));

const ConversationHead = ({
  avatar,
  primary,
  secondary
}) => {
  const styles = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleDialogOpen = () => {
    setIsOpen(true);
  };
  const handleDialogClose = () => {
    setIsOpen(false);
  };

  const messageStyle = useMessageSearchStyles();

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
      <ListItemSecondaryAction className={styles.HeaderIcon}>
        <IconButton className={styles.iconBtn}>
          <PhoneInTalkIcon />
        </IconButton>
        <IconButton className={styles.iconBtn}>
          <Videocam />
        </IconButton>
        <IconButton className={styles.iconBtn} onClick={handleDialogOpen}>
          <GroupAddIcon />
        </IconButton>
        <ChatModal
          id="addMember"
          dialogTitle="Add Members"
          isOpen={isOpen}
          handleClose={handleDialogClose}
        >
          <MessengerSearch useState={messageStyle} />
        </ChatModal>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ConversationHead;