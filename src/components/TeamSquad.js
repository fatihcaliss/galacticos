import { useQuery } from "@tanstack/react-query";
import React from "react";
import SquadItem from "./SquadItem";

const TeamSquad = ({ matchID }) => {
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
  const { isLoading, isError, data, error, isSuccess, isFetching, isInitialLoading,status } = useQuery({
    queryKey: ["TeamSquad", matchID],
    queryFn: () => fetchFormations(matchID),
    enabled: !!matchID,
  });
  const teamsSquadsData = data?.formations || {};

  //   if (isLoading) {
  //     return <span>Loading...</span>;
  //   }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
console.log('isLoading', isLoading)
console.log('status', status)
  return (
    <div className="w-100 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <button
        aria-current="true"
        type="button"
        className="w-full px-4 py-2 font-medium text-left text-white bg-green-700 border-b border-gray-200 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600"
      >
        Home Team
      </button>
      {!isFetching ? (
        isSuccess && Object.keys(teamsSquadsData?.home?.start).length ? (
          Object.values(teamsSquadsData?.home?.start).map((item) => {
            return <SquadItem player={item} />;
          })
        ) : (
          <h2 className="px-4">Formations not available for now.</h2>
        )
      ) : (
        <h2 className="px-4">Loading...</h2>
      )}

      <button
        aria-current="true"
        type="button"
        className="w-full mt-5 px-4 py-2 font-medium text-left text-white bg-green-700 border-b border-gray-200 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600"
      >
        Away Team
      </button>
      {!isFetching  ? (
        isSuccess && Object.keys(teamsSquadsData?.away?.start).length ? (
          Object.values(teamsSquadsData?.away?.start).map((item) => {
            return <SquadItem player={item} />;
          })
        ) : (
          <h2 className="px-4">Formations not available for now.</h2>
        )
      ) : (
        <h2 className="px-4">Loading...</h2>
      )}
    </div>
  );
};

export default TeamSquad;
