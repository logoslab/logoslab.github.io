import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Table, NavDropdown, Nav, Carousel } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'

const Member: NextPage = () => {
  return (
    <Container id={'Member'}>
      <br /><br /><br />
      <h2>Member</h2>
      <div>
        <h4><strong>● Professor</strong></h4>
        <p>蔡仁松</p>
        <h4><strong>● Part-time postgraduate students</strong></h4>
        <p>吳昕益</p>
        <h4><strong>● Ph.D. students</strong></h4>
        <p>&nbsp;江政勳</p>
        <h4><strong>● Master students</strong></h4>
        <p>王睿哲 李柏漢 王念祖</p>
        <h4><strong>● Alumni</strong></h4>
        <p>2008年 林凱立 羅億綸</p>
        <p>2009年 李建旻</p>
        <p>2010年 莊震宇 傅正陽 王鵬智 杜浩銓</p>
        <p>2011年 吳孟寰 利茂霖 呂沂善</p>
        <p>2012年 黃毓閎 陳立君 林沛佳 羅振綱  曾柏翰 游凡緯  黃子齊 白憲倫</p>
        <p>2013年 張豐願 陳書湧 陳慶諭</p>
        <p>2014年 張鈞皓</p>
        <p>2015年 陳建豪 李柏均 蕭啟廷 陳萱蔓</p>
        <p>2016年 蔡政霖</p>
        <p>2017年 林軒毅 何芯瑀</p>
        <p>2018年&nbsp;張筠 胡宇康 張瑋鑫</p>
        <p>2019年 金國丞 郭達毅 呂宗穎 理艾辛</p>
        <p>2020年 葉揚 黃翊紘 凌胤淳 李佳齊</p>
        <p>2021年 金緒勳 郭韋逸</p>
        <p>2023年 陳詠瑄 盧冠甫 高瑞宏</p>
        <p>2024年 李冠學 蘇子軒 彭湘婷 陳唯中</p>
        <p>2025年 楊奕君</p>
      </div>
    </Container>
  )
}

export default Member