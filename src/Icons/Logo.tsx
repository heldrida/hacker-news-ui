import React from 'react'

const Logo = ({ black }: { black?: boolean }) => {
  return (!black && (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="M5 5v22h22V5zm2 2h18v18H7zm4 3l4 7v5h2v-5l4-7h-2l-3 5.25L13 10z"></path>
    </svg>
  )) ||
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    clipRule="evenodd"
    viewBox="0 0 42 42"
  >
    <path d="M0 0H42V42H0z"></path>
    <path
      fill="#fff"
      fillRule="nonzero"
      d="M12 11h3.176L21 21.188 26.824 11H30l-7 13v8h-4v-8l-7-13z"
    ></path>
  </svg>
}

export default Logo