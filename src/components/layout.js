import React from "react"
import Footer from "./footer"

const Layout = ({ children }) => (
  <>
    <main>{children}</main>
    <Footer>
      <a href="#footer">Footer</a>
    </Footer>
  </>
)

export default Layout