const Facebook: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Facebook</title>
      <path
        d="M21 12C21 7.02943 16.9706 3 12 3C7.02943 3 3 7.02943 3 12C3 16.4922 6.29117 20.2155 10.5938 20.8907V14.6016H8.30859V12H10.5938V10.0172C10.5938 7.76156 11.9374 6.51562 13.9932 6.51562C14.9779 6.51562 16.0078 6.69141 16.0078 6.69141V8.90625H14.8729C13.7549 8.90625 13.4062 9.60001 13.4062 10.3117V12H15.9023L15.5033 14.6016H13.4062V20.8907C17.7088 20.2155 21 16.4922 21 12Z"
        className={className}
      ></path>
    </svg>
  );
};

export default Facebook;
