import ReactPlayer from "react-player";

const VideoBackGround = () => {
  return (
    <div className="absolute top-36 left-0 z-[10]">
      <ReactPlayer
        height={"100%"}
        width={"100%"}
        url="/landing.mp4"
        loop
        playing
      />
    </div>
  );
};

export default VideoBackGround;
