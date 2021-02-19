import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Layout, {Root, getDrawerSidebar, getSidebarContent} from '@mui-treasury/layout';
import RoundIconSidebar from './RoundedIconSideBar';

const DrawerSidebar = getDrawerSidebar(styled);
const SidebarContent = getSidebarContent(styled);

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#fff',
  },
  sidebar: {
    backgroundColor: 'rgb(48, 70, 105)',
    transition: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      height:'0'
    }
  }
}));

const scheme = Layout();

scheme.configureHeader(builder => {
  builder.registerConfig('xs', {
    position: 'sticky',
    clipped: false,
  });
});

scheme.configureEdgeSidebar(builder => {
  builder
    .create('primarySidebar', { anchor: 'left' })
    .registerPersistentConfig('md', {
      width: 84,
      collapsible: false,
      persistentBehavior: {
        header: 'fit',
        _other: 'none'
      }
    });
});

scheme.configureEdgeSidebar(builder => {
  builder
    .create('primarySidebar', { anchor: 'bottom' })
    .registerPersistentConfig('xs', {
      width: '100%',
      height: '0',
      collapsible: true,
      persistentBehavior: {
        header: 'fit',
        _other: 'none'
      }
    });
});

const ControlSidebar = () => {
  const styles = useStyles();
  return (
    <Root
      scheme={scheme}
      initialState={{ sidebar: { primarySidebar: { open: true } } }}
    >
      {({ setOpen }) => (
        <>
          <DrawerSidebar
            sidebarId={'primarySidebar'}
            PaperProps={{ className: styles.sidebar }}
          >
            <SidebarContent>
              <RoundIconSidebar onClickItem={() => setOpen('primarySidebar', true)}/>
            </SidebarContent>
          </DrawerSidebar>
        </>
      )}
    </Root>
  );
};

export default ControlSidebar;