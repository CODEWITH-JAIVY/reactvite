// src/components/Navbar.jsx
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Navbar({ toggleDark }) {
  const { user } = useAuth();

  return (
    <div className="p-4 flex justify-between bg-gray-100 dark:bg-gray-800">
      <h1 className="text-xl font-bold">AI ChatBot</h1>
      <div>
        <button onClick={toggleDark} className="mr-4">Toggle Theme</button>
        {user && <button onClick={() => signOut(auth)}>Logout</button>}
      </div>
    </div>
  );
}
