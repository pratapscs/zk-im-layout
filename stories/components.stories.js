import React from 'react';
import { storiesOf } from '@storybook/react';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MenuRounded from '@material-ui/icons/MenuRounded';
import Root from 'components/Root';
import Header from 'components/Header';
import Nav from 'components/Nav';
import Content from 'components/Content';
import ControlSidebar from 'components/ControlSidebar';
import Footer from 'components/Footer';
import ChatBar from 'components/ChatBar';
import ChatDialog from 'components/ChatDialog';
import ChatList from 'components/ChatList';
import ChatListItem from 'components/ChatListItem';
import ChatMsg from 'components/ChatMsg';
import ChatSettings from 'components/ChatSettings';
import Conference from 'components/Conference';
import ConferenceHead from 'components/ConferenceHead';
import ConferenceLists from 'components/ConferenceLists';
import ConferenceTabs from 'components/ConferenceTabs';
import ConversationHead from 'components/ConversationHead';
import IMMessages from 'components/IMMessages';
import MessengerSearch from 'components/MessengerSearch';
import RoundedIconSideBar from 'components/RoundedIconSideBar';
import SideBarContent from 'components/SideBarContent';
//import SideBarTrigger from 'components/SideBarTrigger';
import TextLogo from 'components/TextLogo';
import WhiteIconItem from 'components/WhiteIconItem';


// MOCK
import NavContentEx from './mock/NavContentEx';
import NavHeaderEx from './mock/NavHeaderEx';
import HeaderEx from './mock/HeaderEx';
import ContentEx from './mock/ContentEx';
import FooterEx from './mock/FooterEx';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Components', module)

  .add('ChatBar', () => (
    <ChatBar></ChatBar>
  ))

  .add('ChatDialog', () => (
    <ChatDialog></ChatDialog>
  ))

  .add('ChatList', () => (
    <ChatList></ChatList>
  ))

  .add('ChatListItem', () => (
    <ChatListItem></ChatListItem>
  ))

  .add('ChatMsg', () => (
    <ChatMsg></ChatMsg>
  ))

  .add('ChatSettings', () => (
    <ChatSettings></ChatSettings>
  ))

  .add('Conference', () => (
    <Conference></Conference>
  ))

  .add('ConferenceHead', () => (
    <ConferenceHead></ConferenceHead>
  ))

  .add('ConferenceLists', () => (
    <ConferenceLists></ConferenceLists>
  ))

  .add('ConferenceTabs', () => (
    <ConferenceTabs></ConferenceTabs>
  ))

  .add('Content', () => (
    <Root>
      <Content>
        <ContentEx />
      </Content>
    </Root>
  ))

  .add('ControlSidebar', () => (
    <ControlSidebar></ControlSidebar>
  ))

  .add('ConversationHead', () => (
    <ConversationHead></ConversationHead>
  ))

  .add('Footer', () => (
    <Root>
      <Footer>
        <FooterEx />
      </Footer>
    </Root>
  ))

  .add('Header', () => (
    <Root>
      <Header
        renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
      />
    </Root>
  ))

  .add('Header (mock children)', () => (
    <Root>
      <Header
        renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
      >
        {({ screen, collapsed }) => (
          <HeaderEx screen={screen} collapsed={collapsed} />
        )}
      </Header>
    </Root>
  ))

  .add('IMMessages', () => (
    <IMMessages></IMMessages>
  ))

  .add('MessengerSearch', () => (
    <MessengerSearch></MessengerSearch>
  ))

  .add('Nav', () => (
    <Root>
      <Header
        renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
      />
      <Nav
        renderIcon={collapsed =>
          collapsed ? <ChevronRight /> : <ChevronLeft />
        }
      />
    </Root>
  ))

  .add('Nav (mock children)', () => (
    <Root>
      <Header
        renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
      />
      <Nav
        renderIcon={collapsed =>
          collapsed ? <ChevronRight /> : <ChevronLeft />
        }
        header={({ collapsed }) => <NavHeaderEx collapsed={collapsed} />}
      >
        <NavContentEx />
      </Nav>
    </Root>
  ))

  .add('Root', () => (
    <Root>
      <code>Root</code> is just a Provider, it does not return any DOM on the
      screen.
    </Root>
  ))

  .add('RoundedIconSideBar', () => (
    <RoundedIconSideBar></RoundedIconSideBar>
  ))

  .add('SideBarContent', () => (
    <SideBarContent></SideBarContent>
  ))
 
  // .add('SideBarTrigger', () => (
  //   <SideBarTrigger></SideBarTrigger>
  // ))

  .add('TextLogo', () => (
    <TextLogo></TextLogo>
  ))

  .add('WhiteIconItem', () => (
    <WhiteIconItem></WhiteIconItem>
  ));
