import * as React from "react";
import type { SVGProps } from "react";

const SvgLinkAccrual = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72} fill="none" viewBox="0 0 72 72" {...props}>
    <rect width={72} height={72} fill="#E4E4E4" rx={36} />
    <path
      fill="#000"
      d="M39 27a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zM38 33a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1M44.555 41.832a1 1 0 0 0-1.11-1.664l-5.318 3.545-3.42-3.42a1 1 0 0 0-1.262-.125l-6 4a1 1 0 0 0 1.11 1.664l5.318-3.545 3.42 3.42a1 1 0 0 0 1.262.125z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M30 25a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 10a4 4 0 0 0 1-7.874V31a1 1 0 0 1-1 1h-3.874c.444 1.725 2.01 3 3.874 3m-3.874-5H29v-2.874A4.01 4.01 0 0 0 26.126 30"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M20 23a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3H23a3 3 0 0 1-3-3zm3-1h26a1 1 0 0 1 1 1v26a1 1 0 0 1-1 1H23a1 1 0 0 1-1-1V23a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLinkAccrual;
