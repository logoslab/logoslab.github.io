import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Table, NavDropdown, Nav, Carousel, Figure } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'

const Family: NextPage = () => {
  return (
    <Container id={'Family'}>
      <br /><br /><br />
      <h2>Family</h2>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="3.jpg"
        />
        <Figure.Caption>
          Family
        </Figure.Caption>
      </Figure>
    </Container>
  )
}

export default Family