import React from "react"
//import { Link, graphql } from 'gatsby'
//import Layout from "../components/layout"
import Grid from "../components/grid"
import Hero from "../components/hero"
import Layout from "../components/layout"

export default ({ props }) => (
    <Layout>
        <Grid>
            <Hero>
                <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ac lectus id quam mollis maximus et eget elit. Sed neque mi, pharetra ac tempus ullamcorper, viverra sit amet nibh. Integer bibendum libero eu magna vehicula, non aliquam nunc elementum. Pellentesque congue ex ac accumsan fringilla. Maecenas odio mi, posuere eu feugiat nec, accumsan efficitur dolor. Praesent at tellus vitae nisi vulputate molestie tempus id dolor. Cras vitae posuere leo. Proin efficitur turpis et sagittis suscipit. Aenean iaculis sem elit, quis luctus lacus aliquam nec.</p>
            </Hero>
        </Grid>
    </Layout>
)

