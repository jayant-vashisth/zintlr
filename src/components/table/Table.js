import React, { useState } from "react";
import search from "../../assets/svgs/search.svg";
import { DashboardButton } from "../miscellaneous/Buttons";
import refresh from "../../assets/svgs/refresh.svg";
import excel from "../../assets/svgs/excel.svg";
import csv from "../../assets/svgs/csv.svg";
import filter from "../../assets/svgs/filter.svg";
import arrow from "../../assets/svgs/arrow.svg";
import filledV from "../../assets/svgs/filledV.svg";
import { data } from "../../data";
import { SimpleHoverCards } from "../miscellaneous/HoverCards";

export const Table = ({ setDrawer }) => {
  const zone = ["South", "North", "East", "West"];
  const accounts = [
    "Business",
    "Pay and Use(Minor)",
    "Pay and Use(Major)",
    "Salary",
    "Earner",
  ];
  const KYCData = ["Pending", "In Progress", "Done", "Rejected"];
  const [kyc, setKyc] = useState(false);
  const [zoneHidden, setZoneHidden] = useState(false);
  const [accountType, setAccountType] = useState(false);

  return (
    <div className="mt-2 w-full">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row relative">
          <input
            className="bg-white py-3 pl-5 rounded-4 pr-14"
            style={{
              height: "50px",
              width: "374px",
              border: "1px solid #B5C3D7",
            }}
            type="text"
            placeholder="Search Consumers"
          />
          <div
            className="flex absolute bg-white flex-row items-center justify-center rounded-full"
            style={{ height: "40px", width: "40px", right: "7px", top: "5px" }}
          >
            <img src={search} />
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <DashboardButton icon={refresh} filled={true} small={true} />
          <DashboardButton icon={excel} />
          <DashboardButton icon={csv} />
          <DashboardButton
            icon={filter}
            bgColor={"buttonBlue"}
            text={"Filter"}
            size={"text-custom-md"}
            textColor={"white"}
            bold={true}
            borderNo={true}
          />
        </div>
      </div>
      <div>
        <table className="w-full mt-2">
          <tr className="bg-tableHeader">
            <th className="custom-heading14Black">Consumer Name</th>
            <th>
              <div className="flex flex-row gap-2.5">
                <div className="flex flex-col">
                  <span>Assets</span>
                  <span className="smallBlueText">Total ~₹9M</span>
                </div>
                <img src={filledV} />
              </div>
            </th>
            <th>
              <div className="flex flex-row gap-2.5">
                <div className="flex flex-col">
                  <span>Revenue</span>
                  <span className="smallBlueText">Total ~₹9M</span>
                </div>
                <img src={filledV} />
              </div>
            </th>
            <th className="relative">
              <div
                className="flex flex-row gap-2.5 cursor-pointer"
                onClick={() => {
                  setKyc(!kyc);
                  setZoneHidden(false);
                  setAccountType(false);
                }}
              >
                <span>KYC Status</span>
                <img src={filledV} />
              </div>
              <div
                className={`${!kyc ? `hidden absolute mt-4` : `absolute mt-4`}`}
                style={{ zIndex: "100" }}
              >
                <SimpleHoverCards data={KYCData} />
              </div>
            </th>
            <th>
              <span>Facilitator</span>
            </th>
            <th className="relative">
              <div
                className="flex flex-row gap-2.5 cursor-pointer"
                onClick={() => {
                  setZoneHidden(!zoneHidden);
                  setAccountType(false);
                  setKyc(false);
                }}
              >
                <span>Zone</span>
                <img src={filledV} />
              </div>
              <div
                className={`${
                  !zoneHidden ? `hidden absolute mt-4` : `absolute mt-4`
                }`}
                style={{ zIndex: "100" }}
              >
                <SimpleHoverCards data={zone} />
              </div>
            </th>
            <th className="relative">
              <div
                className="flex flex-row gap-2.5 cursor-pointer"
                onClick={() => {
                  setAccountType(!accountType);
                  setZoneHidden(false);
                  setKyc(false);
                }}
              >
                <span>Account Type</span>
                <img src={filledV} />
              </div>
              <div
                className={`${
                  !accountType ? `hidden absolute mt-4` : `absolute mt-4`
                }`}
                style={{ zIndex: "100" }}
              >
                <SimpleHoverCards data={accounts} />
              </div>
            </th>
            <th>
              <span>TPA</span>
            </th>
          </tr>

          {data.map((ele, ind) => {
            return (
              <tr className={ind % 2 ? `bg-lightBlue` : `bg-white`}>
                <td
                  className="wallet-heading font-medium"
                  onClick={() => {
                    setDrawer(true);
                  }}
                >
                  {ele.consumerName}
                </td>
                <td>
                  <div>
                    <div>{ele.assets.total}</div>
                    <div className="flex flex-row gap-1">
                      <div className="py-1 px-6 bg-bgGold rounded-100">
                        <span className="text-goldText font-semibold text-sm">
                          {ele?.assets?.gold}
                        </span>
                      </div>
                      <div className="py-1 px-6 bg-silverBg rounded-100">
                        <span className="text-silverText font-semibold text-sm">
                          {ele?.assets?.silver}
                        </span>
                      </div>
                      <div className="py-1 px-6 bg-moneyBg rounded-100">
                        <span className="text-buttonBlue font-semibold text-sm">
                          {ele?.assets?.money}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="custom-heading18LightBlack">
                  {ele.assets.total}
                </td>
                <td>{ele.kycStatus}</td>
                <td>
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col">
                      <span className="text-Light-Black font-sideBarFont text-xs font-normal opacity-70">
                        B2B Field Executive
                      </span>
                      <span>{ele?.fieldExec}</span>
                    </div>
                    <img src={arrow} />
                    <div className="flex flex-col">
                      <span className="text-Light-Black font-sideBarFont text-xs font-normal opacity-70">
                        Associate
                      </span>
                      <span>{ele?.associate}</span>
                    </div>
                  </div>
                </td>
                <td className="custom-heading14">{ele?.zone}</td>
                <td className="custom-heading14">{ele?.accountType}</td>
                <td className="custom-heading14">{ele?.tpa}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
