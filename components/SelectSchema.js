import React, { useState } from "react";
import Link from "next/link";

export default function SelectSchema() {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <header className="bg-gray-600">
        <div className="flex flex-col items-center justify-center sm:flex-row  h-auto">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex mr-auto">
                

                <div className="hidden sm:-my-px sm:ml-8 lg:flex lg:space-x-8">
                
                </div>
              </div>

              <div className="flex items-center justify-end sm:ml-5">
                <button
                  type="button"
                  className="flex items-center max-w-xs rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900"
                >
                
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-gray-100 py-8">
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-3xl font-bold mb-8">
            Welcome Admin!
          </h1>
          <p className="text-lg text-center mb-8">
            Please click on one of the options below to proceed
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col justify-center items-center space-y-4 mx-auto">
              <Link href="/dashboard/educateasoul">
                <button
                  onMouseEnter={() => setHoveredButton("educate")}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`text-white rounded font-bold bg-indigo-500 hover:bg-indigo-600 w-full md:w-64 py-4 px-8 transition-all ${
                    hoveredButton === "educate" ? "scale-110" : ""
                  }`}
                >
                  Rusape Registry
                </button>
              </Link>
              <Link href="/dashboard/feedasoul">
                <button
                  onMouseEnter={() => setHoveredButton("feed")}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`text-white rounded font-bold bg-pink-500 hover:bg-pink-600 w-full md:w-64 py-4 px-8 transition-all ${
                    hoveredButton === "feed" ? "scale-110" : ""
                  }`}
                >
                  Feed A Soul
                </button>
              </Link>
              <Link href="/dashboard/careforasoul">
                <button
                  onMouseEnter={() => setHoveredButton("care")}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`text-white rounded font-bold bg-green-500 hover:bg-green-600 w-full md:w-64 py-4 px-8 transition-all ${
                    hoveredButton === "care" ? "scale-110" : ""
                  }`}
                >
                  Care for A Soul
                </button>
              </Link>
              <Link href="/dashboard/blogmanager">
                <button
                  onMouseEnter={() => setHoveredButton("blog")}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`text-white rounded font-bold bg-yellow-500 hover:bg-yellow-600 w-full md:w-64 py-4 px-8 transition-all ${
                    hoveredButton === "blog" ? "scale-110" : ""
                  }`}
                >
                   Blog Manager
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
