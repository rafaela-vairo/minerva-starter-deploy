import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import "../styles/indiescarouselstyles.scss"
import Button from '@material-ui/core/Button';

import participantesStyles from "../styles/indies.module.scss"

import profile1 from "../images/indies/cqi2.jpg"
import profile2 from "../images/indies/jessica-goes.jpg"
import profile3 from "../images/indies/negapeta2.jpg"
import profile4 from "../images/indies/mario-cesar.jpg"
import profile5 from "../images/indies/carlos-felipe.jpg"

import profile6 from "../images/indies/nilson-fontes.png"
import profile7 from "../images/indies/denis-rizolli.png"
import profile8 from "../images/indies/dalmeida2.png"
import profile9 from "../images/indies/yaya.png"
import profile10 from "../images/indies/rafael-bento.png"

import profile11 from "../images/indies/j-v-santos.png"
import profile12 from "../images/indies/mari-queiroz.png"
import profile13 from "../images/indies/alian.png"
import profile14 from "../images/indies/marcus-leopoldino.jpg"
import profile15 from "../images/indies/victor-moura.jpg"

import profile16 from "../images/indies/t-s-carmo.gif"
import profile17 from "../images/indies/cartumante.png"
import profile18 from "../images/indies/caio-zero.png"
import profile19 from "../images/indies/marco-drifer.png"
import profile20 from "../images/indies/pedro-alvarez.png"

import profile21 from "../images/indies/tavarez.jpg"

 
class Gallery extends React.Component {
    state = {
        currentIndex: 0,
        responsive: { 1024: { items: 2 } },
    }

    slidePrevPage = () => {
        const currentIndex = this.state.currentIndex - this.state.itemsInSlide
        this.setState({ currentIndex })
    }
    
    slideNextPage = () => {
        const currentIndex = this.state.currentIndex + this.state.itemsInSlide
        this.setState({ currentIndex })
    }

    handleOnSlideChange = (event) => {
        const { itemsInSlide, item } = event
        this.setState({ itemsInSlide, currentIndex: item })
    }
    
    render () {
        const { currentIndex, responsive } = this.state
        return (
            <div className={participantesStyles.slidecontainer}>
                <div className={participantesStyles.buttons}>
                    <Button className={participantesStyles.slidebuttonleft} onClick={this.slidePrevPage}><i class="fas fa-chevron-left"></i></Button>
                    <Button className={participantesStyles.slidebuttonright} onClick={this.slideNextPage}><i class="fas fa-chevron-right"></i></Button>
                </div>
                <div>
                    <AliceCarousel 
                mouseDragEnabled
                slideToIndex={currentIndex}
                responsive={responsive}
                buttonsDisabled={true}
                onInitialized={this.handleOnSlideChange}
                onSlideChanged={this.handleOnSlideChange}
                onResized={this.handleOnSlideChange}
                >
                    <div className={participantesStyles.slidecard}>
                        <img src={profile1} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>CQI - Companhia de Quadrinhos Independentes <span></span></h2>
                            <p>A Companhia de Quadrinhos Independentes apresenta desde 2015 trabalhos autênticos e independentes, tais como hqs e estudos jornalísticos. Conta com profissionais como Paulo Chacon Jorge Ventura e Diogo Oliveira, estando estes dois últimos presentes na SIQ 2019. Publicou títulos como Suburbanos volume I (2015) e II (2018) e Batmania Animated (2019).</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile2} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>Jéssica Góes <span></span></h2>
                            <p>Jéssica Góes é carioca, formada em Artes Visuais pela UERJ. Sua aquarela transmite leveza e serenidade em suas personagens femininas. Possui trabalhos nas fanzinotecas mexicanas do Museo Universitario del Chopo e da Junta de Mejoras. Participou de exposições coletivas como Formação (2015), Mostra Latinoamericana de Gravura (2018), Ilustradoras! (2018) e Parte de Nós (2018).</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile3} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>Negapeta <span></span></h2>
                            <p>Letícia (Negapeta) é aquarelista, ilustradora e graduanda em História da Arte pela EBA/UFRJ, criada em São João de Meriti. Com grande influência das animações e quadrinhos japoneses, desenhava já na infância evoluindo até desenvolver uma linguagem artística própria, entre a delicadeza da aquarela e a intensidade da presença da negra em seus desenhos.
</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile4} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>Mário César <span></span></h2>
                            <p>Mário César é cartunista, autor e editor de hqs, além de ilustrador e designer gráfico. Atua com quadrinhos identitários, junto a autores e público LGBTQ+, organizando e participando de publicações e eventos como a POC CON! Duas vezes vencedor do Troféu HQ Mix, além de outras participações vencedoras.</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile5} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>Carlos Felipe <span></span></h2>
                            <p>Carioca, nascido em 1978, formado em Desenhos Industrial na UFRJ. Desde a faculdade se envolveu como roteirista ou organizador em vários projetos de quadrinhos, as HQs A Carta (2013) e UNAY (2018). Mais recentemente envolveu-se com o concurso online Ideias Ilustradas, Para conhecer mais do seu trabalho visite: www.carlosfelipe.net</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile6} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>Nilson Fontes <span></span></h2>
                            <p>Carioca. Licenciado em Artes Visuais pela Unigranrio. Pós-graduando em Cinema e Audio Visual na Universidade Cândido Mendes. Cursou Desenho Livre (SENAC-RJ) e Design Gráfico (Universidade da Cidade). Há 18 anos ensina desenho no Studio Traço. Autor do quadrinho "Aktion Komixs", atualmente finaliza o livro “Os quadrinhos e a Arte Moderna”.</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile7} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>Denis Rizzoli <span></span></h2>
                            <p>Denis Rizzoli é autor de As Desventuras de Beto & Bobby, webcomic sobre o inusitado convívio entre o menino Beto e o robô Bobby. Publicada nas redes sociais (@desventurashq) desde 2016, a tirinha ganhou sua versão impressa em 2018.</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile8} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>D’Almeida <span></span></h2>
                            <p>Ilustrador, Produtor musical e Baiano. Apaixonado por ciência e divulgação científica. Estudou Artes Plásticas na Universidade Federal da Bahia. Desde 2016 desenvolve um projeto de ilustrações e tiras científicas onde busca trazer a ciência para vivências humanas e questões cotidianas. Escreve Ficção Científica e é Podcaster nas horas vagas</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile9} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>Yaya <span></span></h2>
                            <p>Yasmin Ferreira, a Yaya, é uma artista visual de 21 anos, morando e atuando no Rio de Janeiro com pintura mural, tradicional, graffiti e poesia, sob muita cor e traços característicos; focando nas mulheres negras, a descoberta do amor interior e o coletivo; um retratar que mostra a união de suas experiências a partir da dor.</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile10} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>Rafael Bento <span></span></h2>
                            <p>Integrante da primeira turma do laboratório de quadrinhos da Eco, onde se formou em Comunicação Social. Em 2018 suas ilustrações foram publicadas no livro infantil É de Menino / É de Menina. No mesmo ano iniciou à web tira Astrogildo, que terá seu primeiro volume lançado na SIQ 2019.</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile11} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>J. V. Santos <span></span></h2>
                            <p>J. V. Santos é designer gráfico e amante dos quadrinhos, criador do blog  Rabiscos Enquadrados onde publica suas séries de quadrinhos e tirinhas como Terra Reversa, Zabelê e [Des](a)tinados.</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile12} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>Mari Queiroz <span></span></h2>
                            <p>Ilustradora, quadrinista e designer. Autora do quadrinho “Estella Vic: 1922 e o Manifesto Futurista” como ilustradora e, atualmente, está lançando uma HQ autoral em seu Instagram com o nome provisório de “Bucky & Sarah”. Atualmente é mestranda do curso PPGTLCOM da Escola de Comunicação da UFRJ.</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile13} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>AliAn <span></span></h2>
                            <p>Mineiro de Patos de Minas, radicado em Goiânia. Persegue o sonho de desenhar desde criança, apesar de suas dificuldades. Investiu em si mesmo como quadrinista e editor de HQs, resultando em um estilo próprio e versátil. Publica seus sketchs e informações no Instagram, este ano volta à carga como editor.</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile14} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>Marcus Leopoldino <span></span></h2>
                            <p>Psicólogo e Roteirista de quadrinhos, cofundador do selo RISCO - HQs Independentes. Autor das minisséries Dias Estranhos e Andarilho.</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile15} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>Victor Moura <span></span></h2>
                            <p>Victor Moura foi Designer Gráfico no estúdio do Ziraldo por 10 anos. Como artista independente, lançou “Colecionador de Memórias”, a adaptação de “O Gabinete do Dr. Caligari”, “Bartolomeu” e “ARGO5”. Internacionalmente lançou “27 Club”, indicado ao Harvey Award 2016 (Melhor antologia), e "Fantasmagoría", pela Starburn Industries (empresa responsável pela popular animação "Rick and Morty")</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile16} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>T. S. Carmo <span></span></h2>
                            <p>Nas redes por ai T.S.Carmo, fora delas Thaís... humm prazer. Faço tirinhas sobre meu dia a dia ou coisas estranhas que não sei explicar... dona de vários universos inacabados, Menina moça do NordiMinas e NÃO eu não tenho uma cachaça na minha bolsa... geez haha enfim acho que é isso.</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile17} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>Cartumante <span></span></h2>
                            <p>Cartunista, ilustradora e lançadora de hanglooses nas horas vagas desde 2016; Cartumante conta situações do cotidiano que você já passou, está passando ou (provavelmente) vai passar com reflexões intensas e piadas ruins. Suas cartas de tarôt são tirinhas e ilustrações que, na internet ou no impresso, aliviam um pouco as costas do peso existencial.</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile18} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>Caio Zero <span></span></h2>
                            <p>Caio Zero é professor, quadrinista e ilustrador. Estudante de Belas Artes da UFRRJ, já trabalhou em animação, atualmente produzindo quadrinhos no tempo livre. Seus trabalhos são experimentais, semeando cores, formas e texturas para florescer uma narrativa no espectador. Suas principais influências: o cotidiano, rap, filosofia e a interação social em suas várias esferas.</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile19} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>Marco Drifer <span></span></h2>
                            <p>Marco Drifer, carioca, trabalha como ilustrador de quadrinhos desde os anos 1990. Passou pela Rio Gráfica Editora, Editora Bloch, estúdio do Ziraldo e Estúdio Megatério. Atualmente se dedica a pintar telas em acrílica com motivos pop e apresenta na SIQ seu personagem Ted Lancaster, um detetive solitário.</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile20} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>Pedro Alvarez <span></span></h2>
                            <p>Pedro Alvarez é artista visual que faz quadrinhos, animação e jogos. Gosta de usar traços pesados e cores bonitas pra falar de coisas tristes. Posta regularmente em suas redes sociais, onde assina como Black Ink Weaver</p>
                        </div>
                    </div>
                    <div className={participantesStyles.slidecard}>
                        <img src={profile21} alt="alt text"/>
                        <div>
                            <h2 className={participantesStyles.subtitulo}>Tavarez <span></span></h2>
                            <p>Artista urbano do Rio de Janeiro que desenvolve seu trabalho em fanzines, charges, adesivos, painéis, quadrinhos e outras formas. Seu trabalho está ligado intimamente ao cotidiano das cidades. Gostaria que seu trabalho estivesse em todos os pontos de ônibus e estações de trem.</p>
                        </div>
                    </div>
                </AliceCarousel>
                </div>
                
            </div>
            
        )
    }
}

export default Gallery

