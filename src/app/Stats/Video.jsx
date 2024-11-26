export default function Video() {
    return (
      <div className="w-full max-w-[80%] md:max-w-[60%] my-12 mx-auto">
        <video 
          className="w-full h-auto" 
          controls 
          preload="auto" 
          autoPlay 
          muted 
          loop
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  