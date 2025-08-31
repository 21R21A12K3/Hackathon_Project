import  { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [joinerName, setJoinerName] = useState("");
  const [joinTeamId, setJoinTeamId] = useState("");

  const handleCreateTeam = (e) => {
    e.preventDefault();
    const newTeam = {
      id: uuidv4(),
      name: teamName,
      members: [leaderName]
    }
    setTeams((prev) => [...prev, newTeam]);
    setTeamName("");
    setLeaderName("");
    alert(`Team created! Share this Team ID: ${newTeam.id}`);
  };
  const handleJoinTeam = (e) => {
  e.preventDefault();

  if (!joinTeamId || !joinerName) return;

  const teamIndex = teams.findIndex((t) => t.id === joinTeamId.trim());
  if (teamIndex === -1) {
    alert("Team ID not found. Please check and try again.");
    return;
  }

  if (teams[teamIndex].members.includes(joinerName.trim())) {
    alert("Member already in team.");
    return;
  }

  const updatedTeams = teams.map((team, index) => {
    if (index === teamIndex) {
      return {
        ...team,
        members: [...team.members, joinerName.trim()],
      };
    }
    return team;
  });

  setTeams(updatedTeams);

  setJoinTeamId("");
  setJoinerName("");
  alert(`You have successfully joined team: ${teams[teamIndex].name}`);
};


  return (
    <div className="min-h-screen my-20 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md ">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 cursor-default">
        Teams
      </h2>

      <ul className="mb-8 space-y-4 ">
        {teams.map((team) => (
          <li
            key={team.id}
            className="p-4 border border-gray-200 rounded-md hover:shadow-lg transition cursor-pointer"
          >
            <strong className="text-lg text-indigo-600">{team.name}</strong>
            <p className="text-gray-700 mt-1">
              Members: {team.members.join(", ")}
            </p>
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Create a New Team</h3>
      <form onSubmit={handleCreateTeam} className="space-y-4 mb-10">
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Team Name:
          </label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
            placeholder="Enter team name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Your Name (Team Leader):
          </label>
          <input
            type="text"
            value={leaderName}
            onChange={(e) => setLeaderName(e.target.value)}
            required
            placeholder="Your name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600  text-white px-6 py-2 rounded-md"
        >
          Create Team
        </button>
      </form>

      {/* Join Existing Team Form */}
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Join a Team</h3>
      <form onSubmit={handleJoinTeam} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Team ID:
          </label>
          <input
            type="text"
            value={joinTeamId}
            onChange={(e) => setJoinTeamId(e.target.value)}
            required
            placeholder="Paste team ID here"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Your Name:
          </label>
          <input
            type="text"
            value={joinerName}
            onChange={(e) => setJoinerName(e.target.value)}
            required
            placeholder="Your name"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600  text-white px-6 py-2 rounded-md"
        >
          Join Team
        </button>
      </form>
    </div>
  );
}

