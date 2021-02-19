/* eslint-disable */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = ({ breakpoints, transitions }) => ({
  root: {
    padding: 16,
    transition: transitions.create(),
    [breakpoints.up('sm')]: {
      padding: 24,
      maxWidth: 700,
      margin: 'auto',
    },
    [breakpoints.up('md')]: {
      maxWidth: 960,
    },
  },
});

const ContentEx = ({ classes }) => (
  <div className={classes.root}>
  <Typography variant={'overline'}>INTRODUCING</Typography>
      <Typography weight={'bold'} variant={'h4'} gutterBottom>
        IM Service <Link underline={'none'}>Layout</Link>
      </Typography>
      <Typography gutterBottom>
        <b>Version 0.1.0</b>  
      </Typography>
        <br />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        <b>{"Let's start with Why?"}</b>
      </Typography>
      <Typography gutterBottom>
        I created this because
        <br />
      </Typography>
      <Typography component={'div'}>
        <ul>
            <li>IM users management</li>
            <li>Contacts management</li>
            <li>Send, receive, list messages in chat and channels</li>
            <li>Manage meetings</li>
          </ul>
      </Typography>
      <br />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        <b>Objectives</b>
      </Typography>
      <Typography>
        Create IM application react js lib with components 
      </Typography>
      <br />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        <b>components List</b>
      </Typography>
      <Typography>Separate IM Service layout into multiple components</Typography>
      <Typography component={'div'}>
        <ul>
          <li>Top Container Component - LeftSidebar - Desktop layout</li>
          <li>Top Container Component - RightMainPage - Desktop layout</li>
          <li>Top Container Component - BottomToolBar - Mobile layout</li>
          <li>Top Container Component - TopMainPage - Mobile layout</li>
          <li>Chat Component</li>
          <li>Meeting Component</li>
          <li>Contacts Component</li>
          <li>Workbench Component</li>
          <li>Docs Component</li>
          <li>Corporate Component</li>
          <li>Profile Component</li>
        </ul>
      </Typography>
      <Typography>
        <b>Top Container</b> will provide context to other components to sync states
        across them.
      </Typography>

      <Typography>
        <b>Chat Component</b> will provide context to other components to sync states
        across them.
      </Typography>

      <Typography>
        <b>Meeting Component</b> will provide context to other components to sync states
        across them.
      </Typography>

      <br />
      <br />
      <br />
  </div>
);

ContentEx.propTypes = {};
ContentEx.defaultProps = {};

export default withStyles(styles)(ContentEx);
