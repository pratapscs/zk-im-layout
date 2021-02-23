import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TagFaces from '@material-ui/icons/TagFaces';
import Reply from '@material-ui/icons/Reply';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ReplyTextField from './ReplyTextField';
import EditTextField from './EditTextField';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const useStyles = makeStyles(({ palette, spacing }) => {
  const radius = spacing(2.5);
  const size = 30;
  const rightBgColor = palette.primary.main;
  // if you want the same as facebook messenger, use this color '#09f'
  return {
    avatar: {
      width: size,
      height: size,
    },
    rightRow: {
      marginLeft: 'auto',
    },
    msgBox: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 4,
      '&:hover $iconBtn': {
        opacity: 1,
      },
    },
    leftMsgBox: {
      textAlign: 'left',
    },
    rightMsgBox: {
      textAlign: 'right',
      flexDirection: 'row-reverse',
    },
    msg: {
      maxWidth: '70%',
      padding: spacing(1, 2),
      borderRadius: 4,
      display: 'inline-block',
      wordBreak: 'break-word',
      fontFamily:
        // eslint-disable-next-line max-len
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fontSize: '14px',
    },
    left: {
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius,
      backgroundColor: palette.grey[100],
    },
    right: {
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius,
      backgroundColor: rightBgColor,
      color: palette.common.white,
    },
    leftFirst: {
      borderTopLeftRadius: radius,
    },
    leftLast: {
      borderBottomLeftRadius: radius,
    },
    rightFirst: {
      borderTopRightRadius: radius,
    },
    rightLast: {
      borderBottomRightRadius: radius,
    },
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
    actionButton: {
      padding: '2px 2px 2px 2px',
      margin: '10px 10px 10px 10px',
    },
    image: {
      maxWidth: 120,
      maxHeight: 120,
    },
    replyFieldText: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    }
  };
});

const ChatMsg = ({ avatar, messages, side }) => {
  const styles = useStyles();
  const [replyOpen, setReplyOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      const handleEscapeClick = (event) => {
        if (event.key === 'Escape') {
          setEditOpen(false);
          setReplyOpen(false);
        }
      }
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setEditOpen(false);
          setReplyOpen(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener('keydown', handleEscapeClick);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener('keydown', handleEscapeClick);
      };
    }, [ref]);
  }


  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const attachClass = index => {
    if (index === 0) {
      return styles[`${side}First`];
    }
    if (index === messages.length - 1) {
      return styles[`${side}Last`];
    }
    return '';
  };

  const handleReplyClicked = (i) => {
    setReplyOpen(!replyOpen);
    setEditOpen(false)
  }
  const handleEditClicked = () => {
    setReplyOpen(false)
    setEditOpen(
      {
        editOpen: !editOpen,
      })
  }

  return (
  <>
    <Grid
      container
      spacing={2}
      justify={side === 'right' ? 'flex-end' : 'flex-start'}
    >
      {side === 'left' && (
        <Grid item>
          <Avatar src={avatar} className={cx(styles.avatar)} />
        </Grid>
      )}
      <Grid item xs>
        {messages.map((msg, i) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div
              key={msg.id || i}
              className={cx(styles.row, styles[`${side}Row`])}
            >
              <div className={cx(styles.msgBox, styles[`${side}MsgBox`])}>
                {typeof msg === 'string' && (
                  <>
                    {editOpen ? <Grid
                      container
                      spacing={2}
                      justify={side === 'right' ? 'flex-end' : 'flex-start'}
                    >
                      <Grid item xs >
                        <>
                          <div ref={wrapperRef}>
                            <EditTextField />
                            <Button variant="contained" color="primary" className={styles.actionButton} >
                              Save
                             </Button>
                            <Button variant="contained" color="secondary" className={styles.actionButton} onClick={() => setEditOpen(false)}>
                              cancel
                             </Button>
                          </div>
                        </>

                      </Grid>
                    </Grid> :
                      <Typography
                        align={'left'}
                        className={cx(styles.msg, styles[side], attachClass(i))}
                      >
                        {msg}
                      </Typography>
                    }
                  </>
                )}
                {typeof msg === 'object' && msg.type === 'image' && (
                  <img className={styles.image} alt={msg.alt} {...msg} />
                )}
                <IconButton className={styles.iconBtn}>
                  <TagFaces />
                </IconButton>
                <IconButton className={styles.iconBtn} onClick={handleEditClicked}>
                  <EditOutlinedIcon />
                </IconButton>
                <IconButton className={styles.iconBtn}>
                  <Reply onClick={() => handleReplyClicked(i)} />
                </IconButton>
              </div>
            </div>
          );
        })}
      </Grid>
    </Grid>
    <Grid
    container
    spacing={2}
    justify={side === 'right' ? 'flex-end' : 'flex-start'}
  >
    <Grid item xs >
      {replyOpen ? (
        <>
          <div className={styles.replyFieldText} ref={wrapperRef}>
            <IconButton>
              <AccountCircleOutlinedIcon />
            </IconButton>
            <ReplyTextField />
          </div>
          <Button variant="contained" color="primary" className={styles.actionButton} >
            Send
      </Button>
          <Button variant="contained" color="secondary" className={styles.actionButton} onClick={() => setReplyOpen(false)}>
            cancel
      </Button>
        </>
      ) : null}
    </Grid>
  </Grid>
</>
  );
};

ChatMsg.propTypes = {
  avatar: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.string),
  side: PropTypes.oneOf(['left', 'right']),
};

ChatMsg.defaultProps = {
  avatar: '',
  messages: [],
  side: 'left',
};

export default ChatMsg;
