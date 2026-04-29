import React from 'react';

export default function AIOdysseyPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] py-16 px-4 sm:px-8 lg:px-16 font-sans text-gray-800 selection:bg-blue-100">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Floating Register Button - Redirects to Wikipedia */}
        <div className="fixed bottom-8 right-8 z-50">
          <a
            href="https://gdg.community.dev/events/details/google-gdg-on-campus-school-of-information-technology-bhopal-india-presents-ai-odyssey/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white font-bold py-4 px-8 rounded-full shadow-2xl hover:scale-105 transition-transform active:scale-95 flex items-center gap-2 border-2 border-white no-underline"
          >
            Register Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Hero Section */}
        <header className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#4285F4]"></span>
            <span className="w-3 h-3 rounded-full bg-[#EA4335]"></span>
            <span className="w-3 h-3 rounded-full bg-[#FBBC05]"></span>
            <span className="w-3 h-3 rounded-full bg-[#34A853]"></span>
            <span className="text-sm font-medium tracking-widest text-gray-500 uppercase ml-2">Flagship Event</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-gray-900">
            <span className="text-[#4285F4]">AI</span> ODYSSEY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4335] to-[#FBBC05]">2026</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light">
            A comprehensive and immersive experience in Artificial Intelligence, combining knowledge, innovation, and competition.
          </p>
        </header>



        {/* Overview Section */}
        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="h-2 w-full bg-[#4285F4]"></div>
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Overview</h2>
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  This Odyssey aims to create a dynamic platform where students not only learn about AI but also apply, present, and innovate through structured activities.
                </p>
                <p>
                  The aim is to create an environment similar to a mini tech fest, ensuring high energy, participation, and learning throughout the event.
                </p>
              </div>
              <div className="bg-[#F8F9FA] rounded-2xl p-6 sm:p-8 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="bg-[#4285F4] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
                  Event Highlights
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#EA4335] font-bold mr-3">•</span> A keynote session by an industry expert
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FBBC05] font-bold mr-3">•</span> Interactive Q&A session
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#34A853] font-bold mr-3">•</span> Engaging sub-events including Quizzes and Hackathons
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4285F4] font-bold mr-3">•</span> Recognition and prize distribution
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Speaker Feature Section */}
        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-16">
          <div className="grid md:grid-cols-3 items-center">
            {/* Speaker Image Placeholder */}
            <div className="bg-gray-200 h-64 md:h-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              <img src="/speaker.jpeg" alt="Speaker" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-[#EA4335] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Keynote Speaker</span>
              </div>
            </div>

            {/* Speaker Details */}
            <div className="md:col-span-2 p-8 sm:p-12 space-y-4">
              <div className="space-y-1">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Industry Expert Session </h2>
                <p className="text-[#4285F4] font-medium text-lg italic">Mr. Jitendra Gupta</p>
              </div>

              <p className="text-gray-600 leading-relaxed font-light text-lg">
                Autonomous AI agents are transforming software systems by enabling applications that can reason, plan, and act independently. This session explores how to build such agents using the Agent Development Kit (ADK), focusing on scalable and reliable design patterns. It introduces the Antigravity paradigm to decouple agent logic from execution environments, improving flexibility and control. Attendees will gain practical insights into agent architecture, orchestration, and deployment using cloud-native approaches.              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <a href="https://www.linkedin.com/in/jitu028/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#0077b5] bg-gray-50 hover:bg-blue-50 px-4 py-2 rounded-full border border-gray-100 hover:border-blue-200 transition-colors cursor-pointer no-underline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                  LinkedIn Profile
                </a>
                <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-[#FBBC05]"></span>
                  Interactive Q&A
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Track A - Conference Hall */}
          <div className="space-y-8 bg-blue-50/60 rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm">
            <div className="pb-4 border-b-2 border-blue-200">
              <span className="text-[#4285F4] font-bold tracking-wider uppercase text-sm mb-2 block">Track A</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Conference Hall Events</h2>
            </div>

            {/* AI Tech Quiz */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#4285F4]"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">1. AI Tech Quiz</h3>
                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full w-max">Opening Event</span>
              </div>
              <p className="text-gray-600 mb-4 font-light text-sm sm:text-base">The fest kicks off with 20 questions using a hand-raise format.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full text-center">Fast-paced Elimination</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Individual Participation</span>
              </div>
            </div>

            {/* Mini Hackathon */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#EA4335]"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">2. Mini Hackathon</h3>
                <span className="bg-red-50 text-red-700 text-xs font-bold px-3 py-1 rounded-full w-max">Main Event</span>
              </div>
              <p className="text-gray-600 mb-6 font-light text-sm sm:text-base">A time-bound innovation challenge using a "Spin the Wheel" system for random problem statements.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Teams of 1-2</span>
              </div>
            </div>

            {/* AI Meme Challenge */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#FBBC05]"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">3. AI Meme Challenge</h3>
                <span className="bg-yellow-50 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full w-max">Post Hackathon</span>
              </div>
              <p className="text-gray-600 mb-4 font-light text-sm sm:text-base">Create creative AI-based memes judged on humor, relevance, and originality.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Individual participation</span>
              </div>
            </div>
          </div>

          {/* Track B - KRC */}
          <div className="space-y-8 bg-green-50/60 rounded-3xl p-6 sm:p-8 border border-green-100 shadow-sm">
            <div className="pb-4 border-b-2 border-green-200">
              <span className="text-[#34A853] font-bold tracking-wider uppercase text-sm mb-2 block">Track B</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">KRC Events</h2>
            </div>

            {/* Problem Solver's Lab */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#34A853]"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">1. Problem Solver's Lab</h3>
                <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full w-max">Interactive</span>
              </div>
              <p className="text-gray-600 mb-6 font-light text-sm sm:text-base">Solve quirky problems using basic research and logical thinking.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Team of 2</span>
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full text-center">Focus: Creativity + Knowledge</span>
              </div>
            </div>

            {/* AI vs Human */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#4285F4]"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">2. AI vs Human</h3>
                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full w-max">Team Battle</span>
              </div>
              <p className="text-gray-600 mb-4 font-light text-sm sm:text-base">A 3-round battle testing prompt engineering skills and output accuracy.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">Team of 3 members</span>
              </div>
              <div className="space-y-2">
                <div className="bg-[#F8F9FA] p-2 rounded text-xs border border-gray-100">Round 1: Prompt identification from images</div>
                <div className="bg-[#F8F9FA] p-2 rounded text-xs border border-gray-100">Round 2: Increased difficulty prompts</div>
                <div className="bg-[#F8F9FA] p-2 rounded text-xs border border-gray-100">Round 3: Advanced challenge testing efficiency</div>
              </div>
            </div>

            {/* UI Design with AI */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#EA4335]"></div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">3. UI Design with AI</h3>
                <span className="bg-red-50 text-red-700 text-xs font-bold px-3 py-1 rounded-full w-max">Design Track</span>
              </div>
              <p className="text-gray-600 mb-4 font-light text-sm sm:text-base">Enhance and redesign a basic UI or image using professional AI tools.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">1-2 Members allowed</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-50/50 text-red-800 text-[10px] px-2 py-1 rounded font-bold uppercase">Creativity</span>
                <span className="bg-red-50/50 text-red-800 text-[10px] px-2 py-1 rounded font-bold uppercase">Aesthetics</span>
                <span className="bg-red-50/50 text-red-800 text-[10px] px-2 py-1 rounded font-bold uppercase">Smart AI Use</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}