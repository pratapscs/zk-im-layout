import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
//import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

const useStyles = makeStyles(() => ({
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

const useAdornStyles = makeStyles(() => ({
  root: {
    paddingLeft: 12,
    '& svg': {
      color: 'rgba(0,0,0,0.38)',
    },
  },
}));

const MessengerSearch = ({getContactSuggestions,queryAction}) => {
  const styles = useStyles();
  const adornStyles = useAdornStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [list, setList] = React.useState(["one","two","three"]);

  const handleToggle = (search) => {
    setOpen((prevOpen) => true);
    const queryData = getContactSuggestions(search);
    setList(queryData);
  };

  const handleClose = (event,data) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
    if(data)
      queryAction(data);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const menuList = list.map((item,index) => (
    <MenuItem onClick={(event) => handleClose(event,item)}>{item ? item.title : ''}</MenuItem>
  ));


  return (
    <>
    <InputBase
      autoFocus
      classes={styles}
      startAdornment={
        <InputAdornment position={'start'} classes={adornStyles}>
          <Search />
        </InputAdornment>
      }
      placeholder={'Search Messenger'}
      onChange={e => {
        handleToggle(e.target.value);
      }}
      ref={anchorRef}
    />
     <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{zIndex:'999',width:"80%",margin:"10px"}}>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList id="menu-list-grow" onKeyDown={handleListKeyDown}>
                {menuList}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
    {/* <AddBoxOutlinedIcon className={styles.icon} /> */}
    </>
  );
};

export default MessengerSearch;
