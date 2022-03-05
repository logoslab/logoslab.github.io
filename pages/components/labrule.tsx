import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Table, NavDropdown, Nav, Carousel } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'

const LabRule: NextPage = () => {
  return (
    <Container id={'LabRule'}>
      <br /><br /><br />
      <h2>Lab Rule</h2>
      <div>
        <p>1. <strong>Be honest</strong> no cheating</p>
        <p>2. <strong>Be a team</strong></p>
        <p>2.1 &nbsp; Share ideas and information</p>
        <p>2.2 &nbsp; Help each other to succeed</p>
        <p>2.3 &nbsp; Be open on any Lab business</p>
        <p>2.4 &nbsp; Share Lab chores</p>
        <p>2.5 &nbsp; Complement, not criticize, people’s weakness</p>
        <p>2.6 &nbsp; Praise and appreciate people’s achievement</p>
        <p>3. <strong>Be respectful</strong></p>
        <p>3.1 &nbsp; When doing anything in the Lab, try not to disturb others.</p>
        <p>3.2 &nbsp; Respect each other</p>
        <p>4. <strong>Be responsible</strong></p>
        <p>4.1 &nbsp; Fulfill any commitment and job responsibility</p>
        <p>5. <strong>Be disciplined</strong></p>
        <p>5.1 &nbsp; Try to be in the office during weekday daytime</p>
        <p>5.2 &nbsp; Finish projects on time</p>
        <p>6. <strong>Be balanced</strong></p>
        <p>6.1 &nbsp; Keep a balanced, healthy, regular life style</p>
        <p>6.2 &nbsp; Keep a broad, yet healthy, interests besides technical knowledge</p>
        <p>7. <strong>Be clean</strong></p>
        <p>7.1 &nbsp; Take turn to clean Lab and maintain it clean.</p>
      </div>
    </Container>
  )
}

export default LabRule