import React, { useState } from "react";
import EventCard from "../components/EventCard";

export default function CreateEventCard({ onCreate }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !image || !endTime) {
      alert("Please fill out all fields.");
      return;
    }
    onCreate({ title, image, endTime });
    setTitle("");
    setImage("");
    setEndTime("");
  };

  return (
    <div className="max-w-sm mx-auto my-20">
      <form onSubmit={handleSubmit} className="mt-4 space-y-4 bg-white p-4 rounded shadow">
        <div>
          <label className="block font-medium mb-1" htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter event title"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="image">Image URL</label>
          <input
            id="image"
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter image URL"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="endTime">End Time</label>
          <input
            id="endTime"
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}
