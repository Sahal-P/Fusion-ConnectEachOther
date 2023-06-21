import React, { useEffect, useRef, useState } from "react";
import Vedio from "./assets/Video.mp4";
import "./VPlayer.css";
import formatDuration from "./helpers";
import sub from "./assets/subtitles.vtt";

export const VPlayer = () => {
  const vedioRef = useRef();
  const [captionData, setCaptionData] = useState(null);

  useEffect(() => {
    Playref.current.focus();
    let captions = vedioRef.current.textTracks[0];
    captions.mode = "hidden";
    setCaptionData(captions);
    timelineCont.current.addEventListener("mousemove", HandleTimelineUpdate);
  }, []);

  const playPause = useRef();
  const Playref = useRef();
  const volumeSilder = useRef();
  const currentTime = useRef();
  const totalTime = useRef();
  const speedBtn = useRef();
  const timelineCont = useRef();
  const [volume, setVolume] = useState(1);

  const TogglePlayPause = () => {
    vedioRef.current.paused
      ? vedioRef.current.play()
      : vedioRef.current.pause();
  };
  const playEvent = () => {
    playPause.current.classList.remove("paused");
  };
  const pauseEvent = () => {
    playPause.current.classList.add("paused");
  };
  const HandleKeyBoardControls = (event) => {
    const tagName = document.activeElement.tagName.toLocaleLowerCase();
    if (tagName === "input") return;
    // eslint-disable-next-line default-case
    switch (event.key.toLocaleLowerCase()) {
      case "k":
        TogglePlayPause();
        break;
      case "f":
        HandleFullScreen();
        break;
      case "i":
        HandleMiniPlayer();
        break;
      case "t":
        HandleTheaterMode();
        break;
      case "m":
        HandleMuteBtn();
        break;
      case "arrowleft":
      case "j":
        skip(-5);
        break;
      case "arrowright":
      case "l":
        skip(5);
        break;
      case "c":
        HandleCaption();
        break;
    }
  };

  const HandleFullScreen = () => {
    // const handle = ()=>{
    //     if (document.fullscreenElement === null){
    //       vedioRef.current.requestFullscreen()
    //     }else{
    //       document.exitFullscreen()
    //     }
    // }
    // vedioRef.current.addEventListener('fullscreenchange', handle())
    playPause.current.classList.toggle("full-screen");
  };
  const HandleTheaterMode = () => {
    // vedioRef.current.requestFullscreen()
    playPause.current.classList.toggle("theater");
  };
  const HandleMiniPlayer = () => {
    if (playPause.current.classList.contains("mini-player")) {
      document.exitPictureInPicture();
      playPause.current.classList.remove("mini-player");
    } else {
      vedioRef.current.requestPictureInPicture();
      playPause.current.classList.add("mini-player");
    }
  };

  const HandleVolumeState = (event) => {
    setVolume(event.target.value);
  };
  const HandleVolumeChange = (event) => {
    vedioRef.current.volume = event.target.value;
    vedioRef.current.muted = event.target.value === 0;
  };

  const HandleMuteBtn = () => {
    vedioRef.current.muted = !vedioRef.current.muted;
  };
  const HandleVolumeIcon = () => {
    volumeSilder.current.value = vedioRef.current.volume;
    let volumeLevel;
    if (vedioRef.current.muted || vedioRef.current.volume === 0) {
      volumeSilder.current.value = 0;
      volumeLevel = "muted";
    } else if (vedioRef.current.volume >= 0.5) {
      volumeLevel = "high";
    } else {
      volumeLevel = "low";
    }
    playPause.current.dataset.volumeLevel = volumeLevel;
  };
  const HandleDuration = () => {
    totalTime.current.textContent = formatDuration(vedioRef.current.duration);
  };
  const HandleTimeUpdate = () => {
    currentTime.current.textContent = formatDuration(
      vedioRef.current.currentTime
    );
  };
  const skip = (duration) => {
    vedioRef.current.currentTime += duration;
  };
  // captions = "hidden"
  const HandleCaption = () => {
    const captions = captionData;
    const isHidden = captions.mode === "hidden";
    captions.mode = isHidden ? "showing" : "hidden";
    playPause.current.classList.toggle("captions", isHidden);
  };

  const HandlePlayBackSpeed = () => {
    let newPlayBackRate = vedioRef.current.playbackRate + 0.25;
    if (newPlayBackRate > 2) newPlayBackRate = 0.25;
    vedioRef.current.playbackRate = newPlayBackRate;
    speedBtn.current.textContent = `${newPlayBackRate}x`;
  };
  const HandleTimelineUpdate = () => {
    const rect = timelineCont.current.getBoundingClientRect();
  };
  const HandleTimeRefreshRate = (timeR) => {
    // let time_rate =
  };
  return (
    <div className="vP-vedio-component-base">
      <div className="vP-prev-icon">
        <button>/\---</button>
      </div>
      <div
        onKeyDown={HandleKeyBoardControls}
        className="vP-video-container paused"
        data-volume-level="high"
        ref={playPause}
      >
        <img src="" alt="" className="vP-thumbnail-img" />
        <div className="vP-video-controls-container">
          <div ref={timelineCont} className="vP-video-timeline-container">
            <div className="vP-timeline">
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img className="vP-preview-img" />
              <div className="vP-thumb-indicator"></div>
            </div>
          </div>

          <div className="vP-video-controls">
            <button
              ref={Playref}
              onClick={TogglePlayPause}
              className="vP-video-btn-play-pause"
            >
              <svg class="vP-play-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
              </svg>
              <svg class="vP-pause-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
              </svg>
            </button>
            <div className="vP-volume-container">
              <button onClick={HandleMuteBtn} className="vP-mute-btn">
                <svg class="vP-volume-high-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
                  />
                </svg>
                <svg class="vP-volume-low-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z"
                  />
                </svg>
                <svg class="vP-volume-muted-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"
                  />
                </svg>
              </button>
              <input
                ref={volumeSilder}
                className="vP-volume-slider"
                type="range"
                min="0"
                max="1"
                step="any"
                value={volume}
                onChange={HandleVolumeState}
                onInput={HandleVolumeChange}
              />
            </div>

            <div className="vP-duration-container">
              <div ref={currentTime} className="vP-current-time">
                0:00
              </div>
              /<div ref={totalTime} className="vP-total-time"></div>
            </div>

            <button className="vP-captions-btn" onClick={HandleCaption}>
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M18,11H16.5V10.5H14.5V13.5H16.5V13H18V14A1,1 0 0,1 17,15H14A1,1 0 0,1 13,14V10A1,1 0 0,1 14,9H17A1,1 0 0,1 18,10M11,11H9.5V10.5H7.5V13.5H9.5V13H11V14A1,1 0 0,1 10,15H7A1,1 0 0,1 6,14V10A1,1 0 0,1 7,9H10A1,1 0 0,1 11,10M19,4H5C3.89,4 3,4.89 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6C21,4.89 20.1,4 19,4Z"
                />
              </svg>
            </button>

            <button
              ref={speedBtn}
              onClick={HandlePlayBackSpeed}
              className="vP-speed-btn vP-wide"
            >
              1x
            </button>

            <button onClick={HandleMiniPlayer} className="vP-mini-player-btn">
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"
                />
              </svg>
            </button>
            <button onClick={HandleTheaterMode} className="vP-theater-btn">
              <svg class="vP-tall" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"
                />
              </svg>
              <svg class="vP-wide" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"
                />
              </svg>
            </button>
            <button onClick={HandleFullScreen} className="vP-full-screen-btn">
              <svg class="vP-open" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
                />
              </svg>
              <svg class="vP-close" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
                />
              </svg>
            </button>
          </div>
        </div>
        <video
          onClick={() => TogglePlayPause()}
          onLoadedData={HandleDuration}
          onPlay={playEvent}
          onPause={pauseEvent}
          onVolumeChange={HandleVolumeIcon}
          onTimeUpdate={HandleTimeUpdate}
          ref={vedioRef}
          src={Vedio}
        >
          <track kind="captions" srcLang="en" src={sub} />
        </video>
      </div>
    </div>
  );
};
