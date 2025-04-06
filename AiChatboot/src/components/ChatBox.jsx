// src/components/ChatBox.jsx
import { useState } from 'react';
import Message from './Message';
import { fetchAIResponse } from '../api';

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    const aiResponse = await fetchAIResponse(input);
    setMessages([...newMessages, { from: 'ai', text: aiResponse }]);
  };

  return (
    <div className="p-4">
      <div className="h-96 overflow-y-auto">
        {messages.map((msg, i) => <Message key={i} {...msg} />)}
      </div>
      <input
        className="border p-2 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage} className="mt-2 w-full bg-blue-500 text-white p-2 rounded">Send</button>
    </div>
  );
}