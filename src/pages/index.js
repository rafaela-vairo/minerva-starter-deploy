import React from 'react'
import Layout from '../components/layout'
import Grid from '../components/grid'
import Hero from '../components/hero'
import logo from '../images/logoSIQ.svg'
import SEO from '../components/seo'

export default ({ props }) => (
    <Layout>
        <SEO title='SIQ' keywords={[`SIQ`, `UFRJ`, `quadrinhos`]} />
        <Grid>
            <Hero>
                <img src={logo} alt="Logo SIQ" />
            </Hero>
        </Grid>
    </Layout>
)

