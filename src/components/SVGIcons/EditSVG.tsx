import * as React from "react";

function EditSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="prefix__icon prefix__icon-tabler prefix__icon-tabler-edit"
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
      <path d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3" />
      <path d="M9 15h3l8.5-8.5a1.5 1.5 0 00-3-3L9 12v3M16 5l3 3" />
    </svg>
  );
}

const MemoEditSVG = React.memo(EditSVG);
export default MemoEditSVG;
