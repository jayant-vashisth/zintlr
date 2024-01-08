import React from "react";
import notif from "../../assets/svgs/notif.svg";
import folder from "../../assets/svgs/folder.svg";
import file from "../../assets/svgs/file.svg";
import money from "../../assets/svgs/money.svg";
import navGraph from "../../assets/svgs/navGraph.svg";
import growth from "../../assets/svgs/growth.svg";
import profile from "../../assets/svgs/profile.svg";
import circle from "../../assets/svgs/circle.svg";
import v from "../../assets/svgs/v.svg";
import search from "../../assets/svgs/search.svg";

export const Navbar = () => {
  return (
    <div className="mt-4 flex flex-row justify-between w-full items-center">
      <div className="flex flex-row relative">
        <input
          className="bg-lightBlue py-3 pl-5 rounded-30 pr-14"
          style={{ height: "50px", width: "374px" }}
          type="text"
          placeholder="Search (Eg: Rewards)"
        />
        <div
          className="flex absolute bg-white flex-row items-center justify-center rounded-full"
          style={{ height: "40px", width: "40px", right: "7px", top: "5px" }}
        >
          <img src={search} alt="search" />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-row gap-4 items-center">
          <div>
            <img src={notif} alt="notif" />
          </div>
          <div>
            <img src={folder} alt="folder" />
          </div>
          <div>
            <img src={file} alt="file" />
          </div>
          <div>
            <img src={money} alt="money" />
          </div>
        </div>

        <div
          className="flex flex-row p-4 rounded-10 gap-4"
          style={{ border: "1px solid #C6CEF0" }}
        >
          <div>
            <span className="text-gold font-semibold">Gold</span>
          </div>
          <div>
            <img src={navGraph} alt="navGraph" />
            <span className="text-navGold">+0.34%</span>
          </div>
          <div>
            <span className="flex flex-row font-medium">
              Buy: ₹7,390.00 <img className="ml-2" src={growth} alt="growth" />
            </span>
            <span className="flex flex-row font-medium">
              Sell: ₹7,090.00 <img className="ml-2" src={growth} alt="growth" />
            </span>
          </div>
        </div>

        <div className="flex flex-row relative items-center bg-lightBlue rounded-10 pl-4 pr-6">
          <img
            style={{ width: "53px", height: "53px" }}
            src={profile}
            alt="profile"
          />
          <img
            className="absolute"
            style={{ left: "-3px", bottom: "-6px" }}
            src={circle}
          />
          <img className="ml-4" src={v} alt="v" />
        </div>
      </div>
    </div>
  );
};
