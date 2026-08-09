import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [language, setLanguage] = useState('en')

  setTo = language === 'en' ? '中文' : 'English'

  heading = language === 'en' ? 'Welcome to Skymart' : '欢迎来到Skymart'
  introduction = language === 'en' ? 'Your questions, answered' : '您的问题，已解答'

  help = language === 'en' ? 'Help' : '帮助'
  helpNote = language == 'en' ? "Need assistance? Try out our AI agent here!" : "需要帮助吗？请尝试我们的AI代理！"

  contact = language === 'en' ? 'Contact Us' : '联系我们'
  contactNote = language === 'en' ? "Want to make an order, return something, or simply want to ask us something? Contact us here!" : "想要下订单、退货，或者只是想问我们一些问题？请在这里联系我们！"

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>{heading}</h1>
          <p>{introduction}</p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setLanguage((language) => language === 'en' ? 'zh' : 'en')}
        >
          {setTo}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>{help}</h2>
          <p>{helpNote}</p>
          <ul>
            <li>
              <a href="" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                AI Agent
              </a>
            </li>
            <li>
              <a href="mailto:" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Email Support
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>{contact}</h2>
          <p>{contactNote}</p>
          <ul>
            <li>
              <a href="" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#wechat-icon"></use>
                </svg>
                WeChat
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
