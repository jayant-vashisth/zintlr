import React from "react";
import { Sidebar } from "../components/sidebar/Sidebar";
import { ConsumerOverview } from "../components/consumer/ConsumerOverview";
import { ManageConsumers } from "../components/manageConsumers/ManageConsumers";

export const ManageConsumer = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="left h-screen" style={{ width: "285px" }}>
        <Sidebar />
      </div>
      <div
        className="right overflow-auto"
        style={{ width: "calc(100vw - 285px)" }}
      >
        <ManageConsumers />
      </div>
    </div>
  );
};
