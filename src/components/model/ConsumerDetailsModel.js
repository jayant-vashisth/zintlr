import React from "react";
import { DashboardButton } from "../miscellaneous/Buttons";
import tachometer from "../../assets/svgs/tachometer.svg";
import warning from "../../assets/svgs/warning.svg";
import ticket from "../../assets/svgs/ticket.svg";
import chat from "../../assets/svgs/chat.svg";
import longBlueArrow from "../../assets/svgs/longBlueArrow.svg";
import blueArrow from "../../assets/svgs/blueArrow.svg";
import receipt from "../../assets/svgs/receipt.svg";
import moneyBag2 from "../../assets/svgs/moneyBag2.svg";
import moneyBag1 from "../../assets/svgs/moneyBag1.svg";
import wallet from "../../assets/svgs/wallet.svg";
import editPerson from "../../assets/svgs/editPerson.svg";
import removePerson from "../../assets/svgs/removePerson.svg";
import mail from "../../assets/svgs/mail.svg";
import carbonChart from "../../assets/svgs/carbonChart.svg";

import {
  ConsumerOverviewFloatCard,
  ConsumerOverviewFloatCard2,
  ModalActivityOverview,
} from "../miscellaneous/Cards";

export const ConsumerDetailsModel = () => {
  return (
    <div
      className="drawer flex flex-col bg-modelBg border overflow-auto static pb-12 h-screen"
      style={{ width: "726px" }}
    >
      <div className="flex flex-row justify-between items-center pt-4 pl-7 pb-4 pr-6 bg-white">
        <div className="left flex flex-row items-center gap-4">
          <div className="flex flex-col gap-1">
            <span className="custom-heading-b20 text-lightBlack">
              Raghuvendra Raga
            </span>
            <span className="custom-heading14 font-medium">
              Pay and Use (Major)
            </span>
          </div>
          <div className="flex flex-col bg-tachometerBg rounded-4 py-1 px-2.5">
            <img src={tachometer} />
            <span className="custom-heading font-semibold">245</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="bg-kycPendingBg rounded-100 px-3 py-1">
              <span className="custom-heading14 font-medium text-kycPending">
                KYC Pending
              </span>
            </div>
            <div>
              <DashboardButton
                text={"Verify"}
                filled={true}
                size={"text-custom-md"}
                bold={true}
              />
            </div>
          </div>
        </div>

        <div className="right flex flex-col ">
          <span>Initiated</span>
          <span>Thu Apr 29</span>
          <span>14:27:47 IST 2021</span>
        </div>
      </div>

      <div className="bg-ticketBg flex flex-row justify-between items-center py-3 px-7">
        <div className="flex flex-row items-center gap-0.5">
          <img src={warning} />
          <span className="custom-heading18">2 Active Ticket(s)</span>
        </div>
        <DashboardButton
          icon={ticket}
          text={"View Ticket History"}
          filled={true}
          bold={true}
        />
      </div>

      <div className="mt-1 flex flex-row">
        <div className="left w-3/4 flex flex-col gap-2 items-center bg-white p-6">
          <div className="flex flex-row items-center gap-7">
            <span>B2B Field Executive</span>
            <img src={longBlueArrow} />
            <span>Associate</span>
            <img src={longBlueArrow} />
            <span>Consumer</span>
          </div>
          <div className="w-full flex flex-row justify-around items-center">
            <span className="custom-heading-b20 font-normal text-lightBlack">
              Arun Jha
            </span>
            <span className="custom-heading-b20 font-normal text-lightBlack">
              Anika Singh
            </span>
            <span className="custom-heading-b20 font-normal text-lightBlack">
              Raghuvendra
            </span>
          </div>
        </div>
        <div className="right" style={{ width: "200px" }}>
          <div className="bg-startChatBg shadow-sm flex flex-col items-start py-2 px-4">
            <span className="custom-heading14Black text-startChatText font-medium">
              Start a chat with{" "}
            </span>
            <span className="custom-heading18LightBlack font-normal mb-1">
              Raghuvendra
            </span>
            <DashboardButton
              icon={chat}
              text={"Chat"}
              filled={true}
              bold={true}
            />
          </div>
        </div>
      </div>

      <div className="mt-1">
        <div
          className="top pl-8 py-3 pr-4 flex flex-row justify-between bg-white items-center"
          style={{ borderBottom: "1px solid #E5E5E5" }}
        >
          <span className="custom-heading18 text-lightBlack">
            Last Transaction
          </span>
          <div className="flex flex-row items-center gap-0.5 ">
            <span className="wallet-heading">View All Transactions</span>
            <img src={blueArrow} />
          </div>
        </div>
        <div className="bottom flex flex-row justify-between bg-white pl-8 pt-1.5 pb-3 pr-7">
          <div className="left flex flex-col">
            <span className="custom-heading font-medium">Money added</span>
            <div className="flex flex-row gap-0.5">
              <span className="custom-heading font-medium text-custom-sm">
                Transaction ID:
              </span>
              <span className="custom-heading text-idColor text-custom-sm">
                134676543223456
              </span>
            </div>
            <span className="custom-heading text-idColor text-custom-sm">
              Thu Apr 29 17:57:47 IST 2021
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="custom-heading18LightBlack font-semibold text-lossColor">
              + ₹7,390.00
            </span>
            <div className="flex flex-row">
              <div className="bg-successBg rounded-15 px-2.5 flex items-center flex-row shadow-sm">
                <span className="custom-heading text-custom-sm font-medium text-success ">
                  Success
                </span>
              </div>
              <img src={receipt} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-1">
        <ConsumerOverviewFloatCard
          icon={moneyBag2}
          iconBg={"lightBgColor"}
          heading={"TruCard Cash Wallet"}
          price={"₹1,35,342"}
          bgColor={"white"}
          headingSize={"text-custom-lg"}
          noRounded={true}
        />
      </div>

      <div className="mt-1">
        <ConsumerOverviewFloatCard2
          icon={wallet}
          iconBg={"lightBgColor"}
          heading={"TruCard Bullion Wallet"}
          bgColor={"white"}
          headingSize={"text-custom-lg"}
          noRounded={true}
          model={true}
        />
      </div>

      <div className="mt-1">
        <ConsumerOverviewFloatCard
          icon={moneyBag1}
          iconBg={"goldenBg"}
          heading={"Float"}
          price={"₹1,35,342"}
          bgColor={"white"}
          headingSize={"text-custom-lg"}
          noRounded={true}
        />
      </div>

      <div>
        <ModalActivityOverview />
      </div>

      <div className="mt-1 flex flex-row items-center justify-between bg-white py-4 px-7">
        <div className="left flex flex-row gap-2.5 items-center">
          <div className="bg-mailBg rounded-full p-3">
            <img src={mail} />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="custom-heading18 text-lightBlack">Referral</span>
            <span className="flex flex-row gap-0.5 wallet-heading items-center">
              Referral History <img src={blueArrow} />
            </span>
          </div>
        </div>
        <div className="flex flex-row items-end gap-2">
          <span className="custom-heading14">Total Referrals Sent</span>
          <span className="custom-heading18LightBlack text-custom-xl">232</span>
        </div>
      </div>

      <div className="mt-1 flex flex-row gap-2">
        <div className="left flex flex-row justify-between bg-white py-2.5 pl-7 pr-4 w-full">
          <div className="flex flex-row gap-2 items-center">
            <div className="bg-removePersonBg rounded-full p-3">
              <img src={removePerson} />
            </div>
            <span className="custom-heading text-disable">
              Disable consumer
            </span>
          </div>
          <DashboardButton
            text={"Disable"}
            textColor={"white"}
            bgColor={"btnGreen"}
          />
        </div>

        <div className="left flex flex-row justify-between bg-white py-2.5 pl-7 pr-4 w-full">
          <div className="flex flex-row gap-2 items-center">
            <div className="bg-editPersonBg rounded-full p-3">
              <img src={editPerson} />
            </div>
            <span className="custom-heading text-disable">
              Edit consumer details
            </span>
          </div>
          <DashboardButton
            text={"Disable"}
            textColor={"white"}
            bgColor={"btnGreen"}
          />
        </div>
      </div>
    </div>
  );
};
