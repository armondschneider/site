import { useState } from "react";
import HoverEffect from "./components/ProfileHoverEffect";
import Experience from "./components/Experience";
import ImageModal from "./components/ImageModal";
import {
  Github01Icon,
  Linkedin01Icon,
  Mail01Icon,
  ThreadsIcon,
  LicenseIcon,
} from "hugeicons-react";
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
      <div className="px-4 md:px-20">
        {/* Header Section */}
        <header className="py-8 relative">
          <h1 className="text-left text-lg font-semibold cursor-default relative">
            <HoverEffect
              text="Armond Schneider"
              imageSrc="./assets/armond/armond.jpg"
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
              className="underline"
              href="https://www.paradox.ai"
              target="_blank"
            >
              Paradox
            </a>
            .
          </p>
          <p className="text-left text-md mt-6 max-w-xl">
            Also building Verse, a camera app that uses AI to generate poetry based on what it sees.
          </p>
        </header>

        {/* Experience Section */}
        <div className="py-8 relative">
          <h2 className="mb-16 text-left text-md font-medium cursor-default relative">
            Experience
          </h2>

          <Experience
            title="Web UI Designer at Paradox"
            logoSrc="./assets/paradox/paradoxLogo.png"
            description="Reimagined and led the creation of seamless, reusable components that allowed our teams to craft career sites that see millions of users."
            dates="Feb 2024 - Present"
            images={[
              "./assets/paradox/paradox1.jpg",
              "./assets/paradox/paradox2.jpg",
              "./assets/paradox/paradox3.jpg",
            ]}
            onImageClick={handleImageClick}
          />

          <Experience
            title="Product Designer, Design Engineer at Dump"
            logoSrc="./assets/dump/dumpLogo.jpg"
            description="Served as the lead designer and worked closely with our engineer to bring the vision to life, crafting every user interface component and screen for our iOS application."
            dates="2023 - 2024"
            images={[
              "./assets/dump/dump1.jpg",
              "./assets/dump/dump2.jpg",
              "./assets/dump/dump3.jpg",
            ]}
            onImageClick={handleImageClick}
          />

          <Experience
            title="UI Designer at Hause"
            logoSrc="./assets/hause/hauseLogo.jpg"
            description="Focused on redefining how digital and physical art is showcased and sold, designing experiences that present data clearly while helping users connect more deeply with the artwork."
            dates="2022 - 2023"
            images={[
              "./assets/hause/hause1.jpg",
              "./assets/hause/hause2.jpg",
              "./assets/hause/hause3.jpg",
            ]}
            onImageClick={handleImageClick}
          />

          {/*side projects */}
          <div className="py-8 relative">
            <h2 className="mb-16 text-left text-md font-medium cursor-default relative">
              Side Projects
            </h2>
            <div className="overflow-x-auto custom-scrollbar pb-4 md:overflow-visible">
              <div className="flex gap-4 md:grid md:grid-cols-3 md:gap-8">
                {/* Project 1 */}
                <div
                  className="shrink-0 md:shrink rounded-xl overflow-hidden border border-gray-200 shadow-sm w-[80%] md:w-auto cursor-pointer"
                  onClick={() =>
                    setSelectedImage("./assets/sideprojects/aipoemcamera.jpg")
                  }
                >
                  <img
                    src="./assets/sideprojects/aipoemcamera.jpg"
                    alt="Project 1"
                    className="object-cover w-full h-48 md:h-56"
                  />
                </div>

                {/* Project 2 */}
                <div
                  className="shrink-0 md:shrink rounded-xl overflow-hidden border border-gray-200 shadow-sm w-[80%] md:w-auto cursor-pointer"
                  onClick={() =>
                    setSelectedImage("./assets/sideprojects/taptac.jpg")
                  }
                >
                  <img
                    src="./assets/sideprojects/taptac.jpg"
                    alt="Project 2"
                    className="object-cover w-full h-48 md:h-56"
                  />
                </div>

                {/* Project 3 */}
                <div
                  className="shrink-0 md:shrink rounded-xl overflow-hidden border border-gray-200 shadow-sm w-[80%] md:w-auto cursor-pointer"
                  onClick={() =>
                    setSelectedImage("./assets/sideprojects/spelling.jpg")
                  }
                >
                  <img
                    src="./assets/sideprojects/spelling.jpg"
                    alt="spelling"
                    className="object-cover w-full h-48 md:h-56"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* links */}
          <div className="flex flex-row gap-4 align-baseline">
            <a
              href="https://threads.net/@armondme"
              target="_blank"
              rel="noopener noreferrer"
              title="Threads"
              className="text-slate-400 hover:text-slate-900 transition-colors ease-out hover:rotate-3"
            >
              <ThreadsIcon size={26} />
            </a>
            <a
              href="https://github.com/armondschneider"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="text-slate-400 hover:text-slate-900 transition-colors ease-out hover:rotate-3"
            >
              <Github01Icon size={26} />
            </a>
            <a
              href="https://linkedin.com/in/armondschneider"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-slate-400 hover:text-slate-900 transition-colors ease-out hover:rotate-3"
            >
              <Linkedin01Icon size={26} />
            </a>
            <a
              href="https://read.cv/armond"
              target="_blank"
              title="Read.CV"
              className="rotate-12 text-slate-400 hover:text-slate-900 transition-colors ease-out hover:rotate-3"
            >
              <LicenseIcon size={24} />
            </a>
            <a
              href="mailto:armondschneider@gmail.com"
              title="Email"
              className="text-slate-400 hover:text-slate-900 transition-colors ease-out hover:rotate-3"
            >
              <Mail01Icon size={26} />
            </a>
          </div>
        </div>

        {/* Image Modal */}
        <ImageModal imageSrc={selectedImage} onClose={closeModal} />
      </div>
    </div>
  );
}

export default App;
