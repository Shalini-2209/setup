import React, { useState } from "react";

export const UserContext = React.createContext();
export const SetUserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <SetUserContext.Provider value={setUser}>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </SetUserContext.Provider>
  );
};

export default UserProvider;
