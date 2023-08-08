import React from "react";

const SquadItem = ({player}) => {
  return (
    <button
      type="button"
      className="w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
    >
      <span>{player?.playerName}</span>
    </button>
  );
};

export default SquadItem;
