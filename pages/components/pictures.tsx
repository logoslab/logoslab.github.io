import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Navbar, NavDropdown, Nav, Carousel, Figure } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'
{/* @ts-ignore */ }
const customLoader = ({ src, width }) => {
  return `${src}`
}

const height = '100%'
const width = '95%'
const Pictures: NextPage = () => {
  return (
    <>
      {/* @ts-ignore */ } 
      <Carousel id='home' style={{ backgroundColor: '0xa4a4a4'}}
        variant='dark'
      >
        <Carousel.Item style={{ textAlign: 'center' }}>
          <Figure>
            <Figure.Image width={width}  height={height}  alt="First slide"  src="1.jpg"/>
          </Figure>
          <Carousel.Caption style={{ color: 'white' }}>
            <h3>Logos Lab</h3>
            <p>- Creative, Productive, Joy and Fun -</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ textAlign: 'center' }}>
          <Figure>
            <Figure.Image width={width}  height={height}  alt="second slide"  src="2.jpg"/>
          </Figure>
          <Carousel.Caption style={{ color: 'white' }}>
            <h3>Logos Lab</h3>
            <p>- The most creative, productive and exciting research lab … -</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Pictures