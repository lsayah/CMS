import "./Layout.css"
import Navigation from "../Navigation/Navigation"
import PanelLeftClose from "../../assets/icons/PanelLeftClose.svg"
import PanelLeftOpen from "../../assets/icons/PanelLeftOpen.svg"
import { useState } from "react";
import Accordeon from "../Accordeon/Accordeon";
import Button from "../Button";
import { Coffee } from "lucide-react";

export default function Layout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return <div className="main-layout">
    <div className="upper-bar">
      <div className="upper-bar-content font-unique">
        <h1>P</h1>
      </div>
    </div>
    <div className="content">
      <aside className="sidebar"  data-open={isNavOpen}>
        <div className="sidebar-navigation">
          <Navigation /> 
          <Accordeon label="Filters">
            qbsoidbdio
            qbsoidbdio
            qbsoidbdio
            qbsoidbdio
            qbsoidbdio
              </Accordeon>
          <Accordeon label="Follows"> 
            qbsoidbdio
            qbsoidbdio
            qbsoidbdio
            qbsoidbdio
            qbsoidbdio
            </Accordeon>
          <Button className="coffee-button"> Pay us a coffee  <Coffee/> </Button>
      </div>
      </aside>
      <div className="content-wrapper">
        <span onClick={toggleNav}>
          {isNavOpen ? <img src={PanelLeftClose} /> : <img src={PanelLeftOpen} />}
        </span>
        <main>
          {children}
        </main>
      </div>
    </div>
  </div>
}
