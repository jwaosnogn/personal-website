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
        <a href="https://www.gocurrency.com/" target="_blank" rel="noreferrer noopener">
          Currency Capital
        </a>
      </i>
    </p>
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-list-item">
          <a href="https://github.com/jwaosnogn" target="_blank" rel="noreferrer noopener">GitHub</a>
        </li>
        <li className="navigation-list-item">
          <a href="https://www.linkedin.com/in/jwong1995" target="_blank" rel="noreferrer noopener">LinkedIn</a>
        </li>
        <li className="navigation-list-item">
          <a href="https://jwaosnogn.github.io/Jason%20Wong%20Resume.pdf" rel="noreferrer noopener">Resume</a>
        </li>
        <li className="navigation-list-item">
          <a href="mailto:jwaosnogn@gmail.com">Email</a>
        </li>
      </ul>
    </nav>
  </Layout>
)

export default IndexPage
