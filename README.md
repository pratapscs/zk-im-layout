# ZK-IM-Layout [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/pratapscs/zk-im-layout/pulls)

A set of components that allows you to build dynamic and responsive layout based on Material-UI-Components

## Installation

```bash
// npm
npm install zk-im-layout

```

## Demo
see demo here [Storybook Demo](https://pratapscs.github.io/zk-im-layout/?path=/story/welcome--introduction)


## Usage

```jsx
// this example use icon from material-ui/icons, you can use your own!
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MenuRounded from '@material-ui/icons/MenuRounded';

import {
 IMMessages
} from 'zk-im-layout';

const baseTheme = createMuiTheme(); // or use your own theme;
const config = presets.createStandardLayout();

const App = () => (
  <ThemeProvider theme={baseTheme}>
   <Root config={config}>
     <Header
       renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
     >
       header
     </Header>
     <Nav
       renderIcon={collapsed =>
         collapsed ? <ChevronRight /> : <ChevronLeft />
       }
     >
       nav
     </Nav>
     <Content>
       content
     </Content>
     <Footer>
       footer
     </Footer>
   </Root>
  </ThemeProvider>
)

export default App;
```
## Custom Styles
Mostly, you will custom `Header` & `Nav`. This is an example for `Header`

[Explanation is in storybook](https://pratapscs.github.io/zk-im-layout/?path=/story/custom-styles--header)

```js
import { makeStyles } from '@material-ui/styles';

const useHeaderStyles = makeStyles(({ palette, spacing }) => ({
  header: {
    backgroundColor: palette.secondary.main,
  },
  menuBtn: {
    padding: spacing(2.5),
    borderRadius: 0,
  },
  icon: {
    color: palette.common.white,
  },
  toolbar: {
    padding: spacing(0, 1),
  },
}));

function App() {
  const {
    icon: iconCss,
    toolbar: toolbarCss,
    header: headerCss,
    menuBtn: menuBtnCss,
  } = useHeaderStyles();
  return (
    <Header
      classes={{ root: headerCss }}
      renderMenuIcon={open =>
        open ? (
          <ChevronLeft className={iconCss} />
        ) : (
          <MenuRounded classes={{ root: iconCss }} />
        )
      }
      menuButtonProps={{ className: menuBtnCss }}
      toolbarProps={{ className: toolbarCss }}
    />
  );
}
```
  
## How it works
- They are basically material-ui components that are combined to make things easier.
`AppBar`, `Toolbar`, `Drawer`

- use `@material-ui/styles` to style components

- use react-hooks

## License
[MIT](https://choosealicense.com/licenses/mit/)
