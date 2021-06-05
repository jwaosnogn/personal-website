import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Seo title="jwaosnogn" />
    <header className="header">
      <p className="header-letter header-letter--1">j</p>
      <p className="header-letter header-letter--6">w</p>
      <p className="header-letter header-letter--2">a</p>
      <p className="header-letter header-letter--7">o</p>
      <p className="header-letter header-letter--3">s</p>
      <p className="header-letter header-letter--8">n</p>
      <p className="header-letter header-letter--4">o</p>
      <p className="header-letter header-letter--9">g</p>
      <p className="header-letter header-letter--5">n</p>
    </header>
    <p className="title">
      <i>
        Full Stack Software Engineer at{" "}
        <a href="https://www.gocurrency.com/" target="_blank">
          Currency Capital
        </a>
      </i>
    </p>
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-list-item navigation-list-item--1">
          <a href="https://github.com/jwaosnogn" target="_blank">GitHub</a>
        </li>
        <li className="navigation-list-item navigation-list-item--2">
          <a href="https://www.linkedin.com/in/jwong1995" target="_blank">LinkedIn</a>
        </li>
        <li className="navigation-list-item navigation-list-item--3">
          <a href="https://jwaosnogn.github.io/Jason%20Wong%20Resume.pdf">Resume</a>
        </li>
      </ul>
    </nav>
  </Layout>
)

export default IndexPage
