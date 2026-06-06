export default function Logo({ size = 34 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="17" cy="17" r="16" fill="#1a6cf0" stroke="#1a6cf0" strokeWidth="2" />
      <path
        d="M12 20L17 12L22 20M14 18H20"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
