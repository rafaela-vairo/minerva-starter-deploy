import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div 
      style={{
        margin: `0 auto`,
        marginTop: `15%`,
        maxWidth: 960,
        height: `25vh`,
        marginBottom: `15%`,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
        alignContent: `center`,
      }}
    >
      <h1>404 - página não encontrada</h1>
      <p>Eita, você foi para um lugar além da imaginação. <br>
      </br>É perigoso ir sozinho, leve isso: 
        <strong style={{
          fontSize: `2rem`,
      }}>🗡</strong></p>
    </div>
  </Layout>
)

export default NotFoundPage