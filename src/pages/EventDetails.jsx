import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';


function EventDetails() {
    const navigate = useNavigate();
    const { user } = useUser();
    const handleClick = (path) => {
        if(!user){
            navigate('/register');
        }
        else {
            navigate(path);
        }
    }
  return (
    <div className="mt-24 mb-10 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Artificial Intelligence (AI)</h1>
      <p className="text-lg text-gray-700 mb-6">
        Artificial Intelligence (AI) refers to the simulation of human intelligence processes by machines,
        especially computer systems. These processes include learning (the acquisition of information and rules
        for using the information), reasoning (using rules to reach approximate or definite conclusions), and
        self-correction. AI is rapidly transforming industries such as healthcare, finance, transportation, and
        entertainment by making tasks faster, more accurate, and more efficient.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Key Advantages of AI</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Automation of repetitive tasks increases productivity and reduces human error.</li>
        <li>AI-powered analytics offer deeper insights and better decision-making capabilities.</li>
        <li>Natural language processing enables intuitive human-computer interaction.</li>
        <li>AI systems can work 24/7 without fatigue, leading to better performance consistency.</li>
        <li>Personalization in services such as recommendations, customer support, and more.</li>
      </ul>

      <div className="flex flex-wrap gap-4">
        <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
          Learn More
        </button>
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={()=>handleClick('/submission')}
        >
          Individual
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition ml-2"
            onClick={()=>handleClick('/team')}
        >
          Team
        </button>
      </div>
    </div>
  );
}

export default EventDetails;
