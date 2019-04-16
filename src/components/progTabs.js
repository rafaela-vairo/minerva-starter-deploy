import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Table from './table'
import Local from './local'
import ProgItem from "./progItem"

const primary = '#FBB03B';

function TabContainer(props) {
  return (
    <div>{props.children}</div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
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
    '&:hover': {
      color: primary,
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#fff',
      fontWeight: theme.typography.fontWeightHeavy,
    },
    '&:focus': {
      color: primary,
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="#000"
          variant="scrollable"
          scrollButtons="off"
          centered
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          <Tab label="07/05 : 3ª feira" disableRipple classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
          <Tab label="08/05 : 4ª feira" disableRipple classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
          <Tab label="09/05 : 5ª feira" disableRipple classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
          <Tab label="10/05 : 6ª feira" disableRipple classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
        </Tabs>
        {value === 0 && <TabContainer>
                <Table>
                    <ProgItem 
                        horario='10h — 12h'
                        local='Auditório 1'
                        titulo='ABERTURA'
                        texto='Gustavo Borges - Mediação Raphael Pinheiro'
                    />
                    <ProgItem 
                        horario='13h — 15h'
                        local='Auditório 1'
                        titulo='OFICINA DE CRIAÇÃO DE MUNDOS NA FICÇÃO CIENTÍFICA'
                        texto='Com Luiz Felipe Vasques e Ana Lúcia Merege'
                    />
                    <ProgItem 
                        horario='15h — 17h'
                        local='Auditório 1'
                        titulo='HQ EM SALA DE AULA, APRESENTANDO O PROJETO MACHADO'
                        texto='Alunos da ECO - Mediação Natania Nogueira'
                    />
                    <ProgItem 
                        horario='18h — 20h'
                        local='Auditório 1'
                        titulo='AROEIRA: CARTUN E POSICIONAMENTO POLÍTICO'
                        texto=''
                    />
                </Table>
                <Local local='ECO UFRJ' rua=' - Campus da Praia Vermelha / Av. Pasteur, 250 - Urca' />
        </TabContainer>}
        {value === 1 && <TabContainer>
                <Table>
                    <ProgItem 
                        horario='11h — 12h'
                        local='Auditório 1'
                        titulo='LOREM IPSUM DOLOR SIT AMET'
                        texto='Sed a commodo neque. Fusce imperdiet maximus.'
                    />
                    <ProgItem 
                        horario='13h — 16h'
                        local='Auditório 2'
                        titulo='PELLENTESQUE EGET ODIO EU ELIT PHARETTA'
                        texto='Donec eget ipsum nec urna elementum pretium'
                    />
                    <ProgItem 
                        horario='16h — 18h'
                        local='Auditório 1'
                        titulo='CURABITUR FRINGILLA METUS UT IPSUM MOLLIS'
                        texto='Duis in tempus orci Curabitur mauris pharetra luctus'
                    />
                    <ProgItem 
                        horario='18h — 19h'
                        local='Auditório 2'
                        titulo='CRAS HENDRERIT TORTOR VITAE ULLAMCORPER'
                        texto='Duis lorem est, mattis dignissim lacus vel'
                    />
                </Table>
                <Local local='ECO UFRJ' rua=' - Campus da Praia Vermelha / Av. Pasteur, 250 - Urca' />
        </TabContainer>}
        {value === 2 && <TabContainer>
                <Table>
                    <ProgItem 
                        horario='10h — 12h'
                        local='Auditório 1'
                        titulo='ABERTURA'
                        texto='Gustavo Borges - Mediação Raphael Pinheiro'
                    />
                    <ProgItem 
                        horario='13h — 15h'
                        local='Auditório 1'
                        titulo='OFICINA DE CRIAÇÃO DE MUNDOS NA FICÇÃO CIENTÍFICA'
                        texto='Com Luiz Felipe Vasques e Ana Lúcia Merege'
                    />
                    <ProgItem 
                        horario='15h — 17h'
                        local='Auditório 1'
                        titulo='HQ EM SALA DE AULA, APRESENTANDO O PROJETO MACHADO'
                        texto='Alunos da ECO - Mediação Natania Nogueira'
                    />
                    <ProgItem 
                        horario='18h — 20h'
                        local='Auditório 1'
                        titulo='AROEIRA: CARTUN E POSICIONAMENTO POLÍTICO'
                        texto=''
                    />
                </Table>
                <Local local='ECO UFRJ' rua=' - Campus da Praia Vermelha / Av. Pasteur, 250 - Urca' />
        </TabContainer>}
        {value === 3 && <TabContainer>
                <Table>
                    <ProgItem 
                        horario='10h — 12h'
                        local='Auditório 1'
                        titulo='ABERTURA'
                        texto='Gustavo Borges - Mediação Raphael Pinheiro'
                    />
                    <ProgItem 
                        horario='13h — 15h'
                        local='Auditório 1'
                        titulo='OFICINA DE CRIAÇÃO DE MUNDOS NA FICÇÃO CIENTÍFICA'
                        texto='Com Luiz Felipe Vasques e Ana Lúcia Merege'
                    />
                    <ProgItem 
                        horario='15h — 17h'
                        local='Auditório 1'
                        titulo='HQ EM SALA DE AULA, APRESENTANDO O PROJETO MACHADO'
                        texto='Alunos da ECO - Mediação Natania Nogueira'
                    />
                    <ProgItem 
                        horario='18h — 20h'
                        local='Auditório 1'
                        titulo='AROEIRA: CARTUN E POSICIONAMENTO POLÍTICO'
                        texto=''
                    />
                </Table>
                <Local local='ECO UFRJ' rua=' - Campus da Praia Vermelha / Av. Pasteur, 250 - Urca' />
        </TabContainer>}
      </div>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);