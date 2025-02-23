import React, { useState, useEffect, useRef, useCallback } from "react";
import Car_FullBody from "../assets/Car_FullBody.svg";
import Car_Front from "../assets/Car_Front.svg";
import Car_Cabin from "../assets/Car_Cabin.svg";
import Car_Trunk from "../assets/Car_Trunk.svg";
import Car_Exterior from "../assets/Car_Exterior.svg";
import Comm_Alpha from "../assets/Comm_Alpha.svg";
import Comm_Engine from "../assets/Comm_Engine.svg";
import Comm_Cabin from "../assets/Comm_Cabin.svg";
import Play from "../assets/Play.svg";
import Pause from "../assets/Pause.svg";
import VCar_FullBody from "../assets/Car_FullBody.mp4";
import VCar_Front from "../assets/Car_Front.mp4";
import VCar_Cabin from "../assets/Car_Cabin.mp4";
import VCar_Trunk from "../assets/Car_Trunk.mp4";
import VCar_Exterior from "../assets/Car_Exterior.mp4";
import VComm_Alpha from "../assets/Comm_Alpha.mp4";
import VComm_Engine from "../assets/Comm_Engine.mp4";
import VComm_Cabin from "../assets/Comm_Cabin.mp4";
import 'smoothscroll-polyfill';
import { motion, useInView, useScroll } from "framer-motion";

import "../App.css"

interface VideoItem {
  src: string;
  title: string;
  image: string;
}

interface VideoCollection {
  Car_Videos: VideoItem[];
  Comm_Videos: VideoItem[];
}

const Videos : VideoCollection = {
  Car_Videos: [
    { src: VCar_FullBody, title: "Complete Body", image: Car_FullBody }, // SVG file
    { src: VCar_Front, title: "Front", image: Car_Front }, // MP4 file
    { src: VCar_Cabin, title: "Cabin", image: Car_Cabin },
    { src: VCar_Trunk, title: "Trunk", image: Car_Trunk },
    { src: VCar_Exterior, title: "Exterior", image: Car_Exterior },
  ],
  Comm_Videos: [
    { src: VComm_Alpha, title: "Complete Body", image: Comm_Alpha },
    { src: VComm_Engine, title: "Engine", image: Comm_Engine },
    { src: VComm_Cabin, title: "Cabin", image: Comm_Cabin },
  ],
};

const VehicleSelector: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const [selectedVideo, setSelectedVideo] = useState<string>(Videos.Car_Videos[0].src);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videosToShow = active === 0 ? Videos.Car_Videos : Videos.Comm_Videos;
  const sectionRef = useRef<HTMLDivElement>(null);
  // const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll({ container: sectionRef });
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" });
  // const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollStep, setScrollStep] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        setIsPlaying(true);
        videoRef.current.play().catch(() => setIsPlaying(false));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isInView]);


  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setScrollStep((prev) => Math.min(prev + 1, 2)); // Scroll forward
      } else {
        setScrollStep((prev) => Math.max(prev - 1, 0)); // Scroll backward
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  const handleWheel = useCallback((event: WheelEvent) => {
    if (!sectionRef.current) return;
    event.preventDefault();
    sectionRef.current.scrollLeft += event.deltaY * 2;
  }, []);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  // Automatically play the first video on component mount
  useEffect(() => {
    if (videosToShow.length > 0) {
      setSelectedVideo(videosToShow[0].src);
    }
  }, [active]);

  // Play/pause control
  const togglePlayPause = useCallback(() => { 
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

 // Video change handler
  const handleVideoChange = useCallback((src: string) => {
  setSelectedVideo(src);
  setIsPlaying(true);
  if (videoRef.current) {
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => setIsPlaying(false));
    }
  }, []);

  //video loaded before playing
  useEffect(() => {
    const video = videoRef.current;
    if (video && selectedVideo) {
      const playVideo = () => {
        video.play().catch((error) => console.log("Autoplay failed:", error));
      };

      // Ensure video is loaded before playing
      video.addEventListener("canplaythrough", playVideo, { once: true });

      return () => {
        video.removeEventListener("canplaythrough", playVideo);
      };
    }
  }, [selectedVideo]);

  return (
    <section 
      // ref={sectionRef} 
      className="flex flex-col h-screen gap-20 bg-black px-4 md:px-10 overflow-hidden relative text-white" id="vehicles">
      <motion.div
        className="flex items-center h-screen justify-center w-full absolute"
        initial={{ y: 100, opacity: 1 }}
        animate={scrollStep === 1  ? { y: 0, opacity: 1 } : { y: -250, opacity: 1 }}
        transition={{ duration: 0.8,  }}
      >
        <div 
          className={`flex items-center h-100vh justify-center w-full transition-all duration-700 ease-in-out  font-bold text-white absolute`}
          >
            <div className="w-[778px] h-[132px] flex flex-col font-light text-2xl md:text-4xl text-center">
              <span>Evolving the drive with
                <span className="font-semibold"> 360-degree</span></span> 
              <span className="mt-1">nonwoven solutions</span>
            </div>
        </div>
      </motion.div>
      
      {/* Sidebar Menu  and video player*/}
      <motion.div
        className="flex justify-between relative"
        style={{ opacity: scrollYProgress }}
        initial={{ y: 1000, opacity: 0 }}
        animate={scrollStep === 1  ? { y: 1000, opacity: 0 } : { y: 200, opacity: 1 }}
        transition={{ duration: 2,  }}
      >
        <div className="flex flex-col md:flex-row justify-between transition-all duration-700 ease-in-out relative"
          >
          <div className="flex flex-col pl-14 w-[340px] h-[340px] ml-[108px] relative 2xl:ml-[25%] md:py-[52px] py-5 bg-black text-white">
            <button
              type="button"
              onClick={() => setActive(0)}
              className={`transition-all  ${active === 0 ? "opacity-100 " : "opacity-20"}`}
            >
              <h3 className="sg-translate font-bold text-left text-[22px] pb-2">Passenger vehicles</h3>
              <h6 className="sg-translate font-normal text-left text-[12px]">
                Revving up nonwoven innovation from <br /> interior to exterior.
              </h6>
            </button>

            <button
              type="button"
              onClick={() => setActive(1)}
              className={`card-details-2 mt-14 w-full transition-all ${active === 1 ? "opacity-100 " : "opacity-20 "}`}
            >
              <h3 className="sg-translate font-bold text-left text-[22px] pb-2">Commercial vehicles</h3>
              <h6 className="sg-translate font-normal text-left text-[12px]">
                Advancing nonwoven engineering for <br /> heavy-duty vehicles.
              </h6>
            </button>

            <div className="slider-parent absolute left-0 h-full w-[2px] rounded-md bg-gray top-0">
              <div
                className="slider-height h-[50%] w-[2px] bg-white rounded-md transition-transform"
                style={{ transform: active === 1 ? "translateY(100%)" : "translateY(0%)" }}
              ></div>
            </div>
          </div>

          {/* Video Player */}
          <motion.div
            className="flex justify-between relative"
            style={{ opacity: scrollYProgress }}
            initial={{ y: 200, opacity: 1 }}
            animate={scrollStep === 1 ? { y: 200, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 2,  }}
            >
            <div className="flex justify-center w-full md:w-2/3 h-[340px] rounded-lg ml-[170px]">
                <video ref={videoRef} src={selectedVideo} className="w-[780px] h-[340px]"
                  property="auto" muted playsInline
                  // autoPlay
                />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Video List & Play,Pause Button */}
      <motion.div
          className="flex justify-center mt-10"
          style={{ opacity: scrollYProgress }}
          initial={{ x: -60, y: 1200, opacity: 1 }}
          animate={scrollStep === 1 ? { y: 1200, opacity: 1 } : { y: 150, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {videosToShow.length > 0 && (
            <div className="flex w-[720px] h-[81px] md:ml-[700px] items-center gap-10" >
              <div className="w-[523px] flex items-center justify-center gap-9">
                {videosToShow.map((video, index) => (
                  <div
                    key={index}
                    onClick={() => handleVideoChange(video.src)}
                    className={`flex flex-col w-fit items-center transition-opacity ${
                      selectedVideo === video.src ? 'opacity-100' : 'opacity-50'
                    } hover:opacity-100 cursor-pointer flex-shrink-0`}
                  >
                    <img src={video.image} alt={video.title} className="w-14 h-14 object-contain" />
                    <span className="text-xs mt-1 ">{video.title}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={togglePlayPause}
                className="w-14 h-14 flex items-center justify-center rounded-full"
                // className="w-14 h-14 flex items-center mr-10 justify-center rounded-full text-white relative"
                style={{
                  border: `4px solid transparent`,
                  
                }}
              >
                {isPlaying ? (
                  <img src={Pause} alt="Pause" className="w-4 h-4" />
                ) : (
                  <img src={Play} alt="Play" className="w-7 h-7 ml-1" />
                )}
                {/* {isPlaying ? <img src={Pause} alt="pause" /> : <img src={Play} className="h-8 w-8 flex justify-center items-center" alt="play" />} */}
              </button>
            </div>
          )}
      </motion.div>
    </section>
  );
};

export default VehicleSelector;
