
const UserProfileViewLayer = () => {
  return (
    <div
    id="popout_22"
    className="layer-componet-base"
    style={{ position: "fixed", bottom: "60.5px", left: 78 }}
  >
    <div className="layer-popout-profile-bottom">
      <div className="layer-popout-account-profile-wrapper">
        <div className="layer-popout-account-profile-userpopout-outer">
          <div className="layer-popout-account-profile-userpopout-inner">
            <svg
              className="layer-popout-profile-banner-svg-wrapper"
              viewBox="0 0 340 60"
              style={{ minWidth: 340, minHeight: 60 }}
            >
              <mask id="uid_214">
                <rect fill="white" x={0} y={0} width="100%" height="100%" />
                <circle fill="black" cx={62} cy={56} r={46} />
              </mask>
              <foreignObject
                x={0}
                y={0}
                width="100%"
                height="100%"
                overflow="visible"
                mask="url(#uid_214)"
              >
                <div
                  className="layer-profile-banner-popout"
                  style={{ backgroundColor: "rgb(136, 107, 225)" }}
                >
                  <div
                    className="pencilContainer"
                    aria-label="Edit Profile"
                    role="button"
                    tabIndex={0}
                  >
                    <svg
                      aria-label="Edit Profile"
                      className="pencilIcon-z04-c5"
                      aria-hidden="false"
                      role="img"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </foreignObject>
            </svg>
            <div
              className="layer-popout-profile-avatar-wrapper"
              role="button"
              tabIndex={0}
            >
              <div className="layer-popout-profile-avatarHoverTarget">
                <div
                  className="layer-popout-profile-avatarHoverTarget-wrapper"
                  role="img"
                  aria-label="sahal, Do Not Disturb"
                  aria-hidden="false"
                  style={{ width: 80, height: 80 }}
                >
                  <svg
                    width={92}
                    height={92}
                    viewBox="0 0 92 92"
                    className="layer-popout-profile-avatarHoverTarget-wrapper-mask"
                    aria-hidden="true"
                  >
                    <foreignObject
                      x={0}
                      y={0}
                      width={80}
                      height={80}
                      mask="url(#svg-mask-avatar-status-round-80)"
                    >
                      <div className="layer-profile-popout-avatarStack">
                        <img
                          src="https://cdn.discordapp.com/avatars/1068017309110763611/e478c68e74e9885eebd32ed02b40559a.webp?size=160"
                          alt=" "
                          className="layer-profile-popout-avatar"
                          aria-hidden="true"
                        />
                      </div>
                    </foreignObject>
                    <rect
                      width={16}
                      height={16}
                      x={60}
                      y={60}
                      fill="#f23f43"
                      mask="url(#svg-mask-status-dnd)"
                      className="pointerEvents-2KjWnj"
                    />
                  </svg>
                </div>
              </div>
              <svg
                width={80}
                height={80}
                className="layer-profile-popout-avatarHint"
                viewBox="0 0 80 80"
              >
                <foreignObject
                  x={0}
                  y={0}
                  width={80}
                  height={80}
                  overflow="visible"
                  mask="url(#svg-mask-avatar-status-round-80)"
                >
                  <div className="layer-profile-popout-avatarHint-inner">View Profile</div>
                </foreignObject>
              </svg>
            </div>
            {/* <svg
              aria-label="Unable to load profile banner, badges, and about me."
              className="warningCircleIcon-mFju_m"
              aria-hidden="false"
              role="img"
              width={20}
              height={20}
              viewBox="0 0 20 20"
            >
              <path
                d="M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="var(--yellow-300)"
              />
            </svg> */}
            <div
              className="profileBadges-2pItdR container-1gYwHN"
              aria-label="User Badges"
              role="group"
            />
            <div className="layer-profile-userPopoutOverlayBackground">
              <div className="layer-profile-usernameSection">
                <div className="">
                  <div
                    className=""
                    aria-label="Click to copy username"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="layer-profile-copiableField-Wrapper">
                      <div className="layer-profile-copiable-childWrapper">
                        <div className="layer-profile-copiable-usertext">
                          <div className="layer-profile-copiable-userTagNoNickname">
                            <span className="layer-profile-username">
                              sahal
                            </span>
                            <span className="layer-profile-username-tagid">
                              #8168
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="layer-profile-copiable-copyIcon"
                          aria-hidden="true"
                          role="img"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                        >
                          <g fill="currentColor">
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1z" />
                            <path d="M15 5H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="layer-profile-divider" />
              <div
                className="layer-profile-first-scroller"
                dir="ltr"
                style={{ overflow: "hidden scroll", paddingRight: 4 }}
              >
                <div className="section-28YDOf">
                  <h3
                    className="defaultColor-1EVLSt eyebrow-1Shfyi defaultColor-1GKx81 title-3CjiSS"
                    data-text-variant="eyebrow"
                  >
                    Fusion Member Since
                  </h3>
                  <div className="memberSinceContainer-2CBD23">
                    <div
                      className="defaultColor-1EVLSt text-sm-normal-AEQz4v body-N0onUF"
                      data-text-variant="text-sm/normal"
                    >
                      Jan 26, 2023
                    </div>
                  </div>
                </div>
                <div className="section-28YDOf" />
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    pointerEvents: "none",
                    minHeight: 0,
                    minWidth: 1,
                    flex: "0 0 auto",
                    height: 0
                  }}
                />
              </div>
              <div className="layer-profile-divider" />
              <div
                className="menu-2TXYjN flexible-3B4jwn menu-2-eHMB"
                role="menu"
                id="account"
                tabIndex={-1}
                aria-label="Set Status"
              >
                <div
                  className="scroller-nxCRu_ none-1rXy4P scrollerBase-1Pkza4"
                  dir="ltr"
                  style={{ overflow: "hidden scroll", paddingRight: 8 }}
                >
                  <div role="group">
                    <div>
                      <div />
                      <div
                        className="item-5ApiZt labelContainer-35-WEd colorDefault-2_rLdz"
                        aria-expanded="false"
                        aria-haspopup="true"
                        role="menuitem"
                        id="account-status-picker"
                        tabIndex={-1}
                        data-menu-item="true"
                      >
                        <div className="iconContainerLeft-1Kr6X4 iconContainer-Ksy8Oj">
                          <svg
                            width={12}
                            height={12}
                            className="svg-lIB-lq mask-3tgVZv icon-3XHs8t mainStatusIcon-25wiNY"
                            viewBox="0 0 12 12"
                          >
                            <foreignObject
                              x={0}
                              y={0}
                              width={12}
                              height={12}
                              overflow="visible"
                              mask="url(#svg-mask-status-dnd)"
                            >
                              <div
                                className="status-3cqfT9"
                                style={{ backgroundColor: "var(--red-400)" }}
                              />
                            </foreignObject>
                          </svg>
                        </div>
                        <div className="label-3CEiKJ">Do Not Disturb</div>
                        <div className="iconContainer-Ksy8Oj">
                          <svg
                            className="caret-1TZU-U subMenuIcon-25xQRT"
                            aria-hidden="true"
                            role="img"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <g fill="none" fillRule="evenodd">
                              <polygon
                                fill="currentColor"
                                fillRule="nonzero"
                                points="8.47 2 6.12 4.35 13.753 12 6.12 19.65 8.47 22 18.47 12"
                              />
                              <polygon points="0 0 24 0 24 24 0 24" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div
                      className="item-5ApiZt labelContainer-35-WEd colorDefault-2_rLdz"
                      role="menuitem"
                      id="account-set-custom-status"
                      tabIndex={-1}
                      data-menu-item="true"
                    >
                      <div className="iconContainerLeft-1Kr6X4 iconContainer-Ksy8Oj">
                        <div className="customEmojiPlaceholder-35gKOP customEmoji-3gAdQA className" />
                      </div>
                      <div className="label-3CEiKJ">Set Custom Status</div>
                    </div>
                  </div>
                  <div role="separator" className="separator-12G2Op" />
                  <div role="group">
                    <div>
                      <div />
                      <div
                        className="item-5ApiZt labelContainer-35-WEd colorDefault-2_rLdz"
                        aria-expanded="false"
                        aria-haspopup="true"
                        role="menuitem"
                        id="account-switch-account"
                        tabIndex={-1}
                        data-menu-item="true"
                      >
                        <div className="iconContainerLeft-1Kr6X4 iconContainer-Ksy8Oj">
                          <svg
                            className="icon-3XHs8t"
                            aria-hidden="true"
                            role="img"
                            width={20}
                            height={20}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.4996 0H6.72144C6.62254 1.34004e-06 6.52586 0.0293272 6.44363 0.0842743C6.36141 0.139221 6.29733 0.217322 6.25949 0.308693C6.22165 0.400063 6.21176 0.500602 6.23106 0.597595C6.25037 0.694589 6.298 0.783679 6.36794 0.8536L7.63564 2.1213C7.82317 2.30884 7.92853 2.56319 7.92853 2.8284C7.92853 3.09361 7.82317 3.34796 7.63564 3.5355L6.22144 4.9498C5.65884 5.51241 5.34277 6.27546 5.34277 7.0711C5.34277 7.86674 5.65884 8.62979 6.22144 9.1924C6.40897 9.37993 6.66331 9.48528 6.92853 9.48528C7.19374 9.48528 7.4481 9.37993 7.63564 9.1924L9.75703 7.0711C10.1321 6.69603 10.6408 6.48533 11.1712 6.48533C11.7017 6.48533 12.2104 6.69603 12.5854 7.0711L13.146 7.6317C13.2159 7.70164 13.305 7.74927 13.402 7.76858C13.499 7.78788 13.5996 7.77799 13.6909 7.74015C13.7823 7.70231 13.8604 7.63823 13.9154 7.556C13.9703 7.47377 13.9996 7.37709 13.9996 7.2782V0.5C13.9996 0.367392 13.9469 0.240214 13.8532 0.146446C13.7594 0.052678 13.6322 0 13.4996 0Z"
                              fill="currentColor"
                            />
                            <path
                              d="M4.5 17.9999H11.2782C11.3771 17.9999 11.4738 17.9706 11.556 17.9157C11.6382 17.8607 11.7023 17.7826 11.7401 17.6912C11.778 17.5999 11.7879 17.4993 11.7686 17.4023C11.7493 17.3053 11.7016 17.2163 11.6317 17.1463L10.364 15.8786C10.1765 15.6911 10.0711 15.4367 10.0711 15.1715C10.0711 14.9063 10.1765 14.652 10.364 14.4644L11.7782 13.0501C12.3408 12.4875 12.6569 11.7245 12.6569 10.9288C12.6569 10.1332 12.3408 9.37014 11.7782 8.80753C11.5907 8.62 11.3363 8.51465 11.0711 8.51465C10.8059 8.51465 10.5515 8.62 10.364 8.80753L8.2426 10.9288C7.86753 11.3039 7.35883 11.5146 6.8284 11.5146C6.29797 11.5146 5.78927 11.3039 5.4142 10.9288L4.85361 10.3682C4.78369 10.2983 4.69459 10.2507 4.5976 10.2314C4.5006 10.2121 4.40006 10.2219 4.30869 10.2598C4.21731 10.2976 4.13922 10.3617 4.08427 10.4439C4.02933 10.5262 4 10.6228 4 10.7217V17.4999C4 17.6325 4.05269 17.7597 4.14645 17.8535C4.24022 17.9473 4.36739 17.9999 4.5 17.9999Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <div className="label-3CEiKJ">Switch Accounts</div>
                        <div className="iconContainer-Ksy8Oj">
                          <svg
                            className="caret-1TZU-U subMenuIcon-25xQRT"
                            aria-hidden="true"
                            role="img"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <g fill="none" fillRule="evenodd">
                              <polygon
                                fill="currentColor"
                                fillRule="nonzero"
                                points="8.47 2 6.12 4.35 13.753 12 6.12 19.65 8.47 22 18.47 12"
                              />
                              <polygon points="0 0 24 0 24 24 0 24" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      pointerEvents: "none",
                      minHeight: 0,
                      minWidth: 1,
                      flex: "0 0 auto",
                      height: 6
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserProfileViewLayer
