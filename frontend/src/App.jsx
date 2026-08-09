import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [language, setLanguage] = useState('en')
  const [msg, setMsg] = useState('');
  const [change, setChange] = useState(false);
  const [aiToggled, setAiToggled] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { message: msg };
    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      setChange(true);
    } catch (error) {
      setChange(false);
    }
  }

  var setTo = language === 'en' ? '中文' : 'English'

  var heading = language === 'en' ? 'Welcome to Skymart' : '欢迎来到Skymart'
  var introduction = language === 'en' ?
      'Your questions, answered' :
      '您的问题，已解答'

  var help = language === 'en' ? 'Help' : '帮助'
  var helpNote = language == 'en' ? "Need assistance? Try out our AI agent here!" : "需要帮助吗？请尝试我们的AI代理！"

  var helpButton1 = language === 'en' ? 'AI Agent' : 'AI代理'
  var helpButton2 = language === 'en' ? 'Email Support' : '电子邮件支持'

  var contact = language === 'en' ? 'Contact Us' : '联系我们'
  var contactNote = language === 'en' ? "Want to make an order, return something, or simply want to ask us something? Contact us here!" : "想要下订单、退货，或者只是想问我们一些问题？请在这里联系我们！"

  var aiButton = aiToggled
              ? <form onSubmit={handleSubmit} className="section-button">
                <input name="question" type="text" placeholder={language === 'en' ? "Ask a question..." : "问一个问题..."} onChange={(e) => setQuestion(e.target.value)} />
                <button type="submit">Send</button>
              </form>
              : <button className="section-button" onClick={() => setAiToggled(true)}>
                <img className="logo" src={viteLogo} alt="" />
                {helpButton1}
              </button>;

  if (change) {
    navigate("/pages/Chat");
  }
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
          className="language-toggle"
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
              {aiButton}
            </li>
            <li>
              <a href="mailto:ltao197@gmail.com" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                {helpButton2}
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
                  {/* <use href="/icons.svg#wechat-icon"></use> */}
                </svg>
                WeChat/微信
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
