import { Link } from "react-router-dom";
import {
  Trophy,
  Users,
  Code,
  Zap,
  Clock,
  Star,
  ArrowRight,
  Calendar,
  MapPin,
  DollarSign,
  Target,
  Rocket,
  Shield,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      {/* Replace your Navigation component here or remove */}

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-hackathon-50/50 to-electric-50/30"></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-hackathon-100 to-electric-100 text-hackathon-700 border border-hackathon-200 px-4 py-2 text-sm font-medium inline-flex items-center rounded-full">
                <Zap className="w-4 h-4 mr-2" />
                Next Event: August 08, 2025
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Code. Compete. Conquer.
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Be part of India’s growing hackathon community. Collaborate, innovate, and build impactful projects while competing for exciting prizes and recognition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/register" className="inline-block">
                <button
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 hover:to-electric-600  border-0 px-8 py-6 text-lg font-semibold rounded-md flex items-center h-auto"
                  style={{ minWidth: "200px" }}
                >
                  Register for Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link to="/events" className="inline-block">
                <button
                  className="border border-hackathon-200 text-hackathon-700 hover:bg-hackathon-50 px-8 py-6 text-lg font-semibold rounded-md flex items-center h-auto"
                  style={{ minWidth: "200px" }}
                >
                  Browse Events
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose Hackathon
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {/* Experience hackathons like never before with our cutting-edge
              platform designed for modern developers. */}
              Join the new wave of developers and experience hackathons built around learning, collaboration, and real innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: About the Hackathon */}
            <div className="border border-gray-200 bg-gradient-to-br from-purple-500 to-blue-500 cursor-default hover:border-gray-300 transition-colors group rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">What Is This?</h3>
              <p className="text-muted-foreground">
                A small-scale hackathon for passionate developers to showcase
                problem-solving and coding skills.
              </p>
            </div>

            {/* Card 2: Prize Pool */}
            <div className="border border-gray-200 bg-gradient-to-br from-purple-500 to-blue-500 cursor-default hover:border-gray-300 transition-colors group rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Prize Pool</h3>
              <p className="text-muted-foreground">
                Total prize pool of ₹25,000 — 🥇 ₹15,000 for 1st place, 🥈
                ₹8,000 for 2nd place.
              </p>
            </div>

            {/* Card 3: Selection Process */}
            <div
              className="border border-gray-200 bg-gradient-to-br from-purple-500 to-blue-500
 cursor-default hover:border-gray-300 transition-colors group rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">How to Qualify</h3>
              <p className="text-muted-foreground">
                Submit a short video introduction. Shortlisted participants will
                be interviewed by tech experts.
              </p>
            </div>

            {/* Card 4: Who Can Join */}
            <div
              className="border border-gray-200 bg-gradient-to-br from-purple-500 to-blue-500
 cursor-default hover:border-gray-300 transition-colors group rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Who Can Join?</h3>
              <p className="text-muted-foreground">
                Open to students and early professionals. Beginners welcome!
              </p>
            </div>

            {/* Card 5: Project Theme */}
            <div
              className="border border-gray-200 bg-gradient-to-br from-purple-500 to-blue-500
 cursor-default hover:border-gray-300 transition-colors group rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Theme</h3>
              <p className="text-muted-foreground">
                Build something impactful — web, mobile, or automation projects.
                Use any tech stack you like.
              </p>
            </div>

            {/* Card 6: Support */}
            <div
              className="border border-gray-200 bg-gradient-to-br from-purple-500 to-blue-500
 cursor-default hover:border-gray-300 transition-colors group rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
              <p className="text-muted-foreground">
                We'll guide you through each step. Support available during the
                hackathon.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Upcoming Events Section */}
      {/*
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't miss out on these exciting hackathon opportunities coming
              soon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            
            <div className="border border-hackathon-100 hover:border-hackathon-200 transition-all hover:shadow-lg rounded overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-hackathon-400 to-electric-400 flex items-center justify-center text-white font-bold text-lg">
                HackStream Winter 2024
              </div>
              <div className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-3 gap-3">
                  <Calendar className="w-4 h-4" /> Dec 15 - Dec 17, 2024
                  <MapPin className="w-4 h-4" /> Virtual
                  <DollarSign className="w-4 h-4" /> $50,000 Prize Pool
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Build innovative AI tools for social good
                </h3>
                <p className="text-muted-foreground text-sm">
                  Join developers worldwide to create technology that makes a
                  positive impact.
                </p>
              </div>
            </div>

            
            <div className="border border-hackathon-100 hover:border-hackathon-200 transition-all hover:shadow-lg rounded overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-hackathon-400 to-electric-400 flex items-center justify-center text-white font-bold text-lg">
                Summer Code Blast 2025
              </div>
              <div className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-3 gap-3">
                  <Calendar className="w-4 h-4" /> June 20 - June 22, 2025
                  <MapPin className="w-4 h-4" /> Hybrid
                  <DollarSign className="w-4 h-4" /> $100,000 Prize Pool
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Competitive coding challenges with top-tier prizes
                </h3>
                <p className="text-muted-foreground text-sm">
                  Push your limits and prove your skills among the best
                  developers.
                </p>
              </div>
            </div>

            
            <div className="border border-hackathon-100 hover:border-hackathon-200 transition-all hover:shadow-lg rounded overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-hackathon-400 to-electric-400 flex items-center justify-center text-white font-bold text-lg">
                Open Source Summit
              </div>
              <div className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-3 gap-3">
                  <Calendar className="w-4 h-4" /> Aug 10 - Aug 12, 2025
                  <MapPin className="w-4 h-4" /> Virtual
                  <DollarSign className="w-4 h-4" /> $30,000 Prize Pool
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Collaborate on the next big open source projects
                </h3>
                <p className="text-muted-foreground text-sm">
                  Join the global community to contribute and learn from open
                  source.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/events"
              className="inline-block text-hackathon-600 hover:text-electric-600 font-semibold"
            >
              See all events &rarr;
            </Link>
          </div>
        </div>
      </section>
      */}
    </div>
  );
}
