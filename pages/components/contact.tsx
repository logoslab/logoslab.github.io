import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Table, NavDropdown, Nav, Carousel } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'

const Contact: NextPage = () => {
  return (
    <Container id={'Contact'} style={{ height: '100vh' }}>
      <br/><br/><br/>
      <h2>Contact</h2>
      <ul><li>綜合二館 736 </li><li>綜合二館 737 分機: 34191</li><li>綜合二館 738 </li><li>綜合二館 739</li></ul>
      <Table striped bordered hover style={{width:'30%'}}>
      <tbody><tr><td><strong>Taida (台達館) 616 Tel : 03- 573-1210</strong></td></tr><tr><td><strong>E-mail : </strong><strong>rstsay@gmail.com&nbsp;</strong></td></tr></tbody>
      </Table>
    </Container>
  )
}

export default Contact