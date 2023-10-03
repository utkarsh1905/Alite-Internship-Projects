import { useState, useEffect } from "react";
import useHover from "./usePlayMedia";

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [ref, isMouseInside] = useHover();

  const handleTogglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

  useEffect(() => {
    if (isMouseInside) {
      setIsPlaying(true);
      if (ref.current) {
        ref.current?.play();
      }
    } else {
      if (ref.current) {
        ref.current?.pause();
      }
      setIsPlaying(false);
    }
  }, [isMouseInside, ref]);

  return (
    <div className="relative">
      <div className="w-64 h-64 bg-gray-900 flex items-center justify-center">
        <video
          src="/src/sample_video (720p).mp4"
          className="w-full h-full object-cover"
          ref={ref}
          controls
        />
        <button
          onClick={handleTogglePlay}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 text-gray-900`}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
