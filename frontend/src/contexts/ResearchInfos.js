import { createContext, useState } from "react";

const ResearchInfosContext = createContext();

export function ResearchInfos({ children }) {
  const [whereInput, setWhereInput] = useState();
  const [dateFormated, setDateFormated] = useState();

  return (
    <ResearchInfosContext.Provider
      value={{
        whereInput: whereInput,
        setWhereInput: setWhereInput,
        dateFormated: dateFormated,
        setDateFormated: setDateFormated,
      }}
    >
      {children}
    </ResearchInfosContext.Provider>
  );
}

export default ResearchInfosContext;
