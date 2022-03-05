import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Table, NavDropdown, Nav, Carousel } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'

const Honor: NextPage = () => {
  return (
    <Container id={'Honor'}>
      <br /><br /><br />
      <h2>Honor</h2>
      <br/>
      <div>
        <ul><li><strong>2010-now ASPDAC Steering Committe</strong></li><li><strong>2018 SASIMI Best Paper Award</strong></li><li><strong>2016.10 SASIMI Outstanding Paper Award</strong></li><li><strong>2016.6第十屆龍騰微笑創業競賽佳作獎，” 超省電智慧感測追縱器與雲端服務”，黃超明、陳逸樺、林麗郁、陳為方、陳正林</strong></li></ul>
        <ul><li><strong>2015 TITC 社會貢獻獎</strong></li><li><strong>2013 中華民國資訊學會最佳博士論文獎佳作, “利用時脈數精準的交易層級塑模進行快且準的多核心單晶片系統模擬”, 博士生羅振綱</strong></li><li><strong>2012.3 SASIMI Outstanding Paper Award</strong></li><li><strong>2011.5 國內凌陽盃系統晶片創意應用大賽優勝及佳作獎</strong></li><li><strong>2010.7 指導的Power Saviors隊伍獲茂迪盃-太陽能光電應用設計創意競賽最佳設計獎</strong></li><li><strong>2009.11 國科會晶片系統國家型計畫績優計畫獎</strong></li><li><strong>2009 ASP-DAC Best poster award</strong></li><li><strong>2003: “Exact Zero Skew” chosen in “The Best of ICCAD 20 Years” published by Kluwer Academic Publishers</strong></li><li><strong>1993-1998: serving in program committees of ICCAD, DAC, and International Symposium on Physical Design (ISPD).</strong></li><li><strong>1993: IEEE Transaction on CAD Best Paper Award</strong></li><li><strong>1991 IBM Outstanding Technical Achievement Award</strong></li></ul>
      </div>
    </Container>
  )
}

export default Honor