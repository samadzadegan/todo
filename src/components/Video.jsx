import { useRef, useState } from "react";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleClick = () => {
    setIsPlaying(!isPlaying);
    !isPlaying ? videoRef.current.play() : videoRef.current.pause();
  };

  return (
    <>
      <div className="bg-gray-100">
        <div className="flex items-center justify-center h-screen">
          <div className="space-y-2">
            <button
              className="border border-gray-300 font-bold px-4 py-1 bg-gray-100 rounded"
              onClick={handleClick}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
            <video width="250" ref={videoRef}>
              <source
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                type="video/mp4"
              ></source>
            </video>
          </div>
        </div>
      </div>
    </>
  );
}
