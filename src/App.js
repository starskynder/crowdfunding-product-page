import { useState, useEffect } from "react";
import "./sass/main.scss";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Stats from "./components/Stats";
import About from "./components/About";
import Modal from "./components/Modal";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    console.log(`menu is ${openMenu}`);
    setOpenMenu(!openMenu);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    if (modalOpen) {
      window.scrollTo(0, 0);
    }
  }, [modalOpen]);

  return (
    <>
      {modalOpen ? <Modal toggleModal={toggleModal} /> : null}
      <Navigation openMenu={openMenu} toggleMenu={toggleMenu} />
      <div className="wrapper">
        <Header toggleModal={toggleModal} />
        <Stats />
        <About toggleModal={toggleModal} />
      </div>
    </>
  );
}

export default App;
