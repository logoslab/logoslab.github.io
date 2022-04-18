import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Table, Row, Col, Carousel } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'
import YouTube from "react-youtube";

const News: NextPage = () => {
  const opts = {
    height: 'auto',
    width: 'auto',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <Container id={'News'} style={{overflow:'scroll'}}>
      <br/><br/><br/>
      <h2>News</h2>
      <br/>
      <Row>
        <Col xs={7}>
        <p><a href="https://meet.bnext.com.tw/articles/view/48665?"><strong>與力積電簽署合作！在清大實驗室磨了10年，滿拓科技力推「AI縮小燈」</strong></a></p>
        <p><a href="https://www.nthu.edu.tw/hotNews/content/722"><strong>清大夢工場 創業點子激盪</strong></a></p>
        <p><a href="https://news.ltn.com.tw/news/life/paper/126811"><strong>清大蔡仁松創業課程超實用</strong></a></p>
		    </Col>
        <Col xs={2}>
        {/* @ts-ignore */ }
        <YouTube videoId="AICcF_HD80M" opts={opts} onReady={(event)=>{event.target.pauseVideo();}}/>
        </Col>
      </Row>
    </Container>
  )
}

export default News