import React from "react";

const FormatchDate = ({isHighLight, children}) => {
  return (
    <div>
      <span className={`text-sm text-[#76ABAE] ${isHighLight ? "text-[#EEEEEE]" : ""}`}>
        {children}
      </span>
    </div>
  );
};

export default FormatchDate;
