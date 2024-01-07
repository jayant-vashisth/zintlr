import React, { useState, useEffect } from "react";
import { Navbar } from "../navbar/Navbar";
import { Banner } from "../banner/Banner";
import { Transition } from "@headlessui/react";
import { Table } from "../table/Table";
import { ConsumerDetailsModel } from "../model/ConsumerDetailsModel";

export const ManageConsumers = () => {
  const [drawer, setDrawer] = useState(false);

  const handleOutsideClick = (event) => {
    const drawerElement = document.getElementById("drawer");
    if (drawerElement && !drawerElement.contains(event.target)) {
      setDrawer(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="overflow-auto">
        <Transition
          show={drawer}
          enter="transition-transform duration-5000 ease-out"
          enterFrom="transform translate-x-full"
          enterTo="transform translate-x-0"
          leave="transition-transform duration-5000 ease-out"
          leaveFrom="transform translate-x-0"
          leaveTo="transform translate-x-full"
          className="absolute right-0 z-50"
        >
          <div id="drawer" className="h-screen static">
            <ConsumerDetailsModel />
          </div>
        </Transition>
      </div>
      <div className="mx-12">
        <Navbar />
        <Banner ManageConsumers={true} />

        <div className="consumer-overview mt-6">
          <span className="flex text-left custom-heading18">
            Consumers Overview
          </span>
          <div className="flex flex-row gap-2">
            <Table setDrawer={setDrawer} />
          </div>
        </div>
      </div>
    </div>
  );
};
