import { useState } from "react";
import "./sass/main.scss";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Stats from "./components/Stats";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    console.log(`menu is ${openMenu}`);
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Navigation openMenu={openMenu} toggleMenu={toggleMenu} />
      <div className="wrapper">
        <Header />
        <Stats />
      </div>
    </>
  );
}

export default App;
