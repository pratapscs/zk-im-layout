import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

storiesOf('Welcome', module)

  .add('Introduction', () => (
    <Box maxWidth={700} p={2} mx={'auto'}>
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
      <button onClick={linkTo('Welcome', 'Features')}>Features in v0.1.0</button>
      <br />
      <br />
    </Box>
  ))

  .add('Features', () => (
    <Box maxWidth={700} p={2} mx={'auto'}>
      <Typography variant={'h4'} gutterBottom>
        Built-in Features
      </Typography>
      <Typography gutterBottom>
        with these built-in features, you don't have to do any tedious works to
        make it work! hooks is used internally. Moreover, if you don't like
        these build-in features, you can turn it off by pass some config to{' '}
        <code>TopContainer</code> component
      </Typography>
      <br />
      <Typography variant={'h6'} gutterBottom>
        <b>1. IM Users Management</b>
      </Typography>
      <Typography gutterBottom>
        <ul>
          <li>
            When register user through IM service api, register on auth service, also create user on IM provider (zoom).
          </li>
          <li>
            When login through IM service api, login auth service, also login IM provider (zoom).
          </li>
          <li>
            When logout through IM service api, logout auth service, also logout IM provider (zoom).
          </li>
          <li>
            Admin can batch import the users of the company from auth service to IM provider (zoom).
          </li>
        </ul>
      </Typography>
      <br />
      <Typography variant={'h6'} gutterBottom>
        <b>2. Contacts management</b>
      </Typography>
      <Typography gutterBottom>
        <ul>
          <li>
            DB to maintain the IM contacts list of each user.
          </li>
          <li>
            Api to sync the contact list with IM provider (zoom)
          </li>
        </ul>
      </Typography>
      <br />
      <Typography variant={'h6'} gutterBottom>
        <b>3. Message</b>
      </Typography>
      <Typography gutterBottom>
        <ul>
          <li>
            Api Send, receive, list messages in IM provider’s (zoom) chat and channels.
          </li>
          <li>
            Api to mange (create/list/update/delete) meeting in IM provider’s (zoom)
          </li>
        </ul>
      </Typography>
      <br />
      <Typography variant={'h6'} gutterBottom>
        <b>4. IM application framework (SDK)</b>
      </Typography>
      <Typography gutterBottom>
        <ul>
          <li>
            js lib which can construct the application UI framework.
          </li>
          <li>
            the js lib will call minerva iot platform service
          </li>
        </ul>
      </Typography>
      <br />
      <Divider />
      <br />
      <Typography variant={'h6'} gutterBottom>
        <b>Excited?</b>
      </Typography>
      <button onClick={linkTo('Welcome', 'Get started')}>Read How to</button>
    </Box>
  ))

  .add('Get started', () => (
    <Box maxWidth={960} p={2} mx={'auto'}>
      <Box px={1}>
        <Typography variant={'h6'} gutterBottom>
          <b>1. Easiest Way</b>
        </Typography>
        <Typography variant={'subtitle1'} gutterBottom>
          <b>
            <Link
              target={'_blank'}
              rel="noopener"
              href={
                'https://material.io/design/components/navigation-drawer.html#'
              }
              color={'secondary'}
            >
              Open this sandbox
            </Link>
          </b>{' '}
          to see the code. and then{' '}
          <button onClick={linkTo('Welcome', 'Configuration')}>
            How to config
          </button>
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography variant={'h6'} gutterBottom>
          <b>2. Manual Way</b>
        </Typography>
        <Typography gutterBottom>
          <b>create-react-app</b> is the fastest way to test and start building
          react app.
        </Typography>
      </Box>

      <br />
      <Typography gutterBottom>
        <ul>
          <li>
            create react app to folder im-service : <b>npx create-react-app im-service</b>
          </li>
          <li>
            install libs : <b>npm i zk-im-layout</b>
          </li>
          <li>
            run the project : <b>npm start</b>
          </li>
        </ul>
      </Typography>
      <br />

      <Box px={1}>
        <Typography gutterBottom>
          <b>Next Step</b>, Let's customize your layout's behavior by adjusting
          config
        </Typography>
        <button onClick={linkTo('Welcome', 'Configuration')}>See config</button>
      </Box>
      <br />
      <br />
      <br />
    </Box>
  ))

  .add('Configuration', () => (
    <Box>
      
    </Box>
  ));



