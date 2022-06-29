import * as React from "react";

function CloseSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="prefix__icon prefix__icon-tabler prefix__icon-tabler-square-x"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#00abfb"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <rect x={4} y={4} width={16} height={16} rx={2} />
      <path d="M10 10l4 4m0-4l-4 4" />
    </svg>
  );
}

const MemoCloseSVG = React.memo(CloseSVG);
export default MemoCloseSVG;
