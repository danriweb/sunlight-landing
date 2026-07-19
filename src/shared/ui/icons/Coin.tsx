import * as React from "react";
import type { SVGProps } from "react";

const SvgCoin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M10 16.667a6.667 6.667 0 1 0 0-13.334 6.667 6.667 0 0 0 0 13.334m0 1.666a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M12.441 6.72v1.874q-.924-.886-2.074-.886-.977 0-1.621.63-.628.614-.628 1.653 0 1.074.662 1.722.628.579 1.552.579 1.272 0 2.109-.92v1.857q-.924.562-2.231.562-1.761 0-2.79-1.056-1.045-1.057-1.045-2.692 0-1.687 1.115-2.778Q8.572 6.21 10.436 6.21q1.064 0 2.005.51"
    />
  </svg>
);
export default SvgCoin;
