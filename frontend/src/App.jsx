import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [lang, setLang] = useState('en')
  const [msg, setMsg] = useState('');
  const [aiToggled, setAiToggled] = useState(false)
  const [functioning, setFunctioning] = useState(true)

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { message: msg };
    try {
      const response = await fetch('http://127.0.0.1:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      setFunctioning(true);
      navigate('/Chat', { state: { lang: lang } });
    } catch (error) {
      console.log('Error sending message:', error);
      setFunctioning(false);
    }
  }

  var setTo = lang === 'en' ? '中文' : 'English'

  var heading = lang === 'en' ? 'Welcome to Skymart' : '欢迎来到Skymart'
  var introduction = lang === 'en' ?
      'Your questions, answered' :
      '您的问题，已解答'

  var help = lang === 'en' ? 'Help' : '帮助'
  var helpNote = lang == 'en' ? "Need assistance? Try out our AI agent here!" : "需要帮助吗？请尝试我们的AI代理！"

  var helpButton1 = lang === 'en' ? 'AI Agent' : 'AI代理'
  var helpButton2 = lang === 'en' ? 'Email Support' : '电子邮件支持'

  var contact = lang === 'en' ? 'Contact Us' : '联系我们'
  var contactNote = lang === 'en' ? "Want to make an order, return something, or simply want to ask us something? Contact us here!" : "想要下订单、退货，或者只是想问我们一些问题？请在这里联系我们！"

  var send = lang === 'en' ? 'Send' : '发送'

  var aiButton = aiToggled
              ? <form onSubmit={handleSubmit} className="section-button">
                <input name="question" type="text" placeholder={lang === 'en' ? "Ask a question..." : "问一个问题..."} onChange={(e) => setMsg(e.target.value)} />
                <button type="submit">{send}</button>
              </form>
              : <button className="section-button" onClick={() => setAiToggled(true)}>
                <img className="logo" src={viteLogo} alt="" />
                {helpButton1}
              </button>;

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
          onClick={() => setLang((lang) => lang === 'en' ? 'zh' : 'en')}
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
              {functioning ? "" : <p className="error-message">{lang === 'en' ? "Error: AI agent is currently unavailable." : "错误：AI代理当前不可用。"}</p>}
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
