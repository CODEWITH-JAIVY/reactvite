import { useContext, useState } from "react";
import UserContext from "./Context/UserContext"; // ✅ Fixed spelling

function Login() {
  const [username, setUsername] = useState(""); // ✅ Fixed useState
  const [password, setPassword] = useState(""); // ✅ Fixed useState
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      username,
      password,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password" // ✅ Changed input type to "password" for security
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
