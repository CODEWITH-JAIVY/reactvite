import React, { useState } from "react";
import UserContext from "../UserContext"; // ✅ Fixed spelling

const UserContextProvider = ({ children }) => { // ✅ Fixed children prop
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
