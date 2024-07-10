import { useRef, useState, useEffect } from 'react';

const VideoBg = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoSrc, setVideoSrc] = useState(''); // Initial empty state for video source

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    const updateVideoSource = () => {
     
      if (window.matchMedia('(max-width: 448px)').matches) {
        setVideoSrc('/mobileView.mp4');
        console.log('Mobile view video selected');
      } else {
        setVideoSrc('/website.mp4');
        console.log('Desktop view video selected');
      }
    };

    // Initial check
    updateVideoSource();

    // Add listener for window resize to handle viewport changes
    window.addEventListener('resize', updateVideoSource);

    return () => {
      window.removeEventListener('resize', updateVideoSource);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current && videoSrc) {
      videoRef.current.play();
    }
  }, [videoSrc]); // Ensure video plays when source changes

  return (
    <div className="video-container -z-10 absolute top-0 bottom-0 left-0 right-0 w-full h-full">
      <div className="absolute top-0 left-0 w-full right-0 bottom-0 h-full videoSadow"></div>
      {videoSrc == '/website.mp4' && (
        <video
          className="w-full h-full object-cover"
          id="background-video"
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
        >
          <source src={'/website.mp4'} type="video/mp4" />
          <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
          <source src={videoSrc.replace('.mp4', '.ogv')} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      )}
      {videoSrc == '/mobileView.mp4' && (
        <video
          className="w-full h-full"
          id="background-video"
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
        >
          <source src={'/mobileView.mp4'} type="video/mp4" />
          <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
          <source src={videoSrc.replace('.mp4', '.ogv')} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      )}
      {/* <button id="mute-unmute-btn" onClick={handleMuteUnmute}>
        {isMuted ? "Unmute" : "Mute"}
      </button> */}
      <div className="absolute -bottom-3 left-0 right-0 bg-black h-10 blurDiv2"></div>
    </div>
  );
};

export default VideoBg;
