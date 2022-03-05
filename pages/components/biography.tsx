import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Table, NavDropdown, Nav, Figure } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'

const Biography: NextPage = () => {
  return (
    <Container id={'Biography'}>
      <br/><br/><br/>
      <h2>Biography</h2>
      <div>
        <Figure style={{float:'right',marginLeft:'3%'}}>
          <Figure.Image width={171}  height={180}  alt="171x180"  src="3.jpg"/>
          <Figure.Caption style={{textAlign:'center'}}>Family</Figure.Caption>
        </Figure>
        <p><strong>蔡仁松 教授 1980年畢業於台灣大學電機工程系。1985年申請進入柏克萊大學，並取得電機工程及電腦博士學位。畢業後至 IBM 公司研發部工作。1992年參與起創 ArcSys 公司( 後合併入 Synopsys )，並任產品設計總監，發展世界第一個成功的 IC 速率優化設計工具。1997年另再創辦 Axis 公司( 現併入 Cadence )，設計製作一個可以用軟體隨意組架的電腦系統( Reconfigurable Computer )，市場上銷售非常成功。蔡教授的長處在於結合理論與實務，而開發多項業界必用的產品。由於經驗豐富，國內外多家公司邀聘為顧問及董事。2004及2005暑期應清華大學電資學院邀請任特聘講座。現為清華大學專任教授。除專業課程外，亦教授「高科技創業學」傳遞創業經驗。</strong></p>
        <p><strong>個人擁有多項專利。在 IEEE 雜誌發表過數十篇專業論文，並榮獲該雜誌頒發之電腦輔助設計最佳論文獎。另獲選 ICCAD 20 年最佳論文。亦曾獲 IBM 公司之技術成就獎。</strong></p>
        <p><strong>Dr. Ren-Song Tsay</strong><strong>, nicknamed “Dr. Zero-Skew”, is the inventor of the famous industry standard zero-skew clock tree design method.</strong></p>
        <p><strong>He received his Ph. D. degree from UC Berkeley and worked for IBM T. J.Watson Research Center before he started his successful Silicon Valley ventures. He was the person designed the first commercially successful performance optimization physical design system (now in Synopsys) which is still the market leader. He then jointly founded Axis Systems (now merged with Cadence) and developed a breakthrough logic verification system using reconfigurable computer technology. After that, he helped a few start-up companies as a consultant or investor.</strong></p>
        <p><strong>Wishing to pass on his experiences to younger generation, he is now teaching at National Tsing-Hua University, Taiwan, his home country, on the subjects of “High-Tech Entrepreneurship” and “System Level Design”.</strong></p>
        <p><strong>Dr. Tsay is a devout Christian and a well respected person for his integrity, insight and ingenuity.</strong></p>
        <p><strong>Latest Update: 2011.4.1</strong></p>
      </div>
    </Container>
  )
}

export default Biography