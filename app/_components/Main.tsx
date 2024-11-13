import React from "react";

interface MainProps {
  children: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main
      className="flex-1"
      style={{
        minHeight: "calc(100vh - 100px)",
      }}
    >
      {children}
    </main>
  );
};
