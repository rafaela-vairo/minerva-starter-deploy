import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import Typography from '@material-ui/core/Typography';

import Table from './table'
import Local from './local'
import OficItem from "./oficItem"

const primary = '#FBB03B';

function TabContainer({ children, dir }) {
  return (
    <div dir={dir} style={{ padding: 0 }}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
      },
      tabsRoot: {
        borderBottom: '1px solid #e8e8e8',
      },
      tabsIndicator: {
        backgroundColor: '#111',
        height: '100%',
      },
      tabRoot: {
        flexGrow: 1,
        zIndex: '99',
        textTransform: 'initial',
        minWidth: 72,
        maxWidth: '100%',
        fontWeight: '700',
        marginRight: '0px',
        fontFamily: [
          '"Alegreya Sans"',
          'sans-serif',
        ].join(','),
        '&$tabSelected': {
          color: primary,
          fontWeight: theme.typography.fontWeightHeavy,
        },
      },
      tabSelected: {},
      typography: {
        padding: theme.spacing.unit * 3,
      },
}));

function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab label="terça 07/05" disableRipple classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
          <Tab label="quarta 08/05" disableRipple classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
          <Tab label="quinta 09/05" disableRipple classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
          <Tab label="sexta 10/05" disableRipple classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
        </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
        <h1>A importância do silêncio nos quadrinhos</h1>
        <Table>
            <OficItem
                titulo=''
                por='Ministrada por Gustavo Borges'
                horario='13h - 15h'
                local='ECO UFRJ'
                texto='O autor indicado ao Eisner propõe um exercício de narrativa se utilizando do silêncio nos quadrinhos para contar histórias.'
                link=''
             />
        </Table>
        </TabContainer>
        <TabContainer dir={theme.direction}>
        <h1>Oficina 2</h1>
        <Table></Table>
        </TabContainer>
        <TabContainer dir={theme.direction}>
        <h1>Oficina 3</h1>
        <Table></Table>
        </TabContainer>
        <TabContainer dir={theme.direction}>
        <h1>Oficina 4</h1>
        <Table></Table>
        </TabContainer>
      </SwipeableViews >
    </div>
  );
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default FullWidthTabs;