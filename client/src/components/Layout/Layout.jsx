import "./Layout.css"
import { Outlet } from "react-router";
import Navigation from "../Navigation/Navigation"
import PanelLeftClose from "../../assets/icons/PanelLeftClose.svg"
import PanelLeftOpen from "../../assets/icons/PanelLeftOpen.svg"
import { useState } from "react";
import Accordeon from "../Accordeon/Accordeon";
import FilterPost from "../FilterPost/FilterPost";
import FollowsList from "../FollowsList/FollowsList";
import Button from "../Button";
import { Coffee } from "lucide-react";

export default function Layout() {
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
      <aside className="sidebar" data-open={isNavOpen}>
        <div className="sidebar-navigation">
          <Navigation />
          <Accordeon label="Filters">
            <FilterPost />
          </Accordeon>
          <Accordeon label="Follows">
            <FollowsList />
          </Accordeon>
          <Button className="coffee-button"> Pay us a coffee  <Coffee /> </Button>
        </div>
      </aside>
      <div className="content-wrapper">
        <span onClick={toggleNav}>
          {isNavOpen ? <img src={PanelLeftClose} /> : <img src={PanelLeftOpen} />}
        </span>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  </div>
}
