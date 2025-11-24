import { useState,useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useUser } from "../context/UserContext";

const mainLinks = [
  { name: "Events", to: "/events" },
  { name: "Leaderboard", to: "/leaderboard" },
  { name: "Submissions", to: "/submissions" },
];

const defaultAvatar = "https://www.gravatar.com/avatar/?d=mp&f=y";

export default function Header() {
  const { user, setUser } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    setUser(null);
    setShowDropdown(false);
  };

  
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-8 w-auto rounded-full cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {mainLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `text-muted-foreground hover:text-foreground transition-colors ${
                    isActive ? "font-semibold text-foreground" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* User Actions (Right) */}
          <div className="hidden md:flex items-center space-x-4 relative">
            {user ? (
              <div className="relative flex items-center space-x-3">
                {/* User Avatar */}
                <img
                  src={user.photo || defaultAvatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full cursor-pointer"
                  onClick={() => setShowDropdown(!showDropdown)}
                />

                {/* Sign Out Button - side by side with avatar */}
                <button
                  onClick={handleLogout}
                  className="w-full text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-md cursor-pointer"
                >
                  Sign Out
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div className="absolute right-0 top-full mt-3.5  w-40 bg-white shadow-lg border border-gray-200  text-sm z-50">
                    <div className="px-5 py-3 border-b border-gray-100">
                      <p className="font-semibold text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                    <nav className="flex flex-col">
                      <Link
                        to="/my-submissions"
                        onClick={() => setShowDropdown(false)}
                        className="px-5 py-3 hover:bg-purple-50 text-gray-700 transition-colors"
                      >
                        My Submissions
                      </Link>
                      
                      <Link
                        to="/admin"
                        onClick={() => setShowDropdown(false)}
                        className="px-5 py-3 hover:bg-purple-50 text-gray-700 transition-colors"
                      >
                        Admin
                      </Link>
                    </nav>
                  </div>
                )}
              </div>
            ) : (
              <div>
              <Link to="/login">
                <button className="text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-md cursor-pointer">
                  Sign In
                </button>
              </Link>
              <Link to="/register">
                <button className="ml-2 text-sm px-4 py-2 bg-gray-300 rounded-md cursor-pointer">
                  Sign Up
                </button>
              </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {mainLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                {user ? (
                  <>
                    <div className="flex items-center gap-2 px-4">
                      <img
                        src={user.photo || defaultAvatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <Link
                      to="/my-submissions"
                      onClick={() => setIsMenuOpen(false)}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      My Submissions
                    </Link>
                    <Link
                      to="/create-team"
                      onClick={() => setIsMenuOpen(false)}
                      className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      Create Team
                    </Link>

                    <Link
                      to="/join-team"
                      onClick={() => setIsMenuOpen(false)}
                      className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      Join Team
                    </Link>

                    <Link
                      to="/admin"
                      onClick={() => setIsMenuOpen(false)}
                      className="px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      Admin
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-md">
                      Register Now
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
