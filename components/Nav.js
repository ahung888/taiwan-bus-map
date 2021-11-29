import React from 'react'
import Link from 'next/link'
import Image from './Image'
import {BiBus} from 'react-icons/bi'
import {FiMapPin} from 'react-icons/fi'
import {BsSearch} from 'react-icons/bs'

const Nav = ({ show, onNavClose }) => {
  return (
    <div>
      <div className={`nav-panel navInfo ${show ? 'active' : ''}`}>

        <header>
          <BiBus className="logo" size="5rem" />
          <h1>台灣公車地圖資訊</h1>
        </header>

        <main>
          <div>資料介接「交通部PTX平臺」</div>
          <a href="https://ptx.transportdata.tw/PTX/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/PTX_logo.png" alt="資料介接「交通部PTX平臺」" />
          </a>
        </main>

        <div className="nav-btns">
          <Link href="/search">
            <div className="btn btn-jumbo">
              <BsSearch />
              <div className="desc">路線搜尋</div>
            </div>
          </Link>
          <Link href="/nearby">
            <div className="btn btn-jumbo">
              <FiMapPin />
              <div className="desc">附近站牌</div>
            </div>
          </Link>
        </div>

        <Link href="/intro">地圖簡介</Link>

        <footer>
          <div>ver: {process.env.APP_VERSION}</div>
        </footer>
      </div>

      <div className={`screen-mask ${show ? 'active' : ''}`} onClick={onNavClose}/>
    </div>
  )
}

export default Nav