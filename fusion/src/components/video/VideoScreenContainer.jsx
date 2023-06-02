import { useContext, useEffect } from "react";
import { VideoContext } from "./VideoChat";
import VideoContent from "./VideoContent"
import VideoDefaultContent from "./VideoDefaultContent"

const VideoScreenContainer = ({user, refrence}) => {
  const { User } = useContext(VideoContext);
  const { RemoteUser } = useContext(VideoContext);
  return (
    <div
                  className="tile-3GyaDQ noVerticalMargin-3CFVBz"
                  style={{ width: 557 }}
                >
                  <div
                    className="outer-VAWfYQ tileSizer-4EltaN"
                    style={{ paddingTop: "56.25%" }}
                  >
                    <div className="inner-3je51t">
                      <div className="wrapper-9CUbzN tile-3FtID0">
                        <div
                          className="tile-2Dr6M1 tile-2TcwiO"
                          data-selenium-video-tile={1068017309110763611}
                        >
                          <div className="tileChild-2k7Wqh">
                            <div
                              className="focusTarget-2Zf7I9"
                              aria-label="Call tile, sahal"
                              role="button"
                              tabIndex={0}
                            />
                            <div className="voiceChannelEffectsContainer-1cDkyc">
                              <div
                                className="effectsWrapper-2Us22s"
                                style={{ width: 468 }}
                              >
                                <div className="effects-1HYZoP" />
                              </div>
                            </div>


                            
                            {/* <VideoDefaultContent/> */}

                            <VideoContent videoRef={refrence}/>
                            <div className="indicators-7iWi8t" />
                            <div className="overlayContainer-1suEh7">
                              <div className="overlayTop-_w1u2t" />
                              <div className="overlayBottom-3aKRJM">
                                <div
                                  className="text-md-normal-2rFCH3 overlayTitle-2efoIF"
                                  data-text-variant="text-md/normal"
                                >
                                  <span className="overlayTitleText-3xOA3Q">
                                   {user === 'user' ? User.name : RemoteUser} 
                                  </span>
                                </div>
                                <div className="statusContainer-2yJ1oM">
                                  <svg
                                    className="status-15kcmy"
                                    aria-hidden="true"
                                    role="img"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z"
                                      className=""
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="border-2Vy6FN" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  )
}

export default VideoScreenContainer
