import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Layout, { Root, getHeader, getContent, getFullscreen, getDrawerSidebar, getInsetContainer, getInsetFooter } from '@mui-treasury/layout';
import MessengerSearch from './MessengerSearch';
import ChatList from './ChatList';
import ConversationHead from './ConversationHead';
import ChatBar from './ChatBar';
import ChatDialog from './ChatDialog';

const Header = getHeader(styled);
const Content = getContent(styled);
const Fullscreen = getFullscreen(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const InsetFooter = getInsetFooter(styled);
const InsetContainer = getInsetContainer(styled);

const useStyles = makeStyles(() => ({
  header: {
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, .10)',
    backgroundColor: '#fff',
  },
  insetBody: {
    borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
    overflowY: 'auto',
    backgroundColor: '#fff',
  },
  edit: {
    backgroundColor: 'rgba(0,0,0,0.04)',
    marginLeft: '10px',
    // width: '2em',
    // height: '2em',
    // fontSize: '5em',
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

const IMMessages = () => {
  const styles = useStyles();
  const scheme = Layout();
  scheme.configureHeader(builder => {
    builder.create('appHeader').registerConfig('xs', {
      position: 'relative',
      initialHeight: 60,
    });
  });
  scheme.configureEdgeSidebar(builder => {
    builder
      .create('primarySidebar', { anchor: 'left' })
      .registerPermanentConfig('xs', {
        width: '25%',
        collapsible: true,
        collapsedWidth: '100%',
      });
  });
  scheme.enableAutoCollapse('primarySidebar', 'sm');
  scheme.configureInsetSidebar(builder => {
    builder
      .create('secondarySidebar', { anchor: 'right' })
      .registerAbsoluteConfig('sm', {
        width: '33%',
      });
  });
  return (
    <Fullscreen>
      <Root theme={theme} scheme={scheme}>
        {({ state: { sidebar } }) => (
          <>
            <CssBaseline />
            <Header className={styles.header}>
              <Toolbar disableGutters>
                <ConversationHead />
              </Toolbar>
            </Header>
            <DrawerSidebar sidebarId={'primarySidebar'}>
              {sidebar.primarySidebar.collapsed ? (
                <Box textAlign={'center'} my={1} display='flex' p={1} >
                   <MessengerSearch />
                  <IconButton className={styles.edit}>
                    <AddOutlinedIcon />
                  </IconButton>
                </Box>
              ) : (
                  <>
                    <br />
                    <Box  display='flex' p={1}>
                    <MessengerSearch />
                  <IconButton className={styles.edit}>
                     
                    <AddOutlinedIcon />
                  </IconButton>
                    </Box>
                  </>
                )}
              <ChatList concise={sidebar.primarySidebar.collapsed} />
            </DrawerSidebar>
            <Content>
              <InsetContainer
                disableGutters
              >
                <ChatDialog />
              </InsetContainer>
            </Content>
            <InsetFooter ContainerProps={{ disableGutters: true }}>
              <Box display={'flex'} alignItems={'center'} p={1}>
                <ChatBar concise={sidebar.primarySidebar.collapsed} />
              </Box>
            </InsetFooter>
          </>
        )}
      </Root>
    </Fullscreen>
  );
};

export default IMMessages;