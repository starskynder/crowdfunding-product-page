import { useState, useEffect } from "react";
import "./sass/main.scss";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Stats from "./components/Stats";
import About from "./components/About";
import Modal from "./components/Modal";
import SuccessModal from "./components/SuccessModal";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [stats, setStats] = useState(
    JSON.parse(localStorage.getItem("stats")) || {
      backed: 89914,
      backers: 5007,
      daysleft: 56,
      progress: 80,
      bookmarked: false,
    }
  );

  const [pledges, setPledges] = useState(
    JSON.parse(localStorage.getItem("pledges")) || [
      {
        name: "noreward",
        text:
          "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
        outofstock: false,
        pledge: "no reward",
        noreward: true,
        title: "Pledge with no reward",
        cost: 1,
        stand: "noreward",
        left: 1,
      },

      {
        name: "bamboostand",
        text:
          "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        outofstock: false,
        pledge: "Pledge $25 or more",
        noreward: false,
        title: "Bamboo Stand",
        cost: 25,
        stand: "bamboo stand",
        left: 101,
      },

      {
        name: "blackedition",
        text:
          "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        outofstock: false,
        pledge: "Pledge $75 or more",
        noreward: false,
        title: "Black Edition Stand",
        cost: 75,
        stand: "black edition stand",
        left: 64,
      },

      {
        name: " mahoganyedition",
        text:
          "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        outofstock: true,
        pledge: "Pledge $200 or more",
        noreward: false,
        title: "Mahogany Special Edition",
        cost: 200,
        stand: "mahogany special edition",
        left: 0,
      },
    ]
  );

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const toggleSuccessModal = () => {
    setModalOpen(false);
    if (successModalOpen) {
      setSuccessModalOpen(false);
    } else {
      setSuccessModalOpen(true);
    }
  };

  const backProject = (project, money) => {
    const index = pledges.findIndex((item) => item.name === project);
    const newPledges = [...pledges];
    if (newPledges[index].left === 1 && project !== "noreward") {
      newPledges[index] = {
        ...newPledges[index],
        left: newPledges[index].left - 1,
        outofstock: true,
      };
    } else {
      newPledges[index] = {
        ...newPledges[index],
        left: newPledges[index].left - 1,
      };
    }

    setPledges(newPledges);
    const { backed, backers } = stats;
    const newBacked = backed + parseFloat(money);
    const newBackers = backers + 1;

    if (backed < 100000) {
      const newProgress = calculateProgress(newBacked);
      setStats({
        ...stats,
        backed: newBacked,
        backers: newBackers,
        progress: newProgress,
      });
    } else {
      setStats({
        ...stats,
        backed: newBacked,
        backers: newBackers,
      });
    }
  };

  const calculateProgress = (totalmoney) => {
    const newWidth = parseInt((totalmoney * 100) / 100000);

    return newWidth;
  };

  const handleBookmark = () => {
    setStats({ ...stats, bookmarked: !stats["bookmarked"] });
  };

  useEffect(() => {
    localStorage.setItem("pledges", JSON.stringify(pledges));
  }, [pledges]);

  useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(stats));
    const progressBar = document.querySelector(".stats__progress-bar");
    progressBar.style.width = `${stats["progress"]}%`;
  }, [stats]);

  useEffect(() => {
    if (modalOpen || successModalOpen) {
      window.scrollTo(0, 0);
    }
  }, [modalOpen, successModalOpen]);

  return (
    <>
      {modalOpen ? (
        <Modal
          toggleModal={toggleModal}
          pledges={pledges}
          backProject={backProject}
          toggleSuccessModal={toggleSuccessModal}
        />
      ) : null}

      {successModalOpen ? (
        <SuccessModal toggleSuccessModal={toggleSuccessModal} />
      ) : null}
      <Navigation openMenu={openMenu} toggleMenu={toggleMenu} />
      <div className="wrapper">
        <Header
          toggleModal={toggleModal}
          handleBookmark={handleBookmark}
          bookmarked={stats["bookmarked"]}
        />
        <Stats stats={stats} />
        <About toggleModal={toggleModal} pledges={pledges} />
      </div>
    </>
  );
}

export default App;
