import React, { useState } from "react";
import { DashboardButton, Tags } from "../miscellaneous/Buttons";
import refresh from "../../assets/svgs/refresh.svg";
import excel from "../../assets/svgs/excel.svg";
import csv from "../../assets/svgs/csv.svg";
import filter from "../../assets/svgs/filter.svg";
import arrow from "../../assets/svgs/arrow.svg";
import filledV from "../../assets/svgs/filledV.svg";
import { data } from "../../data";
import { SimpleHoverCards } from "../miscellaneous/HoverCards";
import { Pagination } from "../pagination/Pagination";

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

  const [search, setSearch] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-2 w-full">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row relative">
          <input
            className="bg-white py-3 pl-5 rounded-4 pr-14"
            onChange={(e) => setSearch(e.target.value)}
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
            <img src={search} alt="search" />
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
                <img src={filledV} alt="filledV" />
              </div>
            </th>
            <th>
              <div className="flex flex-row gap-2.5">
                <div className="flex flex-col">
                  <span>Revenue</span>
                  <span className="smallBlueText">Total ~₹9M</span>
                </div>
                <img src={filledV} alt="filledV" />
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
                <img src={filledV} alt="filledV" />
              </div>
              <div
                className={`${
                  !kyc ? `hidden absolute mt-4 z-50` : `absolute mt-4 z-50`
                }`}
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
                <img src={filledV} alt="filledV" />
              </div>
              <div
                className={`${
                  !zoneHidden
                    ? `hidden absolute mt-4 z-50`
                    : `absolute mt-4 z-50`
                }`}
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
                <img src={filledV} alt="filledV" />
              </div>
              <div
                className={`${
                  !accountType
                    ? `hidden absolute mt-4 z-50`
                    : `absolute mt-4 z-50`
                }`}
              >
                <SimpleHoverCards data={accounts} />
              </div>
            </th>
            <th>
              <span>TPA</span>
            </th>
          </tr>

          {currentItems.map((ele, ind) => {
            return (
              <tr key={ind} className={ind % 2 ? `bg-lightBlue` : `bg-white`}>
                <td
                  className="wallet-heading font-medium flex flex-row gap-1 items-center"
                  onClick={() => {
                    setDrawer(true);
                  }}
                >
                  <span className="cursor-pointer">{ele.consumerName}</span>
                  {ele?.notif ? (
                    <div className="w-6 py-1 rounded-100 flex flex-row justify-center items-center bg-redChip">
                      <span className="text-white smallBlueText font-extrabold">
                        {ele?.notif}
                      </span>
                    </div>
                  ) : null}
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
                <td>
                  <Tags
                    text={ele?.kycStatus}
                    textColor={
                      ele.kycStatus == "done"
                        ? "#27A607"
                        : ele?.kycStatus == "pending"
                        ? "#FF4444"
                        : "#FF4444"
                    }
                    bgColor={
                      ele.kycStatus == "done"
                        ? "#EAFFE0"
                        : ele?.kycStatus == "pending"
                        ? "#FFE9E9"
                        : "#FFE9E9"
                    }
                  />
                </td>
                <td>
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col">
                      <span className="text-Light-Black font-sideBarFont text-xs font-normal opacity-70">
                        B2B Field Executive
                      </span>
                      <span>{ele?.fieldExec}</span>
                    </div>
                    <img src={arrow} alt="arrow" />
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

      <div className="w-full flex justify-center items-center">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
          paginate={paginate}
          currentPage={currentPage}
          totalPages={data.length / 10}
        />
      </div>
    </div>
  );
};
