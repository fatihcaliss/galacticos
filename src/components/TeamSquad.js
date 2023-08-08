import { useQuery } from "@tanstack/react-query";
import React from "react";
import MatchItem from "./matchItem";
import SquadItem from "./SquadItem";

const TeamSquad = ({ matchID }) => {
  console.log("matchID", matchID);
  const fetchFormations = async (matchID) => {
    const url = `https://transfermarket.p.rapidapi.com/matches/get-line-ups?id=${matchID}&domain=com.tr`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "69a17c491amshf37a2dee7321b8dp1044d7jsn4fbbc1b606c6",
        "X-RapidAPI-Host": "transfermarket.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  };
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["TeamSquad", matchID],
    queryFn: () => fetchFormations(matchID),
    enabled: !!matchID,
  });
  const teamsSquadsData = data?.formations?.home?.start || [];

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="w-100 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <button
        aria-current="true"
        type="button"
        className="w-full px-4 py-2 font-medium text-left text-white bg-green-700 border-b border-gray-200 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600"
      >
        Current Players
      </button>
      {teamsSquadsData.length ? (
        teamsSquadsData.map((item) => {
          return <SquadItem player={item} />;
        })
      ) : (
        <h2 className="px-4">Formations not available for now.</h2>
      )}
      {/* <button
        type="button"
        className="w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        Settings
      </button> */}
      {/* <button
        type="button"
        className="w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        Messages
      </button>
      <button
        type="button"
        className="w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        Messages
      </button>
      <button
        type="button"
        className="w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        Messages
      </button> */}
    </div>
  );
};

export default TeamSquad;
