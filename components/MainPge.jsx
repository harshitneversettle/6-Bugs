import { Link } from "react-router-dom";
import { useState } from "react";

export default function MainPage() {
  const [showLogin, setShowLogin] = useState(null);

  return (
    <>
      <div className={showLogin ? "blur-sm" : ""}>
        {/* Navbar */}
        <nav className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-4 px-8 flex justify-between items-center shadow-lg">
          <h1 className="text-3xl font-bold flex items-center">
            <span className="mr-2">🔗</span> Mentor Connect
          </h1>
          <ul className="flex gap-6">
            {navItems.map((item, index) => (
                <li key={index} className="relative group">
                <Link
                  to={item.href}
                  className="hover:bg-white hover:text-indigo-700 transition-all px-4 py-2 rounded-lg font-medium"
                >
                  {item.title}
                </Link>
                {item.dropdown && (
                  <ul className="absolute left-0 mt-2 bg-white text-gray-800 shadow-xl rounded-lg hidden group-hover:block w-48 border-t-4 border-indigo-500 overflow-hidden z-50">
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex} className="hover:bg-indigo-50">
                        <Link
                          to={subItem.href} 
                          className="block w-full py-3 px-4 text-left hover:text-indigo-700 transition-all"
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen flex items-center justify-center flex-col px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 text-gray-800 leading-tight">
              Connecting Mentors and Mentees <span className="text-indigo-600">Seamlessly</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              An intelligent platform designed to foster meaningful connections, career growth, and skill development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about" className="bg-indigo-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-indigo-700 transition font-medium text-lg">
                Learn More
              </Link>
              <Link to="/sign-up-student" className="bg-white text-indigo-700 border-2 border-indigo-600 px-8 py-4 rounded-lg shadow-lg hover:bg-indigo-50 transition font-medium text-lg">
                Sign Up Free
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Powerful Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-xl shadow-md bg-white border border-gray-100 flex flex-col h-full">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 flex-grow">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chatbot Button */}
        <Link
          to="/chat-bot"
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-pulse hover:animate-none"
        >
          <span className="mr-2 group-hover:mr-3 transition-all">💬</span>
          <span className="hidden group-hover:inline transition-all">AI Assistant</span>
        </Link>
      </div>
    </>
  );
}

// Navigation Items
const navItems = [
  { title: "Our Mentors", href: "/mentors" },
  {
    title: "About",
    href: "/about",
    dropdown: [
      { title: "Our Mission", href: "/mission" },
      { title: "Our Vision", href: "/vision" },
      { title: "How It Works", href: "/process" },
    ],
  },
  { title: "Features", href: "#features" },
  {
    title: "Login",
    href: "#",
    dropdown: [
      { title: "Login as Mentor", href: "/teacher-login" }, 
      { title: "Login as Mentee", href: "/student-login" }, 
    ],
  },
];

// Features Data
const features = [
  { title: "Smart Calendar Booking", description: "AI finds the best meeting times.", icon: "📅" },
  { title: "Video Calls & AI Summaries", description: "Auto-transcriptions & key points.", icon: "🎥" },
  { title: "AI Mock Interviews", description: "Get industry-specific feedback.", icon: "🤖" },
  { title: "Live Discussion Forums", description: "Engage with peers & mentors.", icon: "💬" },
  { title: "Web3 Rewards", description: "Earn tokens for participation.", icon: "🏆" },
  { title: "Personalized Learning Paths", description: "AI-generated career roadmaps.", icon: "🧠" },
];
