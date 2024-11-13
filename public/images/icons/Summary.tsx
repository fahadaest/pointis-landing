import React from "react";

export default function Summary({
  props,
}: Readonly<{ props?: React.SVGProps<SVGSVGElement> }>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      viewBox="0 0 20 20"
      {...(props || {})}
    >
      <path fill="currentColor" d="M1 7h18v2H1zm0 4h14v2H1z" />
    </svg>
  );
}
