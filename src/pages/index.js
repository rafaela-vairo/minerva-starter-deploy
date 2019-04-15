import React from 'react'
import Layout from '../components/layout'
import Grid from '../components/grid'
import Hero from '../components/hero'
import logo from '../images/logoSIQ.svg'
import SEO from '../components/seo'
import Navbar from "../components/nav"

import Popup from 'reactjs-popup';
import BurgerIcon from '../components/BurguerIcon'
import Menu from '../components/BurguerMenu'

import Sobre from '../components/sobre'
import Programacao from '../components/programacao'
import ProgItem from "../components/progItem"

const contentStyle = {
    background: 'rgba(0,0,0,0.0)',
    width: '80%',
    border: 'none',
};

export default ({ props }) => (
    <Layout>
        <SEO title='SIQ 2019' keywords={[`SIQ`, `UFRJ`, `Quadrinhos`]} />
        <Popup
            modal
            overlayStyle={{ background: 'rgba(0,0,0,0.96' }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} />}
        >
            {close => <Menu close={close} />}
        </Popup>
        <Grid>
            <Hero>
                <img src={logo} alt='Logo SIQ' />
            </Hero>
            <Navbar>
                <a href="#home">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#programacao">Programação</a>
                <a href="#participantes">Participantes</a>
                <a href="#oficinas">Oficinas</a>
                <a href="#noticias">Notícias</a>
                <a href="#videos">Vídeos</a>
                <a href="#blog">Blog</a>
                <a href="#contato">Contato</a>
            </Navbar>
            <Sobre>
                <h2>Semana Internacional de Quadrinhos <strong style={{color: '#fff'}}>2019</strong></h2>
                <p style={{fontSize: '1.2rem'}}>Nascida como um evento internacional de Quadrinhos em 2016, a SIQ é hoje um verdadeiro encontro interdisciplinar de cultura pop aproximando mercado e academia ao promover no ambiente universitário palestras, oficinas, mesas redondas, exposições sobre quadrinhos, animação, cinema e literatura.</p>
                <h3 style={{color: '#fff'}}>07 a 10 de maio <span style={{display: 'inline-flex',width: '5rem', borderBottom: '3px solid #fff', margin: '5px'}}></span></h3>
                <p>07 a 09 de maio | ECO UFRJ - Campus da Praia Vermelha / Av. Pasteur, 250 - Urca <br></br>
                    10 de maio | UVA - Campus Tijuca / R. Ibituruna, 108 - Maracanã</p>
            </Sobre>
            <Programacao tituloP="Programação">
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
                    titulo='AROEIRA: CARTUNE POSICIONAMENTO POLÍTICO'
                    texto=''
                />
            </Programacao>
        </Grid>
    </Layout>
)

