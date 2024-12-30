import React from "react";

const SideProjects: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-8">
      <h1 className="text-2xl font-bold mb-8">Side Projects</h1>
      <p className="text-md mb-4">
        Explore some of the side projects I’ve worked on, blending creativity
        and functionality.
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        {/* Example project */}
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer">
          <img
            src="./assets/sideprojects/aipoemcamera.jpg"
            alt="AI Poem Camera"
            className="object-cover w-full h-48"
          />
        </div>
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer">
          <img
            src="./assets/sideprojects/taptac.jpg"
            alt="TapTac"
            className="object-cover w-full h-48"
          />
        </div>
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer">
          <img
            src="./assets/sideprojects/spelling.jpg"
            alt="Spelling"
            className="object-cover w-full h-48"
          />
        </div>
      </div>
    </div>
  );
};

export default SideProjects;