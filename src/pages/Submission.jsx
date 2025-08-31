import React, { useState } from "react";
import VideoInput from "./VideoInput";

export default function Submission() {
  const [data, setData] = useState({
    title: "",
    desc: "",
    github: "",
    video: null,
  });

  const handleVideoSelect = (videoFile) => {
    setData((prev) => ({
      ...prev,
      video: videoFile,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    if (!data.video) {
      alert("Please upload a video before submitting.");
      return;
    }
    console.log(data);

    setData({
      title: "",
      desc: "",
      github: "",
      video: "",
    });
  };

  return (
    <div className="min-h-screen my-20 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md font-sans">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 cursor-default">
        Video Upload
      </h1>

      <form onSubmit={handleSubmission} className="space-y-4">
        <div className="w-full inline-block border-2 border-gray-300 rounded-lg overflow-hidden mb-2 cursor-default">
          <VideoInput width={400} height={400} onVideoSelect={handleVideoSelect} />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            placeholder="Add Your Project Title"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Video Description</label>
          <textarea
            name="desc"
            value={data.desc}
            onChange={handleChange}
            placeholder="Add a description for your video..."
            rows={3}
            required
            className="w-full px-4 py-2 border rounded-md resize-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">GitHub</label>
          <input
            type="url"
            name="github"
            value={data.github}
            onChange={handleChange}
            placeholder="Add Your GitHub Repo Link"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-md block mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
