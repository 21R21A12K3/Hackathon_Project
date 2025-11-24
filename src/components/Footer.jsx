import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white py-12 shadow-[0_-8px_24px_rgba(0,0,0,0.02)] z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              
                <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-8 w-auto rounded-full cursor-pointer"
            />
          </Link>
              
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Hackathon
              </span>
            </div>
            <p className="text-gray-600">
              Empowering developers to build the future through competitive hackathons.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Platform</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link className="hover:text-black transition">Events</Link></li>
              <li><Link className="hover:text-black transition">Leaderboard</Link></li>
              <li><Link className="hover:text-black transition">Community</Link></li>
              <li><Link className="hover:text-black transition">Sponsors</Link></li> 
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link className="hover:text-black transition">Help Center</Link></li>
              <li><Link className="hover:text-black transition">Contact</Link></li>
              <li><Link className="hover:text-black transition">Documentation</Link></li>
              <li><Link className="hover:text-black transition">Status</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link className="hover:text-black transition">About</Link></li>
              <li><Link className="hover:text-black transition">Careers</Link></li>
              <li><Link className="hover:text-black transition">Privacy</Link></li> 
              <li><Link className="hover:text-black transition">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2024 Hackathon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
