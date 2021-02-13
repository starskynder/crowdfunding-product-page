import { useState } from "react";
import "./sass/main.scss";
import Navigation from "./components/Navigation";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    console.log(`menu is ${openMenu}`);
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Navigation openMenu={openMenu} toggleMenu={toggleMenu} />
    </>
  );
}

export default App;
