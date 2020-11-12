import React from "react";
import App from "../../App";
import { AuthProvider } from "./AuthProvider";

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
