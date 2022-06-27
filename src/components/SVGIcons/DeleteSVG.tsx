import * as React from "react";

function DeleteSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="prefix__icon prefix__icon-tabler prefix__icon-tabler-trash"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#2c3e50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3" />
    </svg>
  );
}

const MemoDeleteSVG = React.memo(DeleteSVG);
export default MemoDeleteSVG;
