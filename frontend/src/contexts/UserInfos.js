import { createContext, useState, useEffect } from "react";

const UserInfosContext = createContext();

export function UserInfos({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") !== null ){
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  return (
    <UserInfosContext.Provider
      value={{
        isLogged: isLogged,
        setIsLogged: setIsLogged,
      }}
    >
      {children}
    </UserInfosContext.Provider>
  );
}

export default UserInfosContext;
