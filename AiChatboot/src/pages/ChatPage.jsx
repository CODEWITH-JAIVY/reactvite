// src/pages/ChatPage.jsx
import ChatBox from '../components/ChatBox';
import Navbar from '../components/Navbar';
import useDarkMode from '../hooks/useDarkMode';

export default function ChatPage() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white">
      <Navbar toggleDark={() => setDarkMode(!darkMode)} />
      <ChatBox />
    </div>
  );
}