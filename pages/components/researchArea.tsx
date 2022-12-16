import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Table, NavDropdown, Nav, Carousel } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'

const ResearchArea: NextPage = () => {
  return (
    <Container id={'Research_Area'}>
      <br /><br /><br />
      <h2>ResearchArea</h2>
      <div>
        <ul>
          <li>
            <strong>Blockchain Core Technology and Applications</strong>
            <ul>
              <li>Consensus algorithm</li>
              <li>Multi-threaded chaining</li>
              <li>FinTech - automatic auditing system</li>
              <li>E-Voting system</li>
            </ul>
          </li>
          <li>
            <strong>Distributed Secure IoT framework</strong>
            <ul>
              <li>Self-sovereign eId</li>
              <li>An ultra-robust private key management system</li>
              <li>Self-sovereign access control protocol</li>
              <li>Peer-to-peer transaction model</li>
              <li>Privacy-preserving techniques</li>
            </ul>
          </li>
          <li>
            <strong>Trusted Computing and Hardware Security Chip</strong>
            <ul>
              <li>Trusted computing environment</li>
              <li>Secure element</li>
              <li>Hardware eWallet</li>
            </ul>
          </li>
          <li>
            <strong>Dafuon Entrepreneurship education system</strong>
            <ul>
              <li>Gamified education system</li>
              <li>Resource map and scheduling</li>
              <li>Personal talent exploration and team formation</li>
            </ul>
          </li>
          <li>
            <strong>Entrepreneurship learning map </strong>
          </li>
        </ul>
        {/* <h4><strong>The most creative, productive and exciting research lab …</strong></h4> */}
      </div>
    </Container>
  )
}

export default ResearchArea