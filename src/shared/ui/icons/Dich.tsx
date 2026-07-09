import * as React from "react";
import type { SVGProps } from "react";

const SvgDich = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={86} height={20} fill="none" viewBox="0 0 86 20" {...props}>
    <g fillRule="evenodd" clipPath="url(#dich_svg__clip0_1_2726)" clipRule="evenodd">
      <path
        fill="#000"
        d="M17.989 13.384V0H4.724L2.106 13.384H0V20h3.25l.3-3.217h12.844L16.695 20h3.25v-6.616zm-3.76 0H6.017L7.792 3.308h6.437zM36.127 0 26.23 11.654V0h-3.726v16.783h3.67l9.867-11.591v11.591h3.726V0zM55.257 0h3.76v16.783h-3.76v-3.611H49.33c-3.91 0-6.558-2.641-6.558-6.586V0h3.76v6.252c0 2.337 1.203 3.49 3.369 3.49h5.356zM71.62 3.824h-5.745V0h-3.76v16.783h9.505c3.91 0 6.857-2.64 6.857-6.586 0-3.945-2.948-6.373-6.857-6.373m-.271 9.5h-5.475V7.192h5.475c2.225 0 3.369.94 3.369 3.004s-1.144 3.126-3.37 3.126"
      />
      <path
        fill="red"
        d="M86.004 14.507c0 1.488-1.203 2.58-2.677 2.58s-2.647-1.093-2.647-2.58v-.032a2.68 2.68 0 0 1 .781-1.873 2.63 2.63 0 0 1 1.866-.766h.01a2.64 2.64 0 0 1 1.882.778 2.68 2.68 0 0 1 .785 1.893"
      />
    </g>
    <defs>
      <clipPath id="dich_svg__clip0_1_2726">
        <path fill="#fff" d="M0 0h86v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDich;
