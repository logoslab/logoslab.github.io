import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Navbar, NavDropdown, Nav, Carousel } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import Layout from './components/layout'
import Pictures from './components/pictures'
import Biography from './components/biography'
import Contact from './components/contact'
import LabRule from './components/labrule'
import Member from './components/member'
import Career from './components/career'
import Family from './components/family'
import Honor from './components/honor'
import ResearchArea from './components/researchArea'
import Project from './components/project'
import Publication from './components/publication'
import News from './components/News'
const Home: NextPage = () => {
  return (
    <Layout>
      <Pictures />
      <News />
      <Biography />
      <Career />
      <Honor />
      <LabRule />
      <Member/>
      <ResearchArea />
      <Project />
      <Publication />
      <Contact />
    </Layout>
  )
}

export default Home
