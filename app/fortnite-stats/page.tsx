"use client";

// pages/username.js
import { useState } from "react";
import axios from "axios";
import PQueue from "p-queue";

const queue = new PQueue({
  interval: 1000, // 1 sekunda
  intervalCap: 3, // maksymalnie 3 zapytania na sekundę
});

export default function UsernamePage() {
  const [username, setUsername] = useState("");
  const [stats, setStats] = useState(null);
  const [weeklyWins, setWeeklyWins] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const fetchStats = async (name) => {
    return axios.get("https://fortnite-api.com/v2/stats/br/v2", {
      params: {
        name: name,
      },
      headers: {
        Authorization: "250ce29a-79b5-4cfe-9dd3-2d6c1cca5e2b", // Zastąp YOUR_API_KEY rzeczywistym kluczem API
      },
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await queue.add(() => fetchStats(username));
      setStats(response.data.data);
      // Zakładamy, że API zwraca dane o wygranych z ostatnich 7 dni w polu `last7daysWins`
      setWeeklyWins(response.data.data.stats.all.overall.last7daysWins);
    } catch (err) {
      setError("Failed to fetch stats. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-black">
      <div className="flex flex-col items-center bg-white p-6 rounded shadow-md">
        <input type="text" value={username} onChange={handleChange} placeholder="Enter username" className="mb-4 px-4 py-2 border rounded w-64" />
        <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Send
        </button>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {stats && (
          <div className="mt-4">
            <h2 className="text-xl font-bold">Stats for {username}</h2>
            <p>Total Wins: {stats.stats.all.overall.wins}</p>
            <p>Total Matches: {stats.stats.all.overall.matches}</p>
            <p>Total Kills: {stats.stats.all.overall.kills}</p>
            <p>K/D Ratio: {stats.stats.all.overall.kd}</p>
            <p>Win Percentage: {stats.stats.all.overall.winRate}</p>
            <p>Time Played: {stats.stats.all.overall.timePlayed}</p>
            <p>Kills per Match: {stats.stats.all.overall.killsPerMatch}</p>
            <p>Kills per Minute: {stats.stats.all.overall.killsPerMin}</p>
            {weeklyWins !== null && <p>Wins in Last 7 Days: {weeklyWins}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
