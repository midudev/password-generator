import * as React from "react"

const CopyIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72 72"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="#D0CFCE" d="M12.802 24.086h34.882V59.03H12.802z" />
    <path fill="#FFF" d="M24.894 12.081h34.901v34.786H24.894z" />
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d="M46.801 51.984v7.013c0 .55-.45 1-1 1h-33c-.55 0-1-.45-1-1v-33a1 1 0 0 1 1-1h7.082" />
      <path d="M58.802 46.997h-33c-.55 0-1-.45-1-1v-33a1 1 0 0 1 1-1h33c.55 0 1 .45 1 1v33c0 .55-.45 1-1 1z" />
    </g>
  </svg>
)

export default CopyIcon
