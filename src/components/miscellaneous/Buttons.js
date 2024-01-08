import React from "react";

export const SideBarButton = ({ active, text, asset, setActive }) => {
  return (
    <button
      class={`flex flex-row gap-3 text-custom-lg py-2 pl-6 ${
        active && `bg-buttonBlue rounded-30`
      }`}
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
  fcn,
  icon,
  text,
  iconRight,
  size,
  small,
  bgColor,
  textColor,
  bold,
  borderNo,
}) => {
  return (
    <button
      class={`flex flex-row py-1.5 ${small ? `px-2` : `px-3`} ${
        bgColor
          ? `bg-${bgColor}`
          : filled
          ? `bg-lightBlack`
          : `bg-white border-lightBlack-400`
      } items-center gap-2 rounded-4`}
      style={!borderNo ? { border: "1px solid #313945" } : null}
      onClick={() => {
        fcn();
      }}
    >
      {icon && <img src={icon} style={{ width: "23px", height: "24px" }} />}
      {text && (
        <span
          className={`font-sideBarFont ${
            bold ? `font-semibold` : `font-medium`
          } ${
            textColor
              ? `text-${textColor}`
              : filled
              ? `text-white`
              : `text-lightBlack`
          } ${size}`}
        >
          {text}
        </span>
      )}
      {iconRight && (
        <img src={iconRight} style={{ width: "13px", height: "13px" }} />
      )}
    </button>
  );
};

export const Tags = ({ text, textColor, bgColor }) => {
  return (
    <div
      className={`px-4 py-1 rounded-100 inline-flex items-center justify-center`}
      style={{ background: bgColor }}
    >
      <span
        className={`custom-heading14Black font-medium text-${textColor}`}
        style={{ color: textColor }}
      >
        {text}
      </span>
    </div>
  );
};
