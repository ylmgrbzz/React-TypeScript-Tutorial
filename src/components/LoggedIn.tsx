import React from "react";
import { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {isLoggedIn ? <div>Hello User</div> : <div>Please login</div>}
    </div>
  );
};

export default LoggedIn;
