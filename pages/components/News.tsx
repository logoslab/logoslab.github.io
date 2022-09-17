import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Table, Row, Col } from 'react-bootstrap'
import Carousel from "react-material-ui-carousel";
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

  const playList = [
    'AICcF_HD80M','Jx-pXI_py2Y','WSPMb0tygUA'
  ]
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
        <Col xs={4}>
        <Carousel navButtonsAlwaysVisible={true} autoPlay={false} >
          {playList.map((v_id,index) => <div key={index} style={{justifyContent:'center', alignItems:'center', display:'flex'}}>
            {/* @ts-ignore */ }
            <YouTube  containerClassName="video-container" className="iframe" videoId={v_id} rel="0" opts={opts}/>
          </div>)}
      </Carousel>
        </Col>
      </Row>
    </Container>
  )
}

export default News