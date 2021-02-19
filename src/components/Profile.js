import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import BarcodeScanIcon from "@material-ui/icons/CropFree";
import EnterpriseIcon from "@material-ui/icons/Business";
import InviteIcon from "@material-ui/icons/Drafts";
import CollectionIcon from "@material-ui/icons/StarBorder";
import SettingsIcon from "@material-ui/icons/Settings";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 320,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  avatar: {
    width: 60,
    height: 60,
    margin: "1px",
    border: "2px solid #ffffff",
    marginRight: "10px",
  },
  profile: {
    // background: 'green',
  },
  profileText: {
    color: "#304669",
    "& span": {
      fontSize: "1.5rem",
    },
    "& p": {
      fontSize: "1rem",
    },
  },
  item: {
    color: theme.palette.secondary.main,

    "& span": {
      fontSize: "1.5rem",
    },
    "& p": {
      fontSize: "1rem",
    },
  },
}));

function Profile() {
  const styles = useStyles();
  return (
    <List component="nav" className={styles.root}>
      <ListItem button className={styles.profile}>
        <ListItemAvatar>
          <Avatar
            className={styles.avatar}
            src={"https://i.pravatar.cc/300?img=12"}
          ></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="John Deo"
          secondary="ZKTeco Biometrics India"
          className={styles.profileText}
        />
        <ChevronRightIcon />
      </ListItem>
      <ListItem button className="styles.item">
        <ListItemIcon>
          <BarcodeScanIcon />
        </ListItemIcon>
        <ListItemText primary="Scan" />
        <ChevronRightIcon />
      </ListItem>
      <ListItem button className="styles.item">
        <ListItemIcon>
          <EnterpriseIcon />
        </ListItemIcon>
        <ListItemText primary="Enterprise Information" />
        <ChevronRightIcon />
      </ListItem>
      <ListItem button className="styles.item">
        <ListItemIcon>
          <InviteIcon />
        </ListItemIcon>
        <ListItemText primary="Invite Colleagues" />
        <ChevronRightIcon />
      </ListItem>
      <ListItem button className="styles.item">
        <ListItemIcon>
          <CollectionIcon />
        </ListItemIcon>
        <ListItemText primary="Collection" />
        <ChevronRightIcon />
      </ListItem>
      <ListItem button className="styles.item">
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        <ChevronRightIcon />
      </ListItem>
    </List>
  );
}
export default Profile;
