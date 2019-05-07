import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Table from './table'
import Local from './local'
import ProgItem from "./progItem"

const primary = '#FBB03B';
const secondary = '#fff';
const tertiary = '#000';

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
        backgroundColor: primary,
      },
      tabsRoot: {
        borderBottom: '2px solid ' + tertiary,
      },
      tabsIndicator: {
        backgroundColor: tertiary,
        height: '100%',
      },
      tabRoot: {
        color: tertiary,
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
          color: secondary,
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
          textColor="inherit"
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
                <Table>
                    <ProgItem 
                        horario='10h - 12h'
                        local='Auditório Manoel Maurício'
                        titulo='Abertura'
                        texto='Gustavo Borges - Mediação Raphael Pinheiro'
                    />
                    <ProgItem 
                        horario='13h - 15h'
                        local='ECO, Sala 105'
                        titulo='Oficina - A importância do silêncio nos quadrinhos'
                        texto='Gustavo Borges'
                    />
                    <ProgItem 
                        horario='15h - 17h'
                        local='Auditório Manoel Maurício'
                        titulo='HQs em sala de aula - Lançamento do projeto "Com Machado nas Mãos"'
                        texto='Eduardo Calvet, Hamilton Kabuna, José Antônio Oliveira, Rapha Pinheiro, Thaís Linhares, Victor Almeida e William Cogo - Mediação Natania Nogueira'
                    />
                    <ProgItem 
                        horario='18h - 20h'
                        local='Auditório Manoel Maurício'
                        titulo='Cartum e posicionamento político'
                        texto='Aroeira e Ribs - Mediação Octavio Aragão'
                    />
                </Table>
                <Local local='ECO UFRJ' rua=' - Campus da Praia Vermelha / Av. Pasteur, 250 - Urca' />
                <iframe title="Local1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1336.9938228395688!2d-43.174743252809705!3d-22.95262258344815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ff614120d07%3A0x15177b8270b12e06!2sSchool+of+Communication+at+UFRJ!5e0!3m2!1sen!2sbr!4v1555387250501!5m2!1sen!2sbr" width="800" height="600" frameBorder="0" style={{border:0, width: '100%',}} allowFullScreen></iframe>
        </TabContainer>
        <TabContainer>
                <Table>
                    <ProgItem 
                        horario='10h - 12h'
                        local='Auditório Manoel Maurício'
                        titulo='Humor gráfico na Argentina'
                        texto='Mara Burkart - Mediação Octavio Aragão'
                    />
                    <ProgItem 
                        horario='13h - 15h'
                        local='ECO, Sala 105'
                        titulo='Oficina - Quadrinhos para educadores'
                        texto='Mig'
                    />
                    <ProgItem 
                        horario='15h - 17h'
                        local='Auditório Manoel Maurício'
                        titulo='Jornalismo em quadrinhos'
                        texto='Cida Calu, Ary Moraes e Aristides Correa Dutra - Mediação Nobu Chinen'
                    />
                    <ProgItem 
                        horario='18h - 20h'
                        local='Auditório Manoel Maurício'
                        titulo='A construção do cartunista'
                        texto='Jaguar, Miguel Paiva e André Dahmer - Mediação Cristina Rego Monteiro'
                    />
                </Table>
                <Local local='ECO UFRJ' rua=' - Campus da Praia Vermelha / Av. Pasteur, 250 - Urca' />
                <iframe title="Local2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1336.9938228395688!2d-43.174743252809705!3d-22.95262258344815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ff614120d07%3A0x15177b8270b12e06!2sSchool+of+Communication+at+UFRJ!5e0!3m2!1sen!2sbr!4v1555387250501!5m2!1sen!2sbr" width="800" height="600" frameborder="0" style={{border:0, width: '100%',}} allowfullscreen></iframe>
        </TabContainer>
        <TabContainer>
                <Table>
                    <ProgItem 
                        horario='10h - 12h'
                        local='Auditório Manoel Maurício'
                        titulo='Quadrinhos e novas mídias na América Latina'
                        texto='Sebastian Gago - Mediação Amaury Fernandes'
                    />
                    <ProgItem 
                        horario='13h - 15h'
                        local='ECO, Sala 105'
                        titulo='Oficina - Worldbuilding em Literatura Fantástica'
                        texto='Luiz Felipe Vasques e Ana Lucia Merege'
                    />
                    <ProgItem 
                        horario='15h - 17h'
                        local='Auditório Manoel Maurício'
                        titulo='Editores de quadrinhos'
                        texto='Guilherme Tolomei (Caligari), Arthur Vecchi (Avec), Raphael Fernandes (Draco) e Júlio Monteiro de Oliveira (Mythos) - Mediação Mário Feijó'
                    />
                    <ProgItem 
                        horario='18h - 20h'
                        local='Auditório Manoel Maurício'
                        titulo='Homenagem a Carlos Patati e João Carpalhau'
                        texto='Cerimônia de entrega do Prêmio LeBlanc 2019'
                    />
                    <ProgItem 
                        horario='18h - 21h'
                        local='Lab de TV e Vídeo / CPM ECO'
                        titulo='Mostra BUG Pocket de Animações em VR'
                        texto=''
                    />
                </Table>
                <Local local='ECO UFRJ' rua=' - Campus da Praia Vermelha / Av. Pasteur, 250 - Urca' />
                <iframe title="Local3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1336.9938228395688!2d-43.174743252809705!3d-22.95262258344815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ff614120d07%3A0x15177b8270b12e06!2sSchool+of+Communication+at+UFRJ!5e0!3m2!1sen!2sbr!4v1555387250501!5m2!1sen!2sbr" width="800" height="600" frameborder="0" style={{border:0, width: '100%',}} allowfullscreen></iframe>
        </TabContainer>
        <TabContainer>
                <Table>
                    <ProgItem 
                        horario='10h - 12h'
                        local='Auditório UVA'
                        titulo='Produção de Animacão no Brasil'
                        texto='Aida Queiroz, Gika Carvalho e Rosana Urbes - Mediação Profa Claudia Bolshaw (PUC-Rio)'
                    />
                    <ProgItem 
                        horario='13h - 15h'
                        local='UVA'
                        titulo='Oficina - O cenário como personagem'
                        texto='Raphael Pinheiro'
                    />
                    <ProgItem 
                        horario='15h - 17h'
                        local='Auditório UVA'
                        titulo='AnimaNovos UVA 2019'
                        texto='Bate-papo com Marcos Ramone - Mediação Prof. Gabriel Cruz (UVA)'
                    />
                    <ProgItem 
                        horario='18h - 20h'
                        local='Auditório UVA'
                        titulo='Combo Estúdio'
                        texto='A trajetória do Combo Estúdio e seus projetos - Mediação Gika Carvalho'
                    />
                </Table>
                <Local local='UVA' rua=' - Campus Tijuca / R. Ibituruna, 108 - Maracanã' />
                <iframe title="Local4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.830870949564!2d-43.22251974240896!3d-22.91182367563941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e57963eedf3%3A0xaf52199fd71ffebb!2sVeiga+de+Almeida+University+-+UVA!5e0!3m2!1sen!2sbr!4v1555387824375!5m2!1sen!2sbr" width="800" height="600" frameborder="0" style={{border:0, width: '100%',}} allowfullscreen></iframe>
        </TabContainer>
      </SwipeableViews>
    </div>
  );
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default FullWidthTabs;