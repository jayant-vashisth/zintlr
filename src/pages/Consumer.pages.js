import React from "react";
import { Sidebar } from "../components/sidebar/Sidebar";
import { ConsumerOverview } from "../components/consumer/ConsumerOverview";

export const Consumer = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="left h-screen" style={{ width: "285px" }}>
        <Sidebar />
      </div>
      <div className="right overflow-auto pb-10" style={{ width: "calc(100vw - 285px)" }}>
        <ConsumerOverview />
      </div>
    </div>
  );
};
