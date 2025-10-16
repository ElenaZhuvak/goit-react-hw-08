import { Link } from "react-router-dom";

const HomePage = () => {
  return (
<section className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-700 text-white h-screen flex items-center justify-center px-6 overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Your Personal <span className="text-cyan-300">Contact Vault</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          All your important connections, beautifully organised and always accessible.
        </p>

        <Link className="mt-18 inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transform transition" to="/register">
              Get Started
            </Link>

      </div>
    </section>
  );
};

export default HomePage;
