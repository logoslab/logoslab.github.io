import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Table, NavDropdown, Nav, Carousel } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'

const News: NextPage = () => {
  return (
    <Container id={'News'}>
      <br/><br/><br/>
      <h2>News</h2>
      <br/>
      <div>
        <p><a href="http://140.114.71.55/blog/rstsay/?p=38"><strong>點子成商品 清大教學生創業</strong></a></p>
        <p><a href="http://140.114.71.55/blog/rstsay/?p=36"><strong>清大蔡仁松創業課程超實用</strong></a></p>
        <p><a href="https://www.nthu.edu.tw/hotNews/content/722"><strong>清大夢工場 創業點子激盪</strong></a></p>
		  </div>
    </Container>
  )
}

export default News