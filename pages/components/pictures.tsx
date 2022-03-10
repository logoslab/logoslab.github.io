import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import YouTube from "react-youtube";
import { Container, Navbar, NavDropdown, Nav, Carousel } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'
{/* @ts-ignore */ }
const customLoader = ({ src }) => {
  return `${src}`
}

const opts = {
  height: "554",
  width: "960",
  playerVars: {
    autoplay: 1,
  },
};

const Pictures: NextPage = () => {
  return (
    <>
      <Carousel id='home' style={{ backgroundColor: '0xa4a4a4' }}
        variant='dark'
      >
        <Carousel.Item style={{ textAlign: 'center' }}>
          <Image
            // className="d-block w-75"
            loader={customLoader}
            src="1.jpg"
            alt="First slide"
            width={'960'}
            height={'554'}
          />
          <Carousel.Caption style={{ color: 'white' }}>
            <h3>Logos Lab</h3>
            <p>- Creative, Productive, Joy and Fun -</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ textAlign: 'center' }}>
          <Image
            // className="d-block w-100"
            loader={customLoader}
            src="2.jpg"
            alt="Second slide"
            width={'960'}
            height={'554'}
          />

          <Carousel.Caption style={{ color: 'white' }}>
            <h3>Logos Lab</h3>
            <p>- The most creative, productive and exciting research lab … -</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{textAlign:'center'}}>
          {/* @ts-ignore */ }
          <YouTube videoId="AICcF_HD80M" opts={opts} onReady={(event)=>{event.target.pauseVideo();}}/>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Pictures