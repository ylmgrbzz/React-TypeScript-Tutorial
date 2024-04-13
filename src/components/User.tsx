import React from "react";
import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = (props: AuthUser) => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Yalım Gürbüz",
      email: "ylmgrbz@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser({} as AuthUser);
  };

  return (
    <div>
      <h1>User: {user.name}</h1>
      <h2>Email: {user.email}</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default User;
