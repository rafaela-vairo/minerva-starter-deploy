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
          textColor="inherit"
          variant="scrollable"
          scrollButtons="off"
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
                        titulo='Abertura'
                        texto='Gustavo Borges - Mediação Raphael Pinheiro'
                    />
                    <ProgItem 
                        horario='13h — 15h'
                        local='Auditório 1'
                        titulo='Oficina de criação de mundos na Ficção Científica'
                        texto='Luiz Felipe Vasques e Ana Lúcia Merege'
                    />
                    <ProgItem 
                        horario='15h — 17h'
                        local='Auditório 1'
                        titulo='HQs em sala de aula, apresentando o projeto Machado'
                        texto='Alunos da ECO - Mediação Natania Nogueira'
                    />
                    <ProgItem 
                        horario='18h — 20h'
                        local='Auditório 1'
                        titulo='Aroeira: Cartum e posicionamento político'
                        texto=''
                    />
                </Table>
                <Local local='ECO UFRJ' rua=' - Campus da Praia Vermelha / Av. Pasteur, 250 - Urca' />
                <iframe title="Local 2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1336.9938228395688!2d-43.174743252809705!3d-22.95262258344815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ff614120d07%3A0x15177b8270b12e06!2sSchool+of+Communication+at+UFRJ!5e0!3m2!1sen!2sbr!4v1555387250501!5m2!1sen!2sbr" width="800" height="600" frameBorder="0" style={{border:0, width: '100%',}} allowFullScreen></iframe>
        </TabContainer>}
        {value === 1 && <TabContainer>
                <Table>
                    <ProgItem 
                        horario='10h — 12h'
                        local='Local 1'
                        titulo='Humor gráfico na Argentina'
                        texto='Mara Burkart - Mediação Octavio Aragão'
                    />
                    <ProgItem 
                        horario='13h — 15h'
                        local='Local 2'
                        titulo='Oficina de Fundamentos da Aquarela'
                        texto='Letícia Pusti'
                    />
                    <ProgItem 
                        horario='15h — 17h'
                        local='Local 1'
                        titulo='Jornalismo em quadrinhos'
                        texto='Cida Calú, Ary Moraes, Aristides Correa Dutra - Mediação Nobu Chinen'
                    />
                    <ProgItem 
                        horario='18h — 20h'
                        local='Local 2'
                        titulo='Construção do Cartunista'
                        texto='Jaguar e Miguel Paiva - Mediação Cristina Rego Monteiro'
                    />
                </Table>
                <Local local='ECO UFRJ' rua=' - Campus da Praia Vermelha / Av. Pasteur, 250 - Urca' />
                <iframe title="Local 2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1336.9938228395688!2d-43.174743252809705!3d-22.95262258344815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ff614120d07%3A0x15177b8270b12e06!2sSchool+of+Communication+at+UFRJ!5e0!3m2!1sen!2sbr!4v1555387250501!5m2!1sen!2sbr" width="800" height="600" frameborder="0" style={{border:0, width: '100%',}} allowfullscreen></iframe>
        </TabContainer>}
        {value === 2 && <TabContainer>
                <Table>
                    <ProgItem 
                        horario='10h — 12h'
                        local='Local 1'
                        titulo='Quadrinhos e novas mídias na América Latina'
                        texto='Sebastian Gago - Mediação Amaury Fernandes'
                    />
                    <ProgItem 
                        horario='13h — 15h'
                        local='Local 2'
                        titulo='O Papel do Editor de Quadrinhos'
                        texto='Guilherme Tolomei (Ed. Caligari) e Julio Monteiro de Oliveira (Ed. Mythos) - Mediação Mario Feijó'
                    />
                    <ProgItem 
                        horario='15h — 17h'
                        local='Local 1'
                        titulo='Entrega do Prêmio LeBlanc e Homenagens a Carlos Patati e João Carpalhau'
                        texto=''
                    />
                    <ProgItem 
                        horario='18h — 20h'
                        local='Local 2'
                        titulo='CRAS HENDRERIT TORTOR VITAE ULLAMCORPER'
                        texto='Duis lorem est, mattis dignissim lacus vel'
                    />
                </Table>
                <Local local='ECO UFRJ' rua=' - Campus da Praia Vermelha / Av. Pasteur, 250 - Urca' />
                <iframe title="Local 2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1336.9938228395688!2d-43.174743252809705!3d-22.95262258344815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ff614120d07%3A0x15177b8270b12e06!2sSchool+of+Communication+at+UFRJ!5e0!3m2!1sen!2sbr!4v1555387250501!5m2!1sen!2sbr" width="800" height="600" frameborder="0" style={{border:0, width: '100%',}} allowfullscreen></iframe>
        </TabContainer>}
        {value === 3 && <TabContainer>
                <Table>
                    <ProgItem 
                        horario='10h — 12h'
                        local='Local 1'
                        titulo='Combo Studio'
                        texto=''
                    />
                    <ProgItem 
                        horario='13h — 15h'
                        local='Local 2'
                        titulo='Oficina de Princípios da Animação'
                        texto='Pedro Barreto'
                    />
                    <ProgItem 
                        horario='15h — 17h'
                        local='Local 1'
                        titulo='Produção de Animação'
                        texto='Alunos da UVA'
                    />
                    <ProgItem 
                        horario='18h — 20h'
                        local='Local 2'
                        titulo='Animando com Aída Queiroz'
                        texto='Aída Queiroz e Patrícia Alves - Mediação Gisele Carvalho'
                    />
                </Table>
                <Local local='UVA' rua=' - Campus Tijuca / R. Ibituruna, 108 - Maracanã' />
                <iframe title="Local 2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.830870949564!2d-43.22251974240896!3d-22.91182367563941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e57963eedf3%3A0xaf52199fd71ffebb!2sVeiga+de+Almeida+University+-+UVA!5e0!3m2!1sen!2sbr!4v1555387824375!5m2!1sen!2sbr" width="800" height="600" frameborder="0" style={{border:0, width: '100%',}} allowfullscreen></iframe>
        </TabContainer>}
      </div>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);