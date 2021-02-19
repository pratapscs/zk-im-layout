import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Layout, { Root, getHeader, getFullscreen } from '@mui-treasury/layout';
import Box from "@material-ui/core/Box";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { purple } from "@material-ui/core/colors";

const Header = getHeader(styled);
const Fullscreen = getFullscreen(styled);
const useStyles = makeStyles(() => ({
    zoomButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        left: '50%',
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: "#35c573"
    },
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

const MeetingLogin = () => {
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
                <CssBaseline />

                <Header className={styles.header}>
                    <Box display="flex" >
                        <Box p={1}>
                            <Avatar src={'https://i.pravatar.cc/300?img=13'} />
                        </Box>
                        <Box p={1} className={styles.meetingHeader}> Meeting </Box>
                    </Box>
                </Header>

                <Button variant="contained" className={styles.zoomButton}>
                    Zoom Login
                </Button>
              
            </Root>
        </Fullscreen>
    );
};

export default MeetingLogin;