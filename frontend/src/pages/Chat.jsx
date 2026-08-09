import { useState } from 'react'
import '../App.css'

function Chat() {
    const [msg, setMsg] = useState('');
    const [lang, setLang] = useState('en');
    const [chatHistory, setChatHistory] = useState([]);

    var heading = lang === 'en' ? 'Skymart AI Agent' : 'Skymart AI代理'
    var history = lang === 'en' ? 'Chat History' : '聊天记录'

    useEffect(() => {
        fetch('http://localhost:5000/chat-history')
            .then(response => response.json())
            .then(data => {
                setChatHistory(data);
            })
            .catch((error) => {
                console.error('Error fetching chat history:', error);
            });
    }, []);

    return (
        <div>
            <h1>{heading}</h1>
            <h3>{history}</h3>
        </div>
    );
}

export default Chat;