import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Table, Tabs, Tab, Carousel } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'

const Career: NextPage = () => {
  return (
    <Container id={'Career'}>
      <br /><br /><br />
      <h2>Career</h2>
      <Tabs defaultActiveKey="Education" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="Education" title="Education">
          <Table bordered hover responsive>
              <tbody><tr><td><strong>School</strong></td><td><strong>Country</strong></td><td><strong>Major</strong></td><td><strong>Degree</strong></td><td><strong>Date</strong></td></tr><tr><td><strong>UC Berkeley</strong></td><td><strong>USA</strong></td><td><strong>EECS</strong></td><td><strong>Ph.D.</strong></td><td><strong>1985.1-1989.7</strong></td></tr><tr><td><strong>Fuller Seminary</strong></td><td><strong>USA</strong></td><td><strong>Theology</strong></td><td><strong>M.A.T.</strong></td><td><strong>2003.1-2005.6</strong></td></tr><tr><td><strong>UC Santa Barbara</strong></td><td><strong>USA</strong></td><td><strong>ECS</strong></td><td><strong>M.S.</strong></td><td><strong>1983.9-1984.6</strong></td></tr><tr><td><strong>National Taiwan University</strong></td><td><strong>Taiwan</strong></td><td><strong>EE</strong></td><td><strong>B.S.</strong></td><td><strong>1976.9-1980.6</strong></td></tr></tbody>
            </Table>
        </Tab>
        <Tab eventKey="Experiences" title="Experiences">
        <Table bordered hover responsive>
            <tbody><tr><td><strong>Organization</strong></td><td><strong>Department</strong></td><td><strong>Title</strong></td><td><strong>Date</strong></td></tr><tr><td><strong>National Tsing-Hua University</strong></td><td><strong>Department of CS</strong></td><td><strong>Professor</strong></td><td><strong>2006.2 – present</strong></td></tr><tr><td><strong>National Tsing-Hua University</strong></td><td><strong>College of EECS</strong></td><td><strong>Visiting Professor</strong></td><td><strong>2005.6-8, 2004.7-8</strong></td></tr><tr><td><strong>GLC</strong></td><td><strong>Corporate</strong></td><td><strong>Director of Board</strong></td><td><strong>2005.6-present</strong></td></tr><tr><td><strong>Nanostar Technology</strong></td><td><strong>Corporate</strong></td><td><strong>Board of Advisor</strong></td><td><strong>2004.6 – 2008.12</strong></td></tr><tr><td><strong>Spring Soft</strong></td><td><strong>Corporate</strong></td><td><strong>Consultant</strong></td><td><strong>2002.3 – 2005.12</strong></td></tr><tr><td><strong>Axis Systems</strong></td><td><strong>Corporate</strong></td><td><strong>Vice President</strong></td><td><strong>1997.1 – 2001.4</strong></td></tr><tr><td><strong>ArcSys Inc.</strong></td><td><strong>R&amp;D</strong></td><td><strong>Director</strong></td><td><strong>1992.8 – 1997.1</strong></td></tr><tr><td><strong>IBM</strong></td><td><strong>Research Center</strong></td><td><strong>Research Staff</strong></td><td><strong>1989.7 – 1992.8</strong></td></tr></tbody>
          </Table>
        </Tab>
        <Tab eventKey="CVS" title="Community Voluntary Services">
        <Table bordered hover responsive>
            <tbody><tr><td><strong>Organization</strong></td><td><strong>Title</strong></td><td><strong>Date</strong></td></tr><tr><td><strong>思源教育基金會</strong></td><td><strong>董事長</strong></td><td><strong>2007.11 – 2010.10</strong></td></tr><tr><td><strong>芥菜種會</strong></td><td><strong>常務董事</strong></td><td><strong>2009.1~ present</strong></td></tr><tr><td><strong>佳美生命建造協會</strong></td><td><strong>常務理事</strong></td><td><strong>2009.11~psresent</strong></td></tr></tbody>
          </Table>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default Career