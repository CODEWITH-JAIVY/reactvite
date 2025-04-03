import { useState } from "react";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Component/Login";
import Profile from "./Component/Profile"; // ✅ Fixed import

function App() {
  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <Login />
      <Profile /> {/* ✅ Fixed component usage */}
    </UserContextProvider>
  );
}

export default App;
