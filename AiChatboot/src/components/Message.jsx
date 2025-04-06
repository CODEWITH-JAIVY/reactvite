// src/components/Message.jsx
export default function Message({ text, from }) {
    return (
      <div className={`p-2 m-1 ${from === 'user' ? 'text-right' : 'text-left'}`}>{text}</div>
    );
  }
  