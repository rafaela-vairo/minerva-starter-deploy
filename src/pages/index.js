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

const contentStyle = {
    background: 'rgba(0,0,0,0.0)',
    width: '80%',
    border: 'none',
};

export default ({ props }) => (
    <Layout>
        <SEO title='SIQ' keywords={[`SIQ`, `UFRJ`, `quadrinhos`]} />
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
            <div style={{
                gridColumn: '2 / span 4',
                padding:'20% 10% 10% 5%',
                paddingBottom:'20%',
            }}
            id='sobre'
            >
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae augue mauris. Sed at nisl neque. Mauris et diam massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque tempor volutpat erat a tincidunt. Donec blandit ligula vitae lorem porta vulputate. Mauris eu dui sit amet quam elementum accumsan. Ut dui dolor, porttitor in massa non, interdum hendrerit sem. Pellentesque lobortis eget eros non viverra. Mauris posuere eu risus quis maximus. Mauris mollis iaculis sapien vel cursus. Donec non semper nulla. Ut nec libero tincidunt, dictum ligula sit amet, tincidunt urna. Nullam eleifend diam eget pharetra fringilla. In congue efficitur magna sit amet ultricies. <br></br>
                Vestibulum sit amet tincidunt urna, consectetur elementum nulla. Nam velit enim, aliquam eget mi quis, dictum pellentesque ligula. Aliquam erat volutpat. Sed consectetur quam nec nunc aliquam laoreet. Donec a tristique nunc. Praesent rhoncus nisl nec rutrum porta. Curabitur quis vestibulum justo. Nullam sed erat sem. Donec sagittis eros ac nulla accumsan, id pellentesque justo dapibus. Vivamus ornare mauris consequat justo pretium varius. Vestibulum ut vehicula nunc. Vivamus velit metus, dapibus vel varius ut, pharetra at turpis. Nunc volutpat nisi sit amet consequat bibendum. <br></br>
                Pellentesque efficitur est eget nibh luctus, elementum scelerisque dui ornare. Vestibulum vehicula lacus id elementum euismod. Aliquam tincidunt ipsum ut dolor commodo, vitae tempus ante facilisis. Donec blandit, arcu id volutpat viverra, neque lectus rhoncus ipsum, eu laoreet ipsum augue aliquet quam. In consequat quam vel lectus tincidunt blandit. Duis lectus sapien, lacinia in vehicula quis, condimentum vel augue. Integer risus nisl, posuere in turpis ut, malesuada cursus quam. Aenean id diam tellus. Nullam ac magna sit amet elit varius ornare ut ac magna. Pellentesque ipsum sem, volutpat et porttitor vitae, vehicula maximus tellus. Vivamus rutrum metus vitae mauris ultrices, molestie dictum justo cursus. Sed a neque cursus turpis suscipit suscipit. Donec accumsan lacus vel ipsum porttitor rutrum. Sed eleifend in ipsum sed condimentum. Fusce commodo quis libero sed efficitur. Pellentesque consequat, orci non porta vehicula, enim quam malesuada risus, non tincidunt</p>
            </div>
            <div style={{
                gridColumn: '2 / span 4',
                padding:'20% 10% 10% 5%',
                paddingBottom:'20%',
            }}
            id='programacao'
            >
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae augue mauris. Sed at nisl neque. Mauris et diam massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque tempor volutpat erat a tincidunt. Donec blandit ligula vitae lorem porta vulputate. Mauris eu dui sit amet quam elementum accumsan. Ut dui dolor, porttitor in massa non, interdum hendrerit sem. Pellentesque lobortis eget eros non viverra. Mauris posuere eu risus quis maximus. Mauris mollis iaculis sapien vel cursus. Donec non semper nulla. Ut nec libero tincidunt, dictum ligula sit amet, tincidunt urna. Nullam eleifend diam eget pharetra fringilla. In congue efficitur magna sit amet ultricies. <br></br>
                Vestibulum sit amet tincidunt urna, consectetur elementum nulla. Nam velit enim, aliquam eget mi quis, dictum pellentesque ligula. Aliquam erat volutpat. Sed consectetur quam nec nunc aliquam laoreet. Donec a tristique nunc. Praesent rhoncus nisl nec rutrum porta. Curabitur quis vestibulum justo. Nullam sed erat sem. Donec sagittis eros ac nulla accumsan, id pellentesque justo dapibus. Vivamus ornare mauris consequat justo pretium varius. Vestibulum ut vehicula nunc. Vivamus velit metus, dapibus vel varius ut, pharetra at turpis. Nunc volutpat nisi sit amet consequat bibendum. <br></br>
                Pellentesque efficitur est eget nibh luctus, elementum scelerisque dui ornare. Vestibulum vehicula lacus id elementum euismod. Aliquam tincidunt ipsum ut dolor commodo, vitae tempus ante facilisis. Donec blandit, arcu id volutpat viverra, neque lectus rhoncus ipsum, eu laoreet ipsum augue aliquet quam. In consequat quam vel lectus tincidunt blandit. Duis lectus sapien, lacinia in vehicula quis, condimentum vel augue. Integer risus nisl, posuere in turpis ut, malesuada cursus quam. Aenean id diam tellus. Nullam ac magna sit amet elit varius ornare ut ac magna. Pellentesque ipsum sem, volutpat et porttitor vitae, vehicula maximus tellus. Vivamus rutrum metus vitae mauris ultrices, molestie dictum justo cursus. Sed a neque cursus turpis suscipit suscipit. Donec accumsan lacus vel ipsum porttitor rutrum. Sed eleifend in ipsum sed condimentum. Fusce commodo quis libero sed efficitur. Pellentesque consequat, orci non porta vehicula, enim quam malesuada risus, non tincidunt</p>
            </div>
            <div style={{
                gridColumn: '2 / span 4',
                padding:'20% 10% 10% 5%',
                paddingBottom:'20%',
            }}
            id='participantes'
            >
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae augue mauris. Sed at nisl neque. Mauris et diam massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque tempor volutpat erat a tincidunt. Donec blandit ligula vitae lorem porta vulputate. Mauris eu dui sit amet quam elementum accumsan. Ut dui dolor, porttitor in massa non, interdum hendrerit sem. Pellentesque lobortis eget eros non viverra. Mauris posuere eu risus quis maximus. Mauris mollis iaculis sapien vel cursus. Donec non semper nulla. Ut nec libero tincidunt, dictum ligula sit amet, tincidunt urna. Nullam eleifend diam eget pharetra fringilla. In congue efficitur magna sit amet ultricies. <br></br>
                Vestibulum sit amet tincidunt urna, consectetur elementum nulla. Nam velit enim, aliquam eget mi quis, dictum pellentesque ligula. Aliquam erat volutpat. Sed consectetur quam nec nunc aliquam laoreet. Donec a tristique nunc. Praesent rhoncus nisl nec rutrum porta. Curabitur quis vestibulum justo. Nullam sed erat sem. Donec sagittis eros ac nulla accumsan, id pellentesque justo dapibus. Vivamus ornare mauris consequat justo pretium varius. Vestibulum ut vehicula nunc. Vivamus velit metus, dapibus vel varius ut, pharetra at turpis. Nunc volutpat nisi sit amet consequat bibendum. <br></br>
                Pellentesque efficitur est eget nibh luctus, elementum scelerisque dui ornare. Vestibulum vehicula lacus id elementum euismod. Aliquam tincidunt ipsum ut dolor commodo, vitae tempus ante facilisis. Donec blandit, arcu id volutpat viverra, neque lectus rhoncus ipsum, eu laoreet ipsum augue aliquet quam. In consequat quam vel lectus tincidunt blandit. Duis lectus sapien, lacinia in vehicula quis, condimentum vel augue. Integer risus nisl, posuere in turpis ut, malesuada cursus quam. Aenean id diam tellus. Nullam ac magna sit amet elit varius ornare ut ac magna. Pellentesque ipsum sem, volutpat et porttitor vitae, vehicula maximus tellus. Vivamus rutrum metus vitae mauris ultrices, molestie dictum justo cursus. Sed a neque cursus turpis suscipit suscipit. Donec accumsan lacus vel ipsum porttitor rutrum. Sed eleifend in ipsum sed condimentum. Fusce commodo quis libero sed efficitur. Pellentesque consequat, orci non porta vehicula, enim quam malesuada risus, non tincidunt ante</p>
            </div>
        </Grid>
    </Layout>
)

