import React from 'react';

const leaderboardData = [
  { id: 1, name: 'Team Alpha', score: 95 },
  { id: 2, name: 'Team Beta', score: 89 },
  { id: 3, name: 'John Doe', score: 86 },
  { id: 4, name: 'Jane Smith', score: 82 },
];

function Leaderboard() {
  return (
    <div className="mt-20 mb-10 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <th className="py-3 px-4">Rank</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData
              .sort((a, b) => b.score - a.score)
              .map((entry, index) => (
                <tr key={entry.id} className="border-b text-sm text-gray-600">
                  <td className="py-3 px-4 font-semibold text-gray-800">
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
                  </td>
                  <td className="py-3 px-4">{entry.name}</td>
                  <td className="py-3 px-4">{entry.score}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
