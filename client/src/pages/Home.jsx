import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import TopCreators from "../components/TopCreators.jsx";
import LatestArticles from "../components/LatestArticles.jsx";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="app-container">
      <Sidebar isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <main className="content">
        <Header username="Elizatech5.0" />
        <section className="main-section">
          <SectionHeader title="What’s New?" linkText="See All →" />
          <TopCreators />
          <LatestArticles />
        </section>
      </main>
    </div>
  );
};

export default App;
