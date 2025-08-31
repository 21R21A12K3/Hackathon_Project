import React, { useState, useEffect } from "react";

export default function Hackathons() {
  const [hackathons, setHackathons] = useState([]);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleAddHackathon = (e) => {
    e.preventDefault();
    if (!name.trim() || !date.trim()) {
      alert("Please provide both a hackathon name and date.");
      return;
    }
    const newHackathon = {
      id: hackathons.length + 1,
      name: name.trim(),
      date,
      description: description.trim(),
    };
    setHackathons([...hackathons, newHackathon]);
    setName("");
    setDate("");
    setDescription("");
  };

  const getTimeRemaining = (targetDate) => {
    const endTime = new Date(targetDate).getTime();
    const timeLeft = endTime - now.getTime();
    if (timeLeft <= 0) return "Ended";

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="min-h-full my-30 max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-md rounded-md cursor-default">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 cursor-default">
        Hackathons
      </h2>

      <ul className="mb-8 space-y-6 cursor-default">
        {hackathons.map((hackathon) => (
          <li
            key={hackathon.id}
            className="p-5 sm:p-4 border border-gray-200 rounded-md hover:shadow-lg transition cursor-pointer touch-manipulation cursor-default"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-indigo-600">
              {hackathon.name}
            </h3>
            <p className="text-gray-600 italic">Date: {hackathon.date}</p>
            <p className="mt-1 text-sm text-gray-500">
              Time Remaining:{" "}
              <span className="font-medium text-gray-800">
                {getTimeRemaining(hackathon.date)}
              </span>
            </p>
            <p className="mt-2 text-gray-700">
              {hackathon.description || "No description"}
            </p>
          </li>
        ))}
      </ul>

      <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 cursor-default">
        Add a New Hackathon
      </h3>
      <form onSubmit={handleAddHackathon} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter hackathon name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief description (optional)"
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Add Hackathon
        </button>
      </form>
    </div>
  );
}
