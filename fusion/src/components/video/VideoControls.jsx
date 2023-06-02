
const VideoControls = ({createOffer, createAnswer}) => {
  return (
    <div className="videoControls-353CsJ">
          <div className="gradientTop-1UBZHm gradientContainer-phMG8d" />
          <div className="gradientBottom-uB_-4E gradientContainer-phMG8d" />
          <div className="topControls-23RE3h controlSection-1mNixL">
            <div>
              <div className="headerWrapper-1ULEPv">
                <section className="theme-dark container-ZMc96U transparent-1lUmft">
                  <div className="children-3xh0VB">
                    <div className="iconWrapper-2awDjA">
                      <svg
                        x={0}
                        y={0}
                        className="icon-2xnN2Y"
                        aria-hidden="true"
                        role="img"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z"
                          aria-hidden="true"
                        />
                      </svg>
                    </div>
                    <div className="titleWrapper-24Kyzc">
                      <h1
                        className="defaultColor-1EVLSt heading-md-semibold-2h_vsp defaultColor-1GKx81 title-17SveM"
                        data-text-variant="heading-md/semibold"
                      >
                        Lounge
                      </h1>
                    </div>
                    <div className="container-17V_oy" />
                  </div>
                  <div className="toolbar-3_r2xA">
                    <div>
                      <button onClick={createOffer}
                        aria-label="Search users and channels"
                        type="button"
                        className="button-1fGHAH button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"
                      >
                        <div className="contents-3NembX lineHeightReset-1WxXXk">
                          <svg
                            className="controlIcon-10O-4h"
                            aria-hidden="true"
                            role="img"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                    <div>
                      <button onClick={createAnswer}
                        aria-label="Focus"
                        type="button"
                        className="button-1fGHAH button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"
                      >
                        <div className="contents-3NembX lineHeightReset-1WxXXk">
                          <svg
                            className="controlIcon-10O-4h"
                            aria-hidden="true"
                            role="img"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              x={3}
                              y={3}
                              width={18}
                              height={10}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={3}
                              y={15}
                              width={8}
                              height={6}
                              rx={1}
                              fill="currentColor"
                            />
                            <rect
                              x={13}
                              y={15}
                              width={8}
                              height={6}
                              rx={1}
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                    <div className="recentsIcon-F3eO1o">
                      <div
                        className="button-1fGHAH iconWrapper-2awDjA clickable-ZD7xvu"
                        role="button"
                        aria-label="Inbox"
                        aria-expanded="false"
                        tabIndex={0}
                      >
                        <svg
                          x={0}
                          y={0}
                          className="icon-2xnN2Y"
                          aria-hidden="true"
                          role="img"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <button
                        aria-label="More"
                        type="button"
                        className="lastButton-3QdII0 button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"
                      >
                        <div className="contents-3NembX lineHeightReset-1WxXXk">
                          <svg
                            className="controlIcon-10O-4h"
                            aria-hidden="true"
                            role="img"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                    <div className="divider-q3P9HC divider-2keupe" />
                    <div>
                      <span className="disabledButtonWrapper-1m0hYZ chatButtonSpacer-16BvMu grow-2T4nbg">
                        <button
                          aria-label="Show Chat"
                          type="button"
                          disabled=""
                          className="button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"
                        >
                          <div className="contents-3NembX lineHeightReset-1WxXXk">
                            <div className="chatIcon-R5MUNn controlIcon-10O-4h">
                              <svg width={24} height={24} viewBox="0 0 24 24">
                                <defs>
                                  <mask id="a633bfa8-88cf-47cb-9694-d71997191197">
                                    <rect
                                      fill="white"
                                      width="100%"
                                      height="100%"
                                    />
                                  </mask>
                                </defs>
                                <path
                                  fill="currentColor"
                                  d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                                  mask="url(#a633bfa8-88cf-47cb-9694-d71997191197)"
                                />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <span className="disabledButtonOverlay-10gJ0t" />
                      </span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="bottomControls-31YuPK controlSection-1mNixL">
            <div
              className="flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyStart-2Mwniq alignCenter-14kD11 noWrap-hBpHBz"
              style={{ flex: "0 1 50%" }}
            >
              <div className="voiceEffectsActionBar-EX-WFC">
                
                <div className="container-2Dmf5H">
                  <div>
                    <button
                      type="button"
                      className="actionBarButton-13NNTn button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N"
                    >
                      <div className="contents-3NembX lineHeightReset-1WxXXk">
                        <svg
                          className="controlIcon-10O-4h"
                          aria-hidden="true"
                          role="img"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.523 2 12 2ZM8 6C9.104 6 10 6.896 10 8C10 9.105 9.104 10 8 10C6.896 10 6 9.105 6 8C6 6.896 6.896 6 8 6ZM18 14C18 16.617 15.14 19 12 19C8.86 19 6 16.617 6 14V13H18V14ZM16 10C14.896 10 14 9.105 14 8C14 6.896 14.896 6 16 6C17.104 6 18 6.896 18 8C18 9.105 17.104 10 16 10Z"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyCenter-rrurWZ alignCenter-14kD11 noWrap-hBpHBz"
              style={{ flex: "1 1 auto" }}
            >
              <div className="eventPromptsContainer-ru7sNW" />
              <div className="wrapper-3t3Yqv">
                <div className="controlButton-2PMNom contextMenuContainer-1RO4DQ">
                  <svg
                    width={56}
                    height={56}
                    className="svg-lIB-lq"
                    viewBox="0 0 56 56"
                  >
                    <foreignObject
                      x={0}
                      y={0}
                      width={56}
                      height={56}
                      overflow="visible"
                      mask="url(#svg-mask-channel-call-control-button)"
                    >
                      <div>
                        <button
                          aria-label="Turn On Camera"
                          type="button"
                          className="staticButton-1oD4l7 centerButton-1IShs7 colorable-3rVGna primaryDark-2UJt1G button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N"
                        >
                          <div className="contents-3NembX lineHeightReset-1WxXXk">
                            <svg
                              className="controlIcon-10O-4h centerIcon-JYpTUi"
                              aria-hidden="true"
                              role="img"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M21.526 8.149C21.231 7.966 20.862 7.951 20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </foreignObject>
                  </svg>
                  <div>
                  </div>
                </div>
                <div className="unmasked-3zpww7 controlButton-2PMNom">
                  <div>
                    <button
                      aria-label="Turn On Camera"
                      type="button"
                      className="staticButton-1oD4l7 centerButton-1IShs7 colorable-3rVGna primaryDark-2UJt1G button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N"
                    >
                      <div className="contents-3NembX lineHeightReset-1WxXXk">
                        <svg
                          className="controlIcon-10O-4h centerIcon-JYpTUi"
                          aria-hidden="true"
                          role="img"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M21.526 8.149C21.231 7.966 20.862 7.951 20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="buttonContainer-1sjtPU">
                  <div className="">
                    <div>
                      <button
                        aria-label="Start an Activity"
                        type="button"
                        className="controlButton-2PMNom centerButton-1IShs7 colorable-3rVGna primaryDark-2UJt1G button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N"
                      >
                        <div className="contents-3NembX lineHeightReset-1WxXXk">
                          <svg
                            className="controlIcon-10O-4h centerIcon-JYpTUi"
                            aria-hidden="true"
                            role="img"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <g clipPath="url(#91f26562-2d66-4683-907d-630372815133)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.92871 13.4149L10.5857 19.0709L18.3639 11.2927C19.7781 9.87859 22.6066 6.48376 21.1923 2.80748C17.5153 1.3932 14.1213 4.22173 12.7074 5.63625L4.92871 13.4149ZM16.064 9.93309C17.1686 9.93309 18.064 9.03766 18.064 7.93309C18.064 6.82852 17.1686 5.93309 16.064 5.93309C14.9594 5.93309 14.064 6.82852 14.064 7.93309C14.064 9.03766 14.9594 9.93309 16.064 9.93309Z"
                                fill="currentColor"
                              />
                              <path
                                d="M3.41357 16.7844C2.34946 17.8496 2.00004 22 2.00004 22C2.00004 22 6.15125 21.6521 7.21627 20.5869C7.71243 20.0915 7.96638 19.4494 8 18.8004L5.21285 18.7866L5.19829 16C4.54947 16.0336 3.90973 16.2881 3.41357 16.7844Z"
                                fill="currentColor"
                              />
                              <path
                                d="M9.17144 9.17151H3.51459L1.74684 10.9393L6.34302 11.9999L9.17144 9.17151Z"
                                fill="currentColor"
                              />
                              <path
                                d="M14.8283 14.8283V20.4852L13.0606 22.2529L11.9999 17.6568L14.8283 14.8283Z"
                                fill="currentColor"
                              />
                            </g>
                            <defs>
                              <clipPath id="91f26562-2d66-4683-907d-630372815133">
                                <rect width={24} height={24} />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="">
                      <div>
                        <button
                          aria-label="Share Your Screen"
                          type="button"
                          className="controlButton-2PMNom centerButton-1IShs7 colorable-3rVGna primaryDark-2UJt1G button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N"
                        >
                          <div className="contents-3NembX lineHeightReset-1WxXXk">
                            <svg
                              className="controlIcon-10O-4h centerIcon-JYpTUi"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="controlButton-2PMNom contextMenuContainer-1RO4DQ">
                  <svg
                    width={56}
                    height={56}
                    className="svg-lIB-lq"
                    viewBox="0 0 56 56"
                  >
                    <foreignObject
                      x={0}
                      y={0}
                      width={56}
                      height={56}
                      overflow="visible"
                      mask="url(#svg-mask-channel-call-control-button)"
                    >
                      <div>
                        <button
                          aria-label="Unmute"
                          type="button"
                          className="staticButton-1oD4l7 centerButton-1IShs7 colorable-3rVGna white-11auuQ button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N"
                        >
                          <div className="contents-3NembX lineHeightReset-1WxXXk">
                            <svg
                              className="controlIcon-10O-4h centerIcon-JYpTUi"
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
                                className="slash-2yrR11"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </foreignObject>
                  </svg>
                  <div>
                    
                  </div>
                </div>
                <div className="unmasked-3zpww7 controlButton-2PMNom">
                  <div>
                    <button
                      aria-label="Unmute"
                      type="button"
                      className="staticButton-1oD4l7 centerButton-1IShs7 colorable-3rVGna white-11auuQ button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N"
                    >
                      <div className="contents-3NembX lineHeightReset-1WxXXk">
                        <svg
                          className="controlIcon-10O-4h centerIcon-JYpTUi"
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
                            className="slash-2yrR11"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
                <div style={{ opacity: 1, transform: "scale(1)" }}>
                  <div className="">
                    <div>
                      <button
                        aria-label="Disconnect"
                        type="button"
                        className="controlButton-2PMNom centerButton-1IShs7 colorable-3rVGna red-3T8maV button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N"
                      >
                        <div className="contents-3NembX lineHeightReset-1WxXXk">
                          <svg
                            className="controlIcon-10O-4h centerIcon-JYpTUi"
                            aria-hidden="true"
                            role="img"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21.1169 1.11603L22.8839 2.88403L19.7679 6.00003L22.8839 9.11603L21.1169 10.884L17.9999 7.76803L14.8839 10.884L13.1169 9.11603L16.2329 6.00003L13.1169 2.88403L14.8839 1.11603L17.9999 4.23203L21.1169 1.11603ZM18 22H13C6.925 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22Z"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyEnd-2G0m6w alignCenter-14kD11 noWrap-hBpHBz"
              style={{ flex: "0 1 50%" }}
            >
              <div>
                <button
                  aria-label="Pop Out"
                  type="button"
                  className="rightTrayIcon-1m3hnG button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"
                >
                  <div className="contents-3NembX lineHeightReset-1WxXXk">
                    <svg
                      className="controlIcon-10O-4h"
                      aria-hidden="true"
                      role="img"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
                      />
                      <path
                        fill="currentColor"
                        d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
                      />
                    </svg>
                  </div>
                </button>
              </div>
              <div>
                <button
                  aria-label="Full Screen"
                  type="button"
                  className="rightTrayIcon-1m3hnG button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"
                >
                  <div className="contents-3NembX lineHeightReset-1WxXXk">
                    <svg
                      className="controlIcon-10O-4h"
                      aria-hidden="true"
                      role="img"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19,3H14V5h5v5h2V5A2,2,0,0,0,19,3Z"
                      />
                      <path
                        fill="currentColor"
                        d="M19,19H14v2h5a2,2,0,0,0,2-2V14H19Z"
                      />
                      <path
                        fill="currentColor"
                        d="M3,5v5H5V5h5V3H5A2,2,0,0,0,3,5Z"
                      />
                      <path
                        fill="currentColor"
                        d="M5,14H3v5a2,2,0,0,0,2,2h5V19H5Z"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default VideoControls
