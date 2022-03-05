import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Navbar, NavDropdown, Nav, Carousel } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'

const Pictures: NextPage = () => {
    return (
        <>
        <Carousel id='home' style={{backgroundColor:'0xa4a4a4'}}>
        <Carousel.Item  style={{textAlign:'center'}}>
          <img
            // className="d-block w-75"
            src="./1.jpg"
            alt="First slide"
            width={'960'}
            height={'540'}
            style={{margin:'auto'}}
          />
          <Carousel.Caption>
            <h3>Logos Lab</h3>
            <p>- Creative, Productive, Joy and Fun -</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{textAlign:'center'}}>
          <img
            // className="d-block w-100"
            src="./2.jpg"
            alt="Second slide"
            width={'960'}
            height={'540'}
            style={{margin:'auto'}}
          />

        <Carousel.Caption>
            <h3>Logos Lab</h3>
            <p>- The most creative, productive and exciting research lab … -</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </>
    )
}
  
export default Pictures