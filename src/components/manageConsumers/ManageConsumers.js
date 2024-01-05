import React from "react";
import { Navbar } from "../navbar/Navbar";
import { Banner } from "../banner/Banner";
import {
  ConsumerAnalysisBlock,
  ConsumerOverviewCardTop,
  ConsumerOverviewFloatCard,
  ConsumerOverviewFloatCard2,
  ConsumerOverviewGraphCard,
  DashboardGraphCards,
} from "../cards/Cards";
import moneyBag1 from "../../assets/svgs/moneyBag1.svg";
import moneyBag2 from "../../assets/svgs/moneyBag2.svg";
import wallet from "../../assets/svgs/wallet.svg";

export const ManageConsumers = () => {
  return (
    <div className="mx-12">
      <Navbar />
      <Banner />

      <div className="consumer-overview mt-6">
        <span className="flex text-left font-medium font-sideBarFont">
          Consumers Overview
        </span>
        <div className="flex flex-row gap-2">
          
        </div>
      </div>
    </div>
  );
};
