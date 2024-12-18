import { useState } from "react";
import HoverEffect from "./components/ProfileHoverEffect";
import LogoHoverEffect from "./components/LogoHoverEffect";
import ImageModal from "./components/ImageModal";
import "./App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Shared Padding Container */}
      <div className="px-4 md:px-20">
        {/* Header Section */}
        <header className="py-8 relative">
          <h1 className="text-left text-lg font-medium cursor-default relative">
            <HoverEffect
              text="Armond Schneider"
              imageSrc="./src/assets/armond/armond.jpg"
            />
          </h1>

          {/* Description */}
          <p className="text-left text-md mt-6 max-w-xl">
            Interested in building ideas that bring happiness and improve the
            human digital experience.
          </p>
          <p className="text-left text-md mt-6 max-w-xl">
            Currently leading our Web Design System at{" "}
            <a
              href="https://www.paradox.ai"
            >
              Paradox
            </a>
            .
          </p>
        </header>

        {/* Experience Section */}
        <div className="py-8 relative">
          <h2 className="mb-16 text-left text-md font-medium cursor-default relative">
            Experience
          </h2>

          <div className="text-left">
            {/* Title and Description */}
            <div className="mb-8">
              <p className="text-md font-medium">
                <LogoHoverEffect
                  text="Web UI Designer at Paradox"
                  logoSrc="./src/assets/paradox/paradoxLogo.png"
                />
              </p>
              <p className="text-pretty text-md mt-2 text-gray-900">
                Reimagined and led the creation of seamless, reusable components
                that allowed our teams to craft career sites that see millions
                of users.
              </p>
              <p className="text-md text-gray-400 mt-2 font-regular">
                2024 - Present
              </p>
            </div>

            {/* Scrollable Image Grid */}
            <div className="overflow-x-auto custom-scrollbar pb-4 md:overflow-visible">
              <div className="flex gap-4 md:grid md:grid-cols-3 md:gap-8">
                {/* Image 1 */}
                <div
                  className="shrink-0 md:shrink rounded-xl overflow-hidden border border-gray-200 shadow-sm w-[80%] md:w-auto cursor-pointer"
                  onClick={() =>
                    handleImageClick("./src/assets/paradox/paradox1.jpg")
                  }
                >
                  <img
                    src="./src/assets/paradox/paradox1.jpg"
                    alt="UI Example 1"
                    className="object-cover w-full h-48 md:h-56"
                  />
                </div>
                {/* Image 2 */}
                <div
                  className="shrink-0 md:shrink rounded-xl overflow-hidden border border-gray-200 shadow-sm w-[80%] md:w-auto cursor-pointer"
                  onClick={() =>
                    handleImageClick("./src/assets/paradox/paradox2.jpg")
                  }
                >
                  <img
                    src="./src/assets/paradox/paradox2.jpg"
                    alt="UI Example 2"
                    className="object-cover w-full h-48 md:h-56"
                  />
                </div>
                {/* Image 3 */}
                <div
                  className="shrink-0 md:shrink rounded-xl overflow-hidden border border-gray-200 shadow-sm w-[80%] md:w-auto cursor-pointer"
                  onClick={() =>
                    handleImageClick("./src/assets/paradox/paradox3.jpg")
                  }
                >
                  <img
                    src="./src/assets/paradox/paradox3.jpg"
                    alt="UI Example 3"
                    className="object-cover w-full h-48 md:h-56"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal imageSrc={selectedImage} onClose={closeModal} />
    </div>
  );
}

export default App;
