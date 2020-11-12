//messing with typescript
//i kinda like it
//26 48

import React, { useState } from "react";
import { AsyncStorage } from "react-native";

type User = null | { username: string };

export const AuthContext = React.createContext<{
  user: User;
  login: () => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const fakeUser = { username: "umm" };
          setUser(fakeUser);
          AsyncStorage.setItem("user", JSON.stringify(fakeUser));
        },
        logout: () => {},
      }}>
      {children}
    </AuthContext.Provider>
  );
};
