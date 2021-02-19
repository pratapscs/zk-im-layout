import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Root from 'components/Root';
import Content from 'components/Content';
import ControlSidebar from 'components/ControlSidebar';
import IMMessages from 'components/IMMessages';
import Conference from 'components/Conference';
import ContentEx from './mock/ContentEx';
import SerratedTabs from './mock/SerratedTabs';

storiesOf('Examples', module)
  .addDecorator(StoryRouter())

  .add('React Router', () => {
    const [index, setIndex] = useState(0);
    return (
      <Root>
        <Content>
          
          <AppBar
            position={'static'}
            elevation={0}
            style={{ backgroundColor: '#E6E8EB' }}
          >
            <Toolbar
              // you need to set override hidden in toolbar
              style={{ overflow: 'hidden', minHeight: 80 }}
            >
              <SerratedTabs
                style={{ alignSelf: 'flex-end' }}
                tabs={[
                  { label: 'Home', to: '/' },
                  { label: 'TopContainer', to: '/navbar' },
                  { label: 'ChatComponent', to: '/chat' },
                  { label: 'MeetingComponent', to: '/meeting' },
                  { label: 'ContactsComponent', to: '/contacts' },
                ]}
                tabStyle={{
                  bgColor: '#4486a3',
                  selectedBgColor: '#ffffff',
                  minWidth: { md: 144 },
                }}
                tabProps={{
                  disableRipple: true,
                  component: Link,
                }}
                value={index}
                onChange={(e, i) => setIndex(i)}
              />
            </Toolbar>
          </AppBar>

          <Route path={'/'} exact render={() => <ContentEx />} />
          <Route path={'/navbar'} exact render={() => <ControlSidebar />} />
          <Route path={'/chat'} exact render={() => <IMMessages />} />
          <Route path={'/meeting'} exact render={() => <Conference />} />
          <Route path={'/contacts'} exact render={() => <ContentEx />} />
          
         
        </Content>

      </Root>
    );
  })
