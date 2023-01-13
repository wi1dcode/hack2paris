import { createContext, useState } from "react";
import dayjs from "dayjs";

const ResearchInfosContext = createContext();

export function ResearchInfos({ children }) {
  const [whereInput, setWhereInput] = useState("");
  const [dateFormated, setDateFormated] = useState("");
  const [dateRaw, setDateRaw] = useState(dayjs("2023-01-13T09:00:00"));

  async function onSubmitSearchProducts(event) {
    event.preventDefault();
    setDateFormated(
      `${dateRaw.$D < 10 ? "0" : ""}${dateRaw.$D}/${
        dateRaw.$M < 10 ? "0" : ""
      }${dateRaw.$M + 1}/${dateRaw.$y}`
    );
  }

  return (
    <ResearchInfosContext.Provider
      value={{
        whereInput: whereInput,
        setWhereInput: setWhereInput,
        dateFormated: dateFormated,
        setDateFormated: setDateFormated,
        dateRaw: dateRaw,
        setDateRaw: setDateRaw,
        onSubmitSearchProducts,
      }}
    >
      {children}
    </ResearchInfosContext.Provider>
  );
}

export default ResearchInfosContext;
