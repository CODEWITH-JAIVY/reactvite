import React, { useContext } from "react";
import UserContext from "./Context/UserContext"; // ✅ Fixed spelling

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h1>Please login</h1>;
  }
  
  return <h2>Welcome, {user.username}!</h2>;
}

export default Profile;
