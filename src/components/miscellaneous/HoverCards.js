import React from "react";

export const SimpleHoverCards = ({ data }) => {
  return (
    <div className="flex flex-col gap-3 pt-3 pl-3 pb-3 pr-6 bg-white shadow-lg whitespace-nowrap" style={{ zIndex: "999" }}>
      {data?.map((ele, ind) => {
        return (
          <div key={ind} className="flex flex-row gap-3 items-center">
            <input type="checkbox" />
            <span className="custom-heading14">{ele}</span>
          </div>
        );
      })}
    </div>
  );
};
