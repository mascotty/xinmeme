import React from 'react'
import xxPng from '../images/XX.png'
import dasao1 from '../images/dasao1.jpg'
import dasao2 from '../images/dasao2.jpg'
import dasao3 from '../images/dasao3.png'
import video1 from '../videos/dasaoshipin.mp4'


const content = {
  title: '东南亚最后一个大嫂',
  person: '武氏庄',
  ca: '0x78236483256gur',
  narrative: `这个女人为爱，轰动整个东南亚
或许很多人都不知道她。。虽然他不是很漂亮。
也不是很完美。可是她。让我们相信了爱情。如果一个男人得到，这样的一个爱人。那这个男人真的很幸福。我觉得所有男人都希望遇到这种女人。在你辉煌的时候陪伴你。无论何时何地。在你落魄的时候陪伴你。在你面临审判的时候出手舍弃自己的生命去义无反顾的帮你。虽然他们作奸犯科，虽然他们触犯法律，但在这个物欲横流的社会。这种女人还有吗？有吧。可能很少吧。。祝所有兄弟此生都有一个好媳妇陪伴`,
  media: [
    { type: 'image', src: dasao1, alt: '武氏庄 照片 1' },
    { type: 'image', src: dasao2, alt: '武氏庄 照片 2' },
    { type: 'image', src: dasao3, alt: '武氏庄 照片 3' },
    { type: 'video', src: video1 }
  ],
  howToBuy: [
    {
      title: 'Create a Wallet',
      icon: 'wallet',
      desc: 'Download MetaMask or Trust Wallet from the App Store or Google Play Store for free. For desktop, download the MetaMask Chrome extension at metamask.io.'
    },
    {
      title: 'Get Some BNB',
      icon: 'bnb',
      desc: 'Make sure you have BNB (Binance Coin) in your wallet to swap for $大嫂. You can purchase BNB directly on Binance, or buy from an exchange like Coinbase/Kraken and transfer it to your wallet.'
    },
    {
      title: 'Go to PancakeSwap',
      icon: 'pancake',
      desc: 'Visit pancakeswap.finance in Chrome or inside your wallet’s browser. Connect your wallet, then paste the official $大嫂 contract address to load the token.'
    },
    {
      title: 'Swap BNB for $大嫂',
      icon: '$大嫂',
      desc: 'Paste the $大嫂 Contract Address on PancakeSwap and swap your BNB for $大嫂 tokens. Once confirmed, the tokens will appear in your wallet.'
    }
  ]
}

function Section({ title, children }) {
  return (
    <section className="section">
      {title ? <h2 className="section-title">{title}</h2> : null}
      <div className="section-content">{children}</div>
    </section>
  )
}

function MediaGrid({ items }) {
  if (!items || items.length === 0) {
    return (
      <div className="placeholder">
        <div className="placeholder-card">照片/视频素材待上传</div>
        <div className="placeholder-card">照片/视频素材待上传</div>
        <div className="placeholder-card">照片/视频素材待上传</div>
      </div>
    )
  }
  return (
    <div className="media-grid">
      {items.map((m, idx) => (
        <div key={idx} className="media-card">
          {m.type === 'image' ? (
            <img src={m.src} alt={m.alt || 'media'} />
          ) : (
            <video controls src={m.src} />
          )}
          {m.caption && <div className="caption">{m.caption}</div>}
        </div>
      ))}
    </div>
  )
}

function CopyableCA({ ca }) {
  const [copied, setCopied] = React.useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ca)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      const ta = document.createElement('textarea')
      ta.value = ca
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }
  return (
    <div className="ca-row">
      <span className="ca-text">{ca}</span>
      <button className="copy-btn" onClick={copy}>{copied ? '已复制' : 'copy'}</button>
    </div>
  )
}

function VideoBlock({ items }) {
  if (!items || items.length === 0) return null
  const v = items[0]
  return (
    <div className="video-container">
      <video className="video-player" controls src={v.src} />
    </div>
  )
}

function HowToBuy({ steps }) {
  if (!steps || steps.length === 0) return null
  return (
    <div className="htb-grid">
      {steps.map((s, i) => (
        <div key={i} className="htb-card">
          <div className="htb-icon">{s.icon}</div>
          <div className="htb-title">{s.title}</div>
          <div className="htb-desc">{s.desc}</div>
        </div>
      ))}
    </div>
  )
}

export default function App() {
  const photos = content.media.filter(m => m.type === 'image')
  const videos = content.media.filter(m => m.type === 'video')
  return (
    <div className="container">
      <a className="x-link" href="https://x.com/jiangs99407?s=21" target="_blank" rel="noopener noreferrer" aria-label="X Profile">
        <img className="x-icon" src={xxPng} alt="X" />
      </a>
      <header className="hero">
        <div className="hero-text">
          <h1 className="title">{content.title}</h1>
          <p className="subtitle">{content.person}</p>
        </div>
      </header>

      <Section title="CA">
        <CopyableCA ca={content.ca} />
      </Section>

      <Section title="叙事">
        <p className="text">{content.narrative}</p>
      </Section>

      <Section title="">
        <MediaGrid items={photos} />
      </Section>

      <Section title="">
        <VideoBlock items={videos} />
      </Section>

      <Section title="How to Buy">
        <HowToBuy steps={content.howToBuy} />
      </Section>

      <footer className="footer">
        <div>江湖上最后一个大嫂</div>
      </footer>
    </div>
  )
}