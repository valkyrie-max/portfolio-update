import * as React from "react"

import '../styles/styles.css';

import SideMenu from "../components/sideMenu";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


const IndexPage = () => {
  return (
    <>
      <SideMenu/>
      <main className="wrapper">
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Alisa Kitkina: Web Developer</title>
