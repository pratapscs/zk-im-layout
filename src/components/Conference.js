import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Layout, { Root, getHeader, getFullscreen } from '@mui-treasury/layout';
import ConferenceHead from './ConferenceHead';
import ConferenceTabs from './ConferenceTabs';
import Box from "@material-ui/core/Box";

const Header = getHeader(styled);
const Fullscreen = getFullscreen(styled);

const useStyles = makeStyles(() => ({
  header: {
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, .10)',
    backgroundColor: '#ffffff',
  },
  meetingHeader: {
    fontSize: '18px',
    fontWeight: '700',
    fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  insetBody: {
    borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
    overflowY: 'auto',
    backgroundColor: '#fff',
  },
  edit: {
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
  FullscreenDiv: {
    marginLeft: '84px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
    }
  }
}));

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: 'rgb(0, 153, 255)',
      },
      background: {
        default: '#fff',
      },
    },
    typography: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body1: {
        fontSize: `${15 / 16}rem`,
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          'strong, b': {
            fontWeight: 'bold',
          },
        },
      },
    },
  })
);

const Conference = () => {
  const styles = useStyles();
  const scheme = Layout();

  scheme.configureHeader(builder => {
    builder.create('appHeader').registerConfig('xs', {
      position: 'relative',
      initialHeight: 60,
    });
  });

  return (
    <Fullscreen className={styles.FullscreenDiv}>
      <Root theme={theme} scheme={scheme}>
        {() => (
          <>
            <CssBaseline />
            <Header className={styles.header}>
              <Box p={3} className={styles.meetingHeader}> Meeting </Box>
            </Header>
            <br />
            <ConferenceHead />
            <br />  <br />
            <ConferenceTabs />
          </>
        )}
      </Root>
    </Fullscreen>
  );
};

export default Conference;