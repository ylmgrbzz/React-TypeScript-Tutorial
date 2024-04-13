import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin1 = () => {
    // if (userContext) {
    userContext.setUser({
      name: "Vishwas",
      email: "asd@asd.com",
    });
    // }
  };
  const handleLogout1 = () => {
    // if (userContext) {
    userContext.setUser(null);
    // }
  };
  return (
    <div>
      <button onClick={handleLogin1}>Login</button>
      <button onClick={handleLogout1}>Logout</button>
      <div>User name {userContext.user?.name}</div>
      <div>User email {userContext.user?.email}</div>
      {/* <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div> */}
    </div>
  );
};
