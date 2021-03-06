import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { Container, Navbar, NavDropdown, Nav, Carousel } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'
const Layout: NextPage = ({children}) => {
    return (
      <div>
      <Head>
        <title>Logos Lab</title>
        <meta name="description" content="LogosLab, the most creative, productive and exciting research lab" />
        <meta name="image" content='1.jpg'/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8"/> 
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <!-- Global site tag (gtag.js) - Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8VTCYEW3YL"></Script>
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        {/* @ts-ignore */ }
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', 'G-8VTCYEW3YL');`}
      </Script>
      <link href="bootstrap.min.css" media="all" rel="stylesheet" type="text/css" />
      {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        /> */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{position: 'sticky',zIndex:'999',top:'0'}}>
        <Container>
          <Navbar.Brand href="#home">Logos Lab</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#News">News</Nav.Link>
              <NavDropdown menuVariant="dark" title="Professor" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#Biography">Biography</NavDropdown.Item>
                <NavDropdown.Item href="#Career">Career</NavDropdown.Item>
                <NavDropdown.Item href="#Honor">Honor</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown menuVariant="dark" title="Lab" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#LabRule">Lab Rule</NavDropdown.Item>
                <NavDropdown.Item href="#Member">Member</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown menuVariant="dark" title="Research" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#Research_Area">Research Area</NavDropdown.Item>
                <NavDropdown.Item href="#Project">Projects</NavDropdown.Item>
                <NavDropdown.Item href="#Publication">Publications</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
              <NavDropdown menuVariant="dark" title="Recruitment" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#Contact">Contact</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
    );
}
  
export default Layout