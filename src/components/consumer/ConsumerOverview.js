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
} from "../miscellaneous/Cards";
import moneyBag1 from "../../assets/svgs/moneyBag1.svg";
import moneyBag2 from "../../assets/svgs/moneyBag2.svg";
import wallet from "../../assets/svgs/wallet.svg";

export const ConsumerOverview = () => {
  return (
    <div className="mx-12">
      <Navbar />
      <Banner />

      <div className="consumer-overview mt-6">
        <span className="flex text-left font-medium font-sideBarFont">
          Consumers Overview
        </span>
        <div className="flex flex-row gap-2">
          <div className="left w-2/3">
            <div className="w-full">
              <ConsumerOverviewCardTop
                total={"1,342"}
                num1={"342"}
                num2={"400"}
                num3={"300"}
                num4={"300"}
              />

              <div className="flex flex-row gap-2 mt-2">
                <div className="w-full flex flex-col gap-1">
                  <ConsumerOverviewGraphCard total={"₹1,321,342"} />
                  <ConsumerOverviewFloatCard
                    heading={"Overall Cash Wallet"}
                    price={"₹1,35,342"}
                    icon={moneyBag2}
                    bgColor={"#ECEAFE"}
                  />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <ConsumerOverviewFloatCard
                    heading={"Overall Float Wallet"}
                    price={"₹1,35,342"}
                    icon={moneyBag1}
                    bgColor={"#E5FFDF"}
                  />

                  <ConsumerOverviewFloatCard2
                    heading={"Overall Float Wallet"}
                    price={"₹1,35,342"}
                    icon={wallet}
                    bgColor={"#FFE9DB"}
                  />
                </div>
              </div>

              <div className="mt-5">
                <ConsumerAnalysisBlock />
              </div>
            </div>
          </div>
          <div className="right w-1/3">
            <DashboardGraphCards
              text={"Highest Revenue Earned"}
              btnText={"Top 5"}
              primaryColor={"#0153C9"}
              secColor={"#1FB9FC"}
            />

            <DashboardGraphCards
              text={"5 Greatest Transactions"}
              primaryColor={"#FC6B21"}
              secColor={"#0153C9"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
