import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ title, image, endTime, onStart }) => {
  const [timeLeft, setTimeLeft] = useState('');
    const navigate = useNavigate();
  useEffect(() => {
    if (!endTime) return;

    const updateTimer = () => {
      const now = new Date().getTime();
      const end = new Date(endTime).getTime();
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft('Event ended');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${days > 0 ? `${days}d ` : ''}${hours}h ${minutes}m ${seconds}s`
      );
    };

    updateTimer(); // run immediately on mount
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className="bg-white shadow-md max-w-sm overflow-hidden ">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="flex flex-col h-full p-4 text-center cursor-default">
        <h2 className="text-xl font-semibold mb-2">{title || "Untitled Event"}</h2>
        {endTime && (
          <p className="text-gray-500 mb-4">
            Ends in: <span className="font-mono">{timeLeft}</span>
          </p>
        )}
        <div>
          <button
            onClick={() => navigate('/event-details')}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition cursor-pointer"
          >
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
