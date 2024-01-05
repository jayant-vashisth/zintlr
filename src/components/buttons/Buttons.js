import React from "react";

export const SideBarButton = ({ active, text, asset, setActive }) => {
  return (
    <button
      class={`flex flex-row py-2 pl-6 ${active && `bg-buttonBlue rounded-30`}`}
      style={{ gap: "14px", fontSize: "18px" }}
      onClick={() => {
        setActive(text);
      }}
    >
      <img src={asset} style={{ width: "23px", height: "24px" }} />
      <span
        className={`font-sideBarFont ${
          active ? `text-white` : `text-black opacity-50`
        }`}
      >
        {text}
      </span>
    </button>
  );
};

export const DashboardButton = ({
  filled,
  onClick,
  icon,
  text,
  iconRight,
  size,
}) => {
  return (
    <button
      class={`flex flex-row py-2 px-3 ${
        filled ? `bg-lightBlack` : `bg-white border-lightBlack-400`
      } items-center gap-2 rounded-4`}
      style={{ border: "1px solid #313945" }}
      onClick={() => {
        onclick();
      }}
    >
      {icon && <img src={icon} style={{ width: "23px", height: "24px" }} />}
      <span
        className={`font-sideBarFont font-medium ${
          filled ? `text-white` : `text-lightBlack`
        } ${size}`}
      >
        {text}
      </span>
      {iconRight && (
        <img src={iconRight} style={{ width: "13px", height: "13px" }} />
      )}
    </button>
  );
};
