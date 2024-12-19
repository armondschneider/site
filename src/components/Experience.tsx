import React from "react";
import LogoHoverEffect from "./LogoHoverEffect";

interface ExperienceProps {
  title: string;
  logoSrc: string;
  description: string;
  dates: string;
  images: string[];
  onImageClick: (imageSrc: string) => void;
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  logoSrc,
  description,
  dates,
  images,
  onImageClick,
}) => {
  return (
    <div className="mb-12">
      <p className="text-left text-md font-medium">
        <LogoHoverEffect text={title} logoSrc={logoSrc} />
      </p>
      <p className="text-left text-pretty text-md mt-2 text-gray-900">{description}</p>
      <p className="text-left text-md text-gray-400 mt-2 pb-8 font-regular">{dates}</p>
      <div className="overflow-x-auto custom-scrollbar pb-4 md:overflow-visible">
        <div className="flex gap-4 md:grid md:grid-cols-3 md:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="shrink-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm w-[80%] md:w-auto cursor-pointer"
              onClick={() => onImageClick(image)}
            >
              <img
                src={image}
                alt={`Experience Image ${index + 1}`}
                className="object-cover w-full h-48 md:h-56"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;