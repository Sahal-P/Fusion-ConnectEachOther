import { useContext } from "react";
// import { VideoContext } from "./VideoChat";

const VideoContent = ({videoRef}) => {
  // const { localVideoRef, remoteVideoRef } = useContext(VideoContext);

  return (
    <div className="wrapper-1LQiOL videoWrapper-3rtb_V">
  <video style={{objectFit:'contain'}} ref={videoRef}
    className="media-engine-video video-35SHWt videoContain-3Kfu1x mirror-2qdBDS content-3u3YYB"
    autoPlay
  />
  <div className="previewWrapper--xCwTW video-35SHWt" />
</div>

  )
}

export default VideoContent
