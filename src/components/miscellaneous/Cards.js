import React from "react";
import MoneyBag from "../../assets/svgs/moneyBag.svg";
import { DashboardButton } from "./Buttons";
import banner1 from "../../assets/images/banner1.png";
import personSetting from "../../assets/svgs/personSetting.svg";
import personAdd from "../../assets/svgs/personAdd.svg";
import i from "../../assets/svgs/i.svg";
import v from "../../assets/svgs/v.svg";
import totalImg from "../../assets/svgs/total.svg";
import arrowRight from "../../assets/svgs/arrowRight.svg";
import carbonChart from "../../assets/svgs/carbonChart.svg";
import { useNavigate } from "react-router-dom";
import { HorizontalBarChart, LineChart, BarChart } from "../charts/Chart";

export const SidebarCard = () => {
  return (
    <div
      className="w-full pl-6 pr-2 py-3 rounded-tl-0 rounded-tr-15 rounded-br-15 rounded-bl-15 opacity-90 relative"
      style={{
        background: "linear-gradient(180deg, #3CBEE7 0%, #639EE3 100%)",
      }}
    >
      <img
        src={MoneyBag}
        style={{ position: "absolute", top: "0px", left: "0px" }}
        alt="MoneyBag"
      />
      <div className="bg-white rounded-15 py-4">
        <div
          className="flex flex-row justify-center items-center gap-3"
        >
          <div className="flex flex-col">
            <div className="flex flex-row">
              <span className="text-lightBlack font-normal">TruCoin</span>
              <span className="text-gold font-medium">&nbsp;Gold</span>
            </div>
            <span className="text-lightGold text-custom-sm">
              $6.18(+1.82%)
            </span>
          </div>
          <span className="text-lightBlack font-semibold">7.3k gm</span>
        </div>

        <div className="flex flex-row justify-center items-center gap-3 mt-3">
          <div>
            <div>
              <span className="text-lightBlack font-normal">TruCoin</span>
              <span className="text-gold font-medium">&nbsp;Silver</span>
            </div>
            <span className="text-lightGold text-custom-sm">
              $6.18(+1.82%)
            </span>
          </div>
          <span className="text-lightBlack font-semibold">8.3k gm</span>
        </div>
      </div>
    </div>
  );
};

export const BannerCard1 = ({ heading, para, bt1, bt2, manageConsumers }) => {
  const navigate = useNavigate();

  const NavigateToManageCon = () => {
    navigate("/manage-consumer");
  };

  const NavigateToConsumer = () => {
    navigate("/");
  };

  return (
    <div
      className={`flex flex-row justify-between pt-4 pl-6 ${
        !manageConsumers && `pb-4`
      } rounded-15 bg-lightBlue height-full`}
      style={{
        boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.05)",
        minHeight: "153px",
      }}
    >
      <div className="flex flex-col gap-4">
        {manageConsumers ? (
          <div className="flex flex-col gap-3">
            <div>
              <span
                onClick={() => {
                  NavigateToConsumer();
                }}
                className="custom-heading font-medium text-breadCrumbs cursor-pointer"
              >
                Consumer &gt; Manage Consumers
              </span>
            </div>
            <span className="custom-heading18 font-medium">Actions</span>
          </div>
        ) : (
          <div className="flex flex-col gap-2 text-left">
            <span className="font-medium" style={{ fontSize: "25px" }}>
              {heading}
            </span>
            <span
              className="text-paraColor text-custom-md"
            >
              {para}
            </span>
          </div>
        )}
        <div className="flex flex-row gap-2">
          <DashboardButton
            filled={true}
            text={bt1}
            icon={personAdd}
            size={"text-base"}
          />
          {!manageConsumers && (
            <DashboardButton
              filled={false}
              text={bt2}
              icon={personSetting}
              size={"text-base"}
              fcn={NavigateToManageCon}
            />
          )}
        </div>
      </div>
      <img src={banner1} className="z-10" alt="banner1" />
    </div>
  );
};

export const BannerCard2 = ({
  icon1,
  text1,
  bigNum,
  text2,
  btnText,
  bgColor,
}) => {
  return (
    <div
      className={`p-6 rounded-15`}
      style={{
        background: bgColor,
        boxShadow: " 0px 5px 10px 0px rgba(0, 0, 0, 0.05)",
        minHeight: "153px",
        // opacity:"0.05"
      }}
    >
      <div className="flex flex-col mb-4">
        <div className="flex flex-row items-baseline gap-1">
          <div className="flex flex-row items-center gap-1">
            <img src={icon1} alt="icon1" />
            {text1 && (
              <span
                className="font-normal text-left text-custom-lg"
              >
                {text1}
              </span>
            )}
          </div>
          <span
            className="font-semibold text-left"
            style={{ fontSize: "28px" }}
          >
            {bigNum}
          </span>
        </div>
        <span className="font-normal text-left text-custom-lg">
          {text2}
        </span>
      </div>
      <DashboardButton filled={true} text={btnText} size={"text-base"} />
    </div>
  );
};

export const ConsumerOverviewCardTop = ({ total, num1, num2, num3, num4 }) => {
  return (
    <div className="flex flex-row mt-3 relative w-full">
      <div
        className="flex flex-row items-center gap-5 bg-topCard p-5 rounded-10"
        style={{ minWidth: "290px" }}
      >
        <img src={totalImg} alt="totalImg" />
        <div className="flex flex-col text-left">
          <span>Total Consumers</span>
          <span
            className="font-sideBarFon font-semibold"
            style={{ fontSize: "35px" }}
          >
            {total}
          </span>
        </div>
      </div>

      <div
        className="flex flex-col rounded-tr-10 rounded-br-10 gap-5 p-7 w-full "
        style={{
          border: "1px solid #C6CEF0",
          borderLeft: "none",
          marginLeft: "-9px",
        }}
      >
        <div className="flex flex-row gap-10 w-full justify-around">
          <div className="flex flex-row gap-13 items-center">
            <div className="flex flex-row gap-1 items-center">
              <span
                className="font-sideBarFont font-normal"
                style={{ fontSize: "16px" }}
              >
                Direct Consumers
              </span>
              <img src={i} alt="i" />
            </div>
            <span
              className="font-sideBarFont font-medium"
              style={{ fontSize: "20px" }}
            >
              {num1}
            </span>
          </div>

          <div className="flex flex-row gap-10 items-center">
            <div className="flex flex-row gap-1 items-center">
              <span
                className="font-sideBarFont font-normal"
                style={{ fontSize: "16px" }}
              >
                Through Field Executives
              </span>
              <img src={i} alt="i" />
            </div>
            <span
              className="font-sideBarFont font-medium"
              style={{ fontSize: "20px" }}
            >
              {num2}
            </span>
          </div>
        </div>

        <div className="flex flex-row gap-10  justify-around">
          <div className="flex flex-row gap-10 items-center">
            <div className="flex flex-row gap-1 items-center">
              <span
                className="font-sideBarFont font-normal"
                style={{ fontSize: "16px" }}
              >
                Through Associates
              </span>
              <img src={i} alt="i" />
            </div>
            <span
              className="font-sideBarFont font-medium"
              style={{ fontSize: "20px" }}
            >
              {num3}
            </span>
          </div>

          <div className="flex flex-row gap-10 items-center">
            <div className="flex flex-row gap-1 items-center">
              <span
                className="font-sideBarFont font-normal"
                style={{ fontSize: "16px" }}
              >
                Through Sales Executives
              </span>
              <img src={i} alt="i" />
            </div>
            <span
              className="font-sideBarFont font-medium"
              style={{ fontSize: "20px" }}
            >
              {num4}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ConsumerOverviewGraphCard = ({ total }) => {
  return (
    <div
      className="flex flex-row p-2 gap-5 rounded-10 justify-around"
      style={{ border: "1px solid #C6CEF0" }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col items-start gap-1">
          <span>Total Earnings</span>
          <span>{total}</span>
        </div>
        <DashboardButton
          text={"Past Week"}
          iconRight={v}
          size={"text-custom-md"}
        />
      </div>
      <div className="flex h-28">
        <LineChart />
      </div>
    </div>
  );
};

export const ConsumerOverviewFloatCard = ({
  icon,
  iconBg,
  heading,
  price,
  bgColor,
  headingSize,
  noRounded,
}) => {
  return (
    <div
      className={`shadow-md flex flex-row justify-between w-full p-5 items-center bg-${bgColor} ${
        !noRounded && `rounded-10`
      }`}
      style={{ height: "90px", background: bgColor }}
    >
      <div className="flex flex-row gap-3 items-center">
        <div
          className={`${
            iconBg ? `bg-${iconBg}` : `bg-white`
          }  rounded-full flex items-center justify-center`}
          style={{ height: "40px", width: "40px" }}
        >
          <img src={icon} alt="icon" />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <span className={`custom-heading ${headingSize}`}>{heading}</span>
          <span className="wallet-heading flex flex-row items-center gap-0.5">
            Wallet History <img src={arrowRight} alt="arrowRight" />
          </span>
        </div>
      </div>
      <div>
        <span className="custom-heading-b20">{price}</span>
      </div>
    </div>
  );
};

export const ConsumerOverviewFloatCard2 = ({
  icon,
  iconBg,
  heading,
  price,
  bgColor,
  headingSize,
  noRounded,
  model,
}) => {
  return (
    <div
      className={`shadow-md flex flex-row justify-between w-full p-5 items-center bg-${bgColor} ${
        !noRounded && `rounded-10`
      }`}
      style={{ height: "132px", background: bgColor }}
    >
      <div className="flex flex-row gap-3 items-center">
        <div
          className="bg-white rounded-full flex items-center justify-center"
          style={{ height: "40px", width: "40px" }}
        >
          <img src={icon} alt="icon" />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <span className={`custom-heading ${headingSize}`}>{heading}</span>
          <span className="wallet-heading flex flex-row items-center gap-0.5">
            Wallet History <img src={arrowRight} alt="arrowRight" />
          </span>
        </div>
      </div>
      <div className={`flex flex-col ${model && `items-end`} gap-1`}>
        <div>
          <div className="flex flex-row gap-8 items-center">
            <div className="px-6 py-1 bg-goldBgColor rounded-15">
              <span className="goldText">Gold</span>
            </div>
            <div
              className={
                model
                  ? `flex flex-row items-center gap-13`
                  : `flex flex-col items-end gap-1`
              }
            >
              <span
                className={
                  model ? `custom-heading18LightBlack` : `custom-heading14`
                }
              >
                4,232 gm
              </span>
              <div
                className={`${model ? `px-2.5` : `px-6`} py-1 ${
                  model ? "bg-priceBg" : "bg-white"
                } rounded-15`}
              >
                <span className="wallet-heading"> ₹9242.5</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-row gap-8 items-center">
            <div
              className={`px-6 py-1 ${
                model ? `bg-silverChipBg` : `bg-white`
              } rounded-15`}
            >
              <span className="goldText" style={{ color: "#A7A7A7" }}>
                Silver
              </span>
            </div>
            <div
              className={
                model
                  ? `flex flex-row items-center gap-4`
                  : `flex flex-col items-end gap-1`
              }
            >
              <span
                className={
                  model ? `custom-heading18LightBlack` : `custom-heading14`
                }
              >
                134,232 gm
              </span>
              <div
                className={`${model ? `px-2.5` : `px-6`} py-1 ${
                  model ? "bg-priceBg" : "bg-white"
                } rounded-15`}
              >
                <span className="wallet-heading">
                  {model ? `₹49,242.5` : `₹922.5`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ConsumerAnalysisBlock = ({ icon, heading, price, bgColor }) => {
  return (
    <div className="border border-borderColor rounded-10 shadow-lg">
      <div className="top pt-6 pl-4 pr-2">
        <span className="custom-heading18 ">Consumer Analysis</span>

        <div
          className="flex flex-row justify-between items-end w-full"
          style={{ borderBottom: "1px solid #E2E6F7" }}
        >
          <div className="flex flex-row">
            <span
              className="w-24 text-center custom-heading pb-1"
              style={{ borderBottom: "2px solid #3896FF", color: "#3896FF" }}
            >
              Activity
            </span>
            <span className="w-24 text-center custom-heading pb-1">Stock</span>
            <span className="w-24 text-center custom-heading pb-1">Volume</span>
          </div>
          <div className="flex flex-row gap-2 mb-1.5">
            <DashboardButton text={"Past Week"} size={"text-custom-sm"} />
            <DashboardButton
              text={"Past Month"}
              filled={true}
              size={"text-custom-sm"}
            />
            <DashboardButton text={"Past Year"} size={"text-custom-sm"} />
            <DashboardButton text={"All time"} size={"text-custom-sm"} />
          </div>
        </div>
      </div>

      <div className="bottom pt-3 pl-4 pr-2 pb-8">
        <div className="flex flex-row gap-1 items-end justify-end w-full">
          <DashboardButton
            text={"Filter By associates"}
            iconRight={v}
            size={"text-custom-md"}
          />
          <DashboardButton
            text={"Filter By Zone"}
            iconRight={v}
            size={"text-custom-md"}
          />
          <DashboardButton
            text={"Filter By Account Type"}
            iconRight={v}
            size={"text-custom-md"}
          />
        </div>
        <div
          className="mt-4 mx-auto flex flex-col gap-2 w-4/5"
          style={{ height: "285px" }}
        >
          <HorizontalBarChart />
          <div className="w-full flex flex-row justify-end items-end text-right">
            <span className="custom-heading14Black text-chartLabel">
              Number Of Consumers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DashboardGraphCards = ({
  text,
  btnText,
  price,
  bgColor,
  primaryColor,
  secColor,
}) => {
  return (
    <div className="border border-borderColor rounded-10 shadow-md flex flex-col mt-3 pt-6 pl-6 pr-3 pb-8">
      <div className="flex flex-row items-center justify-between">
        <span className="custom-heading18">{text}</span>
        {btnText && (
          <DashboardButton
            text={btnText}
            iconRight={v}
            size={"text-custom-md"}
          />
        )}
      </div>
      <div className="flex flex-row gap-2 mt-3">
        <DashboardButton text={"Past Week"} size={"text-custom-sm"} />
        <DashboardButton
          text={"Past Month"}
          filled={true}
          size={"text-custom-sm"}
        />
        <DashboardButton text={"Past Year"} size={"text-custom-sm"} />
        <DashboardButton text={"All time"} size={"text-custom-sm"} />
      </div>
      <div
        className="mt-8 mx-auto"
        style={{
          height: "263px",
          width: "350px",
        }}
      >
        <BarChart primaryColor={primaryColor} secColor={secColor} />
      </div>
    </div>
  );
};

export const ModalActivityOverview = ({ text, btnText, price, bgColor }) => {
  return (
    <div className="bg-white mt-1 pt-3 pl-7 pr-8 pb-8">
      <div className="flex flex-row items-center gap-2">
        <div className="bg-carbonBgBlue rounded-full p-3">
          <img src={carbonChart} alt="carbonRight" />
        </div>
        <span className="custom-heading18 text-lightBlack">
          Activit Overview
        </span>
      </div>

      <div className="flex flex-row gap-2 items-center mt-4">
        <DashboardButton text={"Past Week"} filled={true} />
        <DashboardButton text={"Past Month"} />
        <DashboardButton text={"Past Year"} />
        <DashboardButton text={"All time"} />
      </div>

      <div style={{ height: "200px", width: "100%" }}></div>
    </div>
  );
};
