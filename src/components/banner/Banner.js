import React from "react";
import { BannerCard1, BannerCard2 } from "../miscellaneous/Cards";
import banner1 from "../../assets/svgs/banner2.svg";
import banner2 from "../../assets/svgs/banner3.svg";
import banner3 from "../../assets/svgs/banner4.svg";

export const Banner = ({ ManageConsumers }) => {


  return (
    <div className="mt-4 flex flex-row gap-2 justify-between">
      <div style={{ width: "45.45%" }}>
        <BannerCard1
          heading={"Hello Shakir!"}
          para={"You have 134 consumers this week."}
          bt1={"Add Consumers"}
          bt2={"Manage Consumers"}
          manageConsumers={ManageConsumers}
        />
      </div>

      <div style={{ width: "18.18%" }}>
        <BannerCard2
          icon1={banner1}
          text1={" You have"}
          bigNum={" 276"}
          text2={"KYC approval pending"}
          btnText={"View List"}
          bgColor={"rgba(204, 127, 56, 0.2)"}
        />
      </div>

      <div style={{ width: "18.18%" }}>
        <BannerCard2
          icon1={banner2}
          text1={"You have"}
          bigNum={"276"}
          text2={"KYC approval pending"}
          btnText={"View List"}
          bgColor={"rgba(217.5, 73.5, 73.5, 0.2)"}
        />
      </div>

      <div style={{ width: "18.18%" }}>
        <BannerCard2
          icon1={banner3}
          text1={"You have"}
          bigNum={"276"}
          text2={"KYC approval pending"}
          btnText={"View List"}
          bgColor={"rgba(66, 126, 212.5, 0.2)"}
        />
      </div>
    </div>
  );
};
