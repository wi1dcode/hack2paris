import { Outlet } from "react-router-dom";
import Header from "./Header";

function TemplateNav() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default TemplateNav;
