import React from "react";
import Routes from "../navigations/Routes";
import { AuthProvider } from "./AuthProvider";

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
