import React from "react"
import Navbar from "./nav"
import Footer from "./footer"

const Layout = ({ children }) => (
  <>
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
    <main>{children}</main>
    <Footer>
      <a href="#footer">Footer</a>
    </Footer>
  </>
)

export default Layout