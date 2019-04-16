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

import TabsDemo from '../components/progTabs'

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
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#programacao">Programação</a></li>
                    <li><a href="#participantes">Participantes</a></li>
                    <li><a href="#oficinas">Oficinas</a></li>
                    {/* <li><a href="#noticias">Notícias</a></li> */}
                    <li><a href="#videos">Vídeos</a></li>
                    {/* <li><a href="#blog">Blog</a></li> */}
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </Navbar>
            <Sobre>
                <h2>Semana Internacional de Quadrinhos <strong style={{color: '#fff'}}>2019</strong></h2>
                <p style={{fontSize: '1.2rem'}}>Nascida como um evento internacional de Quadrinhos em 2016, a SIQ é hoje um verdadeiro encontro interdisciplinar de cultura pop aproximando mercado e academia ao promover no ambiente universitário palestras, oficinas, mesas redondas, exposições sobre quadrinhos, animação, cinema e literatura.</p>
                <h3 style={{color: '#fff'}}>07 a 10 de maio <span style={{display: 'inline-flex',width: '5rem', borderBottom: '3px solid #fff', margin: '5px'}}></span></h3>
                <p>07 a 09 de maio | ECO UFRJ - Campus da Praia Vermelha / Av. Pasteur, 250 - Urca <br></br>
                    10 de maio | UVA - Campus Tijuca / R. Ibituruna, 108 - Maracanã</p>
            </Sobre>
            <Programacao>
                <TabsDemo />
            </Programacao>
        </Grid>
    </Layout>
)

