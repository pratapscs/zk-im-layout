import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ConferenceLists from "./ConferenceLists";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={1}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  };


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: "100%"
    }
  }));


const ConferenceTabs = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div className={classes.root}>
      
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} variant="scrollable">
          <Tab label="Start" />
          <Tab label="History" />
        </Tabs>
      </AppBar>
      
      <TabPanel value={value} index={0}>
        <ConferenceLists/>
      </TabPanel>
     
      <TabPanel value={value} index={1}>
          <ConferenceLists/>
      </TabPanel>
    </div>
  );
};

export default ConferenceTabs;
