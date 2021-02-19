import React from 'react';
import { storiesOf } from '@storybook/react';
import Root from 'components/Root';
import ControlSidebar from 'components/ControlSidebar';
import IMMessages from 'components/IMMessages';
import Conference from 'components/Conference';
import {
  createStandardLayout,
  createFixedLayout,
  createContentBasedLayout,
  createCozyLayout,
  createMuiTreasuryLayout,
} from 'utils/presets';
import { BrowserRouter, Route } from 'react-router-dom';

storiesOf('Presets', module)

  .add('Default', () => (
    <BrowserRouter basename="/">
      <Route path="/" component={ControlSidebar} />
    </BrowserRouter>
  ))

  .add('Standard', () => (
    <BrowserRouter basename="/">
      <Route path="/" component={ControlSidebar} />
      <Route path="/chat" component={IMMessages} />
      <Route path="/video" component={Conference} />
    </BrowserRouter>
  ))

  .add('Fixed', () => (
    <BrowserRouter basename="/">
      <Route path="/" component={ControlSidebar} />
      <Route path="/chat" component={IMMessages} />
      <Route path="/video" component={Conference} />
    </BrowserRouter>
  ))

  .add('IM Service', () => (
    <BrowserRouter basename="/">
      <Route path="/" component={ControlSidebar} />
      <Route path="/chat" component={IMMessages} />
      <Route path="/video" component={Conference} />
    </BrowserRouter>
  ));
