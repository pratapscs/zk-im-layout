import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Layout, { Root, getHeader, getFullscreen } from '@mui-treasury/layout';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';

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
    },
    startButton:{
        backgroundColor: '#35c573',
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

const StartMeeting = () => {
    const styles = useStyles();
    const scheme = Layout();

    scheme.configureHeader(builder => {
        builder.create('appHeader').registerConfig('xs', {
            position: 'relative',
            initialHeight: 60,
        });
    });

    return (
        <Fullscreen>
            <Root>
                {() => (
                    <>
                        <CssBaseline />
                        <Header className={styles.header}>
                            <div style={{ width: '100%' }}>
                                <Box display="flex">
                                    <Box p={1}>
                                        <Button>Cancle</Button>
                                    </Box>

                                    <Box display="flex" p={1} justifyContent="center" >
                                        <Box p={1} className={styles.meetingHeader}>
                                            Start Meeting
                                        </Box>
                                    </Box>
                                </Box>
                            </div>
                        </Header>
                        <br /><br /><br />

                        <Box display="flex" p={1} bgcolor="background.paper">
                            <Box p={1} flexGrow={1} bgcolor="white.300">
                                <b>VideoOn</b>
                            </Box>
                            <Box p={1} bgcolor="white.300">
                                Start
                            </Box>
                        </Box>
                        <br />
                        <Box display="flex" p={1} bgcolor="background.paper">
                            <Box p={1} flexGrow={1} bgcolor="white.300">
                                <b>User Personal Meeting ID(PMI)</b>
                            </Box>
                            <Box p={1} bgcolor="white.300">
                                Start
                            </Box>
                        </Box>
                        <br />
                        <div style={{ width: '100%' }}>
                            <Box display="flex" p={1} justifyContent="center" >
                                <Box p={1}>
                                    <Button className={styles.startButton}>
                                        <b>Start Meeting</b>
                                    </Button>
                                </Box>
                            </Box>
                        </div>

                    </>
                )}
            </Root>
        </Fullscreen>
    );
};

export default StartMeeting;