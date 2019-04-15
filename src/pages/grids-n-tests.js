import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import Popup from "reactjs-popup";
import BurgerIcon from "../components/BurguerIcon"
import Menu from "../components/BurguerMenu"
import '../styles/navburguer.scss'

const contentStyle = {
    background: "rgba(255,255,255,0)",
    width: "80%",
    border: "none"
};

export default ({ props }) => (
    <Layout>
        <SEO title='SIQ' keywords={[`SIQ`, `UFRJ`, `quadrinhos`]} />
        <Popup
            modal
            overlayStyle={{ background: "rgba(255,255,255,0.98" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} />}
        >
            {close => <Menu close={close} />}
        </Popup>
    </Layout>
)

