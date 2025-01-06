import React, { useState, useEffect } from "react";

const VideoCarousel = ({ videos }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(16 / 9);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  const changeVideo = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(changeVideo, 11000);
    return () => clearInterval(interval);
  }, [videos.length, activeIndex]);

  useEffect(() => {
    const updateAspectRatio = () => {
      const video = document.createElement("video");
      video.src = videos[0].src;

      video.onloadedmetadata = () => {
        const videoAspectRatio = video.videoWidth / video.videoHeight;
        setAspectRatio(videoAspectRatio);
      };
    };

    if (videos.length > 0) {
      updateAspectRatio();
    }
  }, [videos]);

  return (
    <div className="w-full relative">
      <div
        className="relative w-full"
        style={{
          paddingBottom: `${(1 / aspectRatio) * 100}%`,
        }}
      >
        <div className="absolute inset-0 bg-slate-50">
          {/* Darker Black Shade Overlay with increased opacity */}

          {videos.map((video, index) => (
            <div
              key={index}
              className={`absolute inset-0 duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100 z-20" : "opacity-0 -z-10"
              }`}
            >
              <video
                className="absolute w-full h-full object-cover"
                src={video.src}
                alt={video.alt}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black/50" />

              {/* Centered Content with New Style */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 font-unbounded text-center mx-auto w-3/5 ">
                {/* Small Header Text */}
                <div className="text-white text-xs sm:text-sm md:text-base uppercase tracking-wider mb-4">
                  {video.topText || "AD FILMS & MULTIMEDIA ADVERTISING"}
                </div>

                {/* Main Title - Large and Bold */}
                <h2 className="text-center font-unbounded">
                  <span className="text-[#B5D3F5] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold block mb-2">
                    {video.mainTitle ||
                      "Ready to tell your brand’s story? We’re here to help!"}
                  </span>
                </h2>

                {/* Description Text */}
                <p className="text-white text-xs sm:text-sm md:text-base text-center max-w-3xl mt-6 px-4 sm:px-6">
                  {video.description ||
                    "We craft engaging videos that boost sales and make your brand unforgettable."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-4 left-1/2">
        {videos.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full transition-colors ${
              activeIndex === index ? "bg-[#B5D3F5]" : "bg-white"
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>

      {/* Page Counter */}
      <div className="absolute z-30 bottom-4 right-4 text-white text-lg font-bold">
        <span className="text-[#B5D3F5]">0{activeIndex + 1}</span>
        <span className="text-white/70">/0{videos.length}</span>
      </div>
    </div>
  );
};

export default VideoCarousel;
