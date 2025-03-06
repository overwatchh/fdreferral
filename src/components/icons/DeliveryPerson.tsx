import React from "react";

const DeliveryPerson: React.FC<{ className?: string }> = ({
  className = "fill-red-600",
}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="false"
    >
      <title>Vehicle Bike Fill</title>
      <path
        d="M21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5C14 15.567 15.567 14 17.5 14C19.433 14 21 15.567 21 17.5Z"
        className={className}
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.5 21C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14C15.567 14 14 15.567 14 17.5C14 19.433 15.567 21 17.5 21Z"
        className={className}
      ></path>
      <path
        d="M18 5C18 6.10457 17.1046 7 16 7C14.8954 7 14 6.10457 14 5C14 3.89543 14.8954 3 16 3C17.1046 3 18 3.89543 18 5Z"
        className={className}
      ></path>
      <path
        d="M10 17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14C8.433 14 10 15.567 10 17.5Z"
        className={className}
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.5 21C8.433 21 10 19.433 10 17.5C10 15.567 8.433 14 6.5 14C4.567 14 3 15.567 3 17.5C3 19.433 4.567 21 6.5 21Z"
        className={className}
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.2929 7.29289C12.6834 6.90237 13.3166 6.90237 13.7071 7.29289L17.7071 11.2929C18.0976 11.6834 18.0976 12.3166 17.7071 12.7071C17.3166 13.0976 16.6834 13.0976 16.2929 12.7071L13 9.41421L10.6329 11.7813L12.9961 13.1318C13.3467 13.332 13.5424 13.7235 13.4923 14.124L12.9923 18.124C12.9238 18.6721 12.424 19.0608 11.876 18.9923C11.3279 18.9238 10.9392 18.424 11.0077 17.876L11.425 14.5375L8.50386 12.8682C8.23325 12.7136 8.05022 12.4416 8.00885 12.1327C7.96748 11.8238 8.07251 11.5133 8.29289 11.2929L12.2929 7.29289Z"
        className={className}
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.79289 3.79289C8.18342 3.40237 8.81658 3.40237 9.20711 3.79289L10.7071 5.29289C11.0976 5.68342 11.0976 6.31658 10.7071 6.70711L7.70711 9.70711C7.31658 10.0976 6.68342 10.0976 6.29289 9.70711L4.79289 8.20711C4.40237 7.81658 4.40237 7.18342 4.79289 6.79289L7.79289 3.79289Z"
        className={className}
      ></path>
    </svg>
  );
};

export default DeliveryPerson;
