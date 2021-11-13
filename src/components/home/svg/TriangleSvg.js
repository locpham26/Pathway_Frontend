import React from "react";

const TriangleSvg = ({ className }) => (
  <svg
    className={className}
    width={38}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.416 30.048L19.032 3l15.616 27.048H3.416z"
      stroke="#337780"
      strokeWidth={3}
    />
  </svg>
);

export default TriangleSvg;
