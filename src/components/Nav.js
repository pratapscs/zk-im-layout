import React, { useState } from "react";
import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import Layout from '@mui-treasury/layout';
import {
  Root,
  getDrawerSidebar,
  getSidebarTrigger,
  getCollapseBtn,
} from "@mui-treasury/layout";
import {
  getDefaultScheme,
  getStandardScheme,
  getFixedScheme,
  getContentBasedScheme,
  getCozyScheme,
  getMuiTreasuryScheme
} from "@mui-treasury/layout/presets";

const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const CollapseBtn = getCollapseBtn(styled);

const presets = {
  createDefaultLayout: getDefaultScheme(),
  createStandardLayout: getStandardScheme(),
  createFixedLayout: getFixedScheme(),
  createContentBasedLayout: getContentBasedScheme(),
  createCozyLayout: getCozyScheme(),
  createMuiTreasuryLayout: getMuiTreasuryScheme()
};

const Nav = () => {
  const scheme = Layout();

  scheme.configureEdgeSidebar(builder => {
    builder
      .create('primarySidebar', { anchor: 'left' })
      .registerPermanentConfig('xs', {
        width: '25%',
        collapsible: true,
        collapsedWidth: '100%',
      });
  });

  const [loading] = useState(false);
  const [preset] = useState("createStandardLayout");

  return loading ?
    '' : (
        <Root scheme={presets[preset]}>
              <Toolbar>
                <SidebarTrigger sidebarId="primarySidebar" />
              </Toolbar>
              <DrawerSidebar sidebarId="primarySidebar">
                <CollapseBtn />
              </DrawerSidebar>
        </Root>
    );
}

export default Nav;
