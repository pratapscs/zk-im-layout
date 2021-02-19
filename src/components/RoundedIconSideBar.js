import React from 'react';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import ToysOutlinedIcon from '@material-ui/icons/ToysOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import List from '@material-ui/core/List';
import WhiteIconItem  from './WhiteIconItem';
import TextLogo from './TextLogo';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const list = [
  {
    primaryText: 'Message',
    icon: <MessageOutlinedIcon />,
    active: true,
    path: "/chat"
  },
  {
    primaryText: 'video',
    icon: <VideocamOutlinedIcon />,
    active: true,
    path: "/video"
  },
  {
    primaryText: 'Work Bench',
    icon: <ToysOutlinedIcon />,
    active: true,
  },
  {
    primaryText: 'Docs',
    icon: <DescriptionOutlinedIcon />,
    active: true,
  },
  {
    primaryText: 'Contacts',
    icon: <ContactPhoneOutlinedIcon />,
    active: true,
  },
];

const useStyles = makeStyles((theme) => ({
  itemDisplay: {
    backgroundColor: 'rgb(48, 70, 105)',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      position: 'fixed',
      width: '100%',
      justifyContent: 'space-evenly',
      bottom: '0',
      top: 'auto'
    }
  }
}));


const RoundIconSidebar = ({ onClickItem }) => {
  const styles = useStyles();
  return (
    <List className={styles.itemDisplay}>
    <TextLogo mt={2} mb={4} display={{ xs: 'none' , md: 'block' }} >
      IMS
    </TextLogo>
    {list.map(item => (
         <Link to={item.path} key={item.path}>
            <WhiteIconItem onClick={onClickItem}  {...item} />
        </Link>
    ))}
  </List>

  )
};

export default RoundIconSidebar;