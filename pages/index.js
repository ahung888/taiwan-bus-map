import Link from 'next/link'
import {FiMapPin} from 'react-icons/fi'
import {BsSearch} from 'react-icons/bs'
import {BiBus} from 'react-icons/bi'

export default function Home() {
  return (
    <div className="homepage">
      <div className="wrapper">
        <div className="logo"><BiBus /></div>
        <div className="title">
          台灣公車動態時刻<br/>查詢應用服務
        </div>
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
      </div>
    </div>
  )
}