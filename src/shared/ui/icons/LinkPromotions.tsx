import * as React from "react";
import type { SVGProps } from "react";

const SvgLinkPromotions = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72} fill="none" viewBox="0 0 72 72" {...props}>
    <rect width={72} height={72} fill="#E4E4E4" rx={36} />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M35.11 32.745a1 1 0 0 1 1.78 0l1.277 2.501a1 1 0 0 0 .734.533l2.772.441a1 1 0 0 1 .55 1.694l-1.983 1.987a1 1 0 0 0-.28.862l.437 2.774a1 1 0 0 1-1.441 1.047l-2.502-1.273a1 1 0 0 0-.907 0l-2.503 1.273a1 1 0 0 1-1.44-1.047l.437-2.774a1 1 0 0 0-.28-.862l-1.985-1.987a1 1 0 0 1 .55-1.694l2.774-.44a1 1 0 0 0 .733-.534zm.505 3.41L36 35.4l.386.755a3 3 0 0 0 2.2 1.6l.838.133-.6.6a3 3 0 0 0-.84 2.587l.132.838-.756-.385a3 3 0 0 0-2.72 0l-.756.385.132-.838a3 3 0 0 0-.84-2.587l-.6-.6.838-.134a3 3 0 0 0 2.2-1.599"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M27 17a1 1 0 0 1 1 1v2h7v-2a1 1 0 1 1 2 0v2h7v-2a1 1 0 1 1 2 0v2h2a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3H24a3 3 0 0 1-3-3V23a3 3 0 0 1 3-3h2v-2a1 1 0 0 1 1-1m-4 12v20a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V29zm26-2H23v-4a1 1 0 0 1 1-1h2v2a1 1 0 1 0 2 0v-2h7v2a1 1 0 1 0 2 0v-2h7v2a1 1 0 1 0 2 0v-2h2a1 1 0 0 1 1 1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLinkPromotions;
