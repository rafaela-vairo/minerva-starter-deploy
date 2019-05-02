import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import logo from '../images/logoSIQ.svg'
import Navbar from "../components/nav"
import Popup from 'reactjs-popup';
import BurgerIcon from '../components/BurguerIcon'
import Menu from '../components/BurguerMenu'
import Grid from '../components/grid'
import Hero from '../components/hero'
import Sobre from '../components/sobre'
import Programacao from '../components/programacao'
import Oficinas from '../components/oficinas'
import TabsPart from '../components/tabs'

import Contato from '../components/contato'
import Apoio from '../components/apoio'
import Slider from '../components/slider'

import Participantes from '../components/participantes'

const contentStyle = {
    background: 'rgba(0,0,0,0.0)',
    width: '80%',
    border: 'none',
};
export default ({ props, data }) => (
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
                    {/*<li><a href="#videos">Vídeos</a></li> */}
                    {/* <li><a href="#blog">Blog</a></li> */}
                    <li><a href="#contato">Contato</a></li>
                    <li><a href="#realiza">Realização</a></li>
                </ul>
            </Navbar>
            <Sobre>
                <h2>Semana Internacional de Quadrinhos <strong style={{color: '#fff'}}>2019</strong></h2>
                <p style={{fontSize: '1.2rem'}}>{data.site.siteMetadata.description}</p>
                <h3 style={{color: '#fff'}}>07 a 10 de maio <span style={{display: 'inline-flex',width: '5rem', borderBottom: '3px solid #fff', margin: '5px'}}></span></h3>
                <p>07 a 09 de maio | ECO UFRJ - Campus da Praia Vermelha / Av. Pasteur, 250 - Urca <br></br>
                    10 de maio | UVA - Campus Tijuca / R. Ibituruna, 108 - Maracanã <br></br> 
                    11 de maio | SENAI Artes Gráficas / R. São Francisco Xavier, 417 - Maracanã</p>
            </Sobre>
            <Programacao>
                <TabsPart />
            </Programacao>
            <Participantes>
                <Slider />
            </Participantes>
            <Oficinas />
            <Contato />
            <Apoio />
        </Grid>
    </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`

