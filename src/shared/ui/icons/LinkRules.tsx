import * as React from "react";
import type { SVGProps } from "react";

const SvgLinkRules = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72} fill="none" viewBox="0 0 72 72" {...props}>
    <rect width={72} height={72} fill="#E4E4E4" rx={36} />
    <path
      fill="#000"
      d="M27 27a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1M27 32a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H28a1 1 0 0 1-1-1M28 36a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M27 18h24a5 5 0 0 1 5 5v3a3 3 0 0 1-3 3h-5v20a5 5 0 0 1-5 5H21a5 5 0 0 1-5-5v-3a3 3 0 0 1 3-3h3V23a5 5 0 0 1 5-5m-3 5a3 3 0 0 1 3-3h20c-.628.836-1 1.874-1 3v26a3 3 0 0 1-6 0v-3a3 3 0 0 0-3-3H24zm29 4h-5v-4a3 3 0 1 1 6 0v3a1 1 0 0 1-1 1M38 49c0 1.126.372 2.164 1 3H21a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLinkRules;
