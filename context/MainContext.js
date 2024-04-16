import React, { createContext, useState } from "react";

const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  return (
    <MainContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
