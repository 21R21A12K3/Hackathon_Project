import React from 'react';

const submissions = [
  {
    id: 1,
    title: "AI Essay Grader",
    submittedBy: "john_doe",
    date: "2025-07-26",
    status: "Pending",
  },
  {
    id: 2,
    title: "Smart Chatbot",
    submittedBy: "team_vision",
    date: "2025-07-25",
    status: "Reviewed",
  },
];

function Submissions() {
  return (
    <div className="mt-20 mb-10 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">All Submissions</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Submitted By</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission.id} className="border-b text-sm text-gray-600">
                <td className="py-3 px-4">{submission.title}</td>
                <td className="py-3 px-4">@{submission.submittedBy}</td>
                <td className="py-3 px-4">{submission.date}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-white ${submission.status === 'Pending' ? 'bg-yellow-500' : 'bg-green-500'}`}>
                    {submission.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Submissions;
