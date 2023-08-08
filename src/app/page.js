"use client"; // This is a client component
import CurrentMatches from "@/components/CurrentMatches";
import LineUP from "@/components/LineUp";
import Navbar from "@/components/Navbar";
import TeamSquad from "@/components/TeamSquad";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from "react";

export default function Home() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false
          }
        }
      })
  )
  const [matchID, setMatchID] = useState(null)
  console.log('home', matchID)
  return (
    <QueryClientProvider client={queryClient}>
    <div className="h-screen">
      <Navbar />
      <div className="px-4 md:px-16 py-32 md:py-32 space-y-4 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 h-100">
        <aside className="space-y-2 h-screen w-12/12">
          <div className="grid grid-cols-3 grid-rows-1 gap-5">
            <div className="flex-1"><CurrentMatches setMatchID={setMatchID}/></div>
            <div className="flex-3"><LineUP/></div>
            <div className="flex-1"><TeamSquad matchID={matchID}/></div>
          </div>
        </aside>
      </div>
    </div>
    </QueryClientProvider>
  );
}
