import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import dashboard from "../../assets/svgs/dashboard.svg";
import bullion from "../../assets/svgs/bullion.svg";
import transaction from "../../assets/svgs/transactions.svg";
import bank from "../../assets/svgs/bank.svg";
import faq from "../../assets/svgs/faq.svg";
import consumers from "../../assets/svgs/consumers.svg";
import otherOperations from "../../assets/svgs/otherOperations.svg";
import network from "../../assets/svgs/network.svg";
import customize from "../../assets/svgs/customize.svg";
import { SideBarButton } from "../miscellaneous/Buttons";
import { SidebarCard } from "../miscellaneous/Cards";

export const Sidebar = () => {
  const [active, setActive] = useState("Consumers");

  return (
    <nav className="bg-lightBlue h-full px-2 pb-24 overflow-auto overflow-scrollbarHidden">
      <div
        className="flex-col pt-12 font-customFont font-normal text-logoColor"
        style={{ fontSize: "20px", fontWeight: "500" }}
      >
        <div className="flex flex-row px-6">
          <img src={logo} alt="logo"/>
          <span style={{ textShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)" }}>
            ZINTLR
          </span>
        </div>

        <div className="flex flex-col gap-2" style={{ marginTop: "60px" }}>
          <SideBarButton
            text={"Dashboard"}
            asset={dashboard}
            active={active === "Dashboard"}
            setActive={setActive}
          />

          <SideBarButton
            text={"Bullion Operations"}
            asset={bullion}
            active={active === "Bullion Operations"}
            setActive={setActive}
          />

          <SideBarButton
            text={"Transactions"}
            asset={transaction}
            active={active === "Transactions"}
            setActive={setActive}
          />

          <SideBarButton
            text={"Your Network"}
            asset={network}
            active={active === "Your Network"}
            setActive={setActive}
          />

          <SideBarButton
            text={"Consumers"}
            asset={consumers}
            active={active === "Consumers"}
            setActive={setActive}
          />

          <SideBarButton
            text={"Other Operations"}
            asset={otherOperations}
            active={active === "Other Operations"}
            setActive={setActive}
          />

          <SideBarButton
            text={"Manage Bank Accounts"}
            asset={bank}
            active={active === "Manage Bank Accounts"}
            setActive={setActive}
          />

          <SideBarButton
            text={"FAQ"}
            asset={faq}
            active={active === "FAQ"}
            setActive={setActive}
          />

          <SideBarButton
            text={"Customize Dashboard"}
            asset={customize}
            active={active === "Customize Dashboard"}
            setActive={setActive}
          />
        </div>

        <div
          className="mt-14 flex flex-col items-start pl-6"
          style={{ fontSize: "17px" }}
        >
          <span
            className="font-sideBarFont text-black"
            style={{ fontSize: "17px", fontWeight: "500", fontStyle: "normal" }}
          >
            Your Stock
          </span>

          <SidebarCard />
        </div>
      </div>
    </nav>
  );
};
