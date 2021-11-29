import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from '../components/Image'

const IntroPage = () => {
  const router = useRouter()
  const [ctaText, setCtaText] = useState('立即使用')

  const handleCallToAction = () => {
    setCtaText('啟動中...')
    router.push('/')
  }

  return (
    <div className="w">
      <nav>
        <section>
          <div className="nav">
            <div className="logo">台灣公車動態時刻查詢應用服務</div>
            <div className="btnCta" onClick={handleCallToAction}>{ctaText}</div>
          </div>
        </section>
      </nav>

      <main>
        <section>
          <div className="wrapper">
            <div className="node">
              <h1>查詢台灣公車動態時刻查詢應用服務</h1>
            </div>
            <div className="node">
              <Image src="/images/intro/1.png" alt="search filter" />
            </div>
          </div>
        </section>

        <section>
          <div className="wrapper reverse">
            <div className="node">
              <h3>查詢公車到站時刻</h3>
            </div>
            <div className="node">
              <Image src="/images/intro/2.png" alt="search result" />
            </div>
          </div>
        </section>

        <section>
          <div className="wrapper">
            <div className="node">
              <h3>去程/回程的公車時刻皆可查詢</h3>
            </div>
            <div className="node">
              <Image src="/images/intro/3.png" alt="search result detail" />
            </div>
          </div>
        </section>

        <section>
          <div className="wrapper reverse">
            <div className="node">
              <h1>資料來源</h1>
              <p>資料來源由交通部與各公共運輸機關協作整合的「公共運輸整合資訊流通服務平臺」提供，平臺涵蓋的資料包含公路、 軌道、航空及航運4大類公共運輸旅運相關動靜態資料</p>
            </div>
            <div className="node">
              <Image src="/images/PTX_logo.png" alt="資料介接「交通部PTX平臺」" />
            </div>
          </div>
        </section>

        <section>
          <div className="wrapper">
            <div className="node">
              <h1>RWD支援</h1>
              <p>支援手機、平版、桌機，多種平台的顯示裝置</p>
            </div>
            <div className="node">
              <Image src="/images/intro/all.png" alt="support rwd" />
            </div>
          </div>
        </section>

        <section>
          <div className="cta">
            <div className="btnCta" onClick={handleCallToAction}>{ctaText}</div>
          </div>
        </section>
      </main>

      <footer>
        作者：<a href="https://ahung888.github.io/" target="_blank" rel="noopener noreferrer">ahung888</a>
      </footer>
    </div>
  )
}

export default IntroPage