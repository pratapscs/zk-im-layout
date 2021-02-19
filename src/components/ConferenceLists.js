import React from 'react';
import cx from 'clsx';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { Column, Row, Item } from '@mui-treasury/components/flex';


const usePersonStyles = makeStyles(() => ({
    text: {
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    name: {
        fontWeight: 600,
        fontSize: '1rem',
        color: '#122740',
      },
    caption: {
        fontSize: '0.875rem',
        color: '#758392',
        marginTop: -4,
      },
      time: {
        fontSize: '0.875rem',
        color: '#758392'
      },
    btn: {
      borderRadius: 20,
      padding: '0.125rem 0.75rem',
      borderColor: '#33c176',
      fontSize: '0.75rem',
      color: '#33c176',
      boxShadow: '1px 0.5px'
    },
  }));
  
  const PersonItem = ({ time, name, friendCount }) => {
    const styles = usePersonStyles();
    return (
      <Row gap={2} p={2.5}>
        <Item>
        <div className={cx(styles.time, styles.text)}>{time}</div>
        </Item>
        <Row wrap grow gap={0.5} minWidth={0}>
          <Item grow minWidth={0}>
            <div className={cx(styles.name, styles.text)}>{name}</div>
            <div className={cx(styles.caption, styles.text)}>
                Meeting ID : {friendCount} 
          </div>
          </Item>
          <Item position={'middle'}>
            <Button className={styles.btn} variant={'outlined'}>
                Start
            </Button>
          </Item>
        </Row>
      </Row>
    );
  };

const useStyles = makeStyles(() => ({
    card: {
      width: '95%',
      borderRadius: 16,
      position: 'absolute',
      boxShadow: '0 8px 16px 0 #BDC9D7',
      overflow: 'hidden',
    },
    header: {
      fontFamily: 'Barlow, san-serif',
      backgroundColor: '#fff',
    },
    headline: {
      color: '#122740',
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    link: {
      color: '#2281bb',
      padding: '0 0.25rem',
      fontSize: '0.875rem',
    },
    actions: {
      color: '#BDC9D7'
    },
    divider: {
      backgroundColor: '#d9e2ee',
      margin: '0 20px',
    }
  }));


const ConferenceLists = () => {
  
    const styles = useStyles();
    return (
      <>
        <Column p={0} gap={0} className={styles.card} >
          <PersonItem name={'Zoom Meeting1'} friendCount={94865878240} time={16} />
          <Divider variant={'middle'} className={styles.divider} />
          <PersonItem name={'Zoom Meeting2'} friendCount={94865878241} time={17}/>
          <Divider variant={'middle'} className={styles.divider} />
          <PersonItem name={'Zoom Meeting3'} friendCount={94865878242} time={18}/>
          <Divider variant={'middle'} className={styles.divider} />
          <PersonItem name={'Zoom Meeting3'} friendCount={94865878242} time={18}/>
          <Divider variant={'middle'} className={styles.divider} />
          <PersonItem name={'Zoom Meeting3'} friendCount={94865878242} time={18}/>
          <Divider variant={'middle'} className={styles.divider} />
          <PersonItem name={'Zoom Meeting3'} friendCount={94865878242} time={18}/>
          <Divider variant={'middle'} className={styles.divider} />
          <PersonItem name={'Zoom Meeting3'} friendCount={94865878242} time={18}/>
          <Divider variant={'middle'} className={styles.divider} />
          <PersonItem name={'Zoom Meeting3'} friendCount={94865878242} time={18}/>
          <Divider variant={'middle'} className={styles.divider} />
          <PersonItem name={'Zoom Meeting3'} friendCount={94865878242} time={18}/>
          <Divider variant={'middle'} className={styles.divider} />
          <PersonItem name={'Zoom Meeting3'} friendCount={94865878242} time={18}/>
          <Divider variant={'middle'} className={styles.divider} />
          <PersonItem name={'Zoom Meeting3'} friendCount={94865878242} time={18}/>
          <Divider variant={'middle'} className={styles.divider} />
          <PersonItem name={'Zoom Meeting3'} friendCount={94865878242} time={18}/>
          <Divider variant={'middle'} className={styles.divider} />
          <PersonItem name={'Zoom Meeting3'} friendCount={94865878242} time={18}/>
          <Divider variant={'middle'} className={styles.divider} />
          <PersonItem name={'Zoom Meeting3'} friendCount={94865878242} time={18}/>
          <Divider variant={'middle'} className={styles.divider} />
          <PersonItem name={'Zoom Meeting3'} friendCount={94865878242} time={18}/>
        </Column>
      </>
    );
};

export default ConferenceLists;
