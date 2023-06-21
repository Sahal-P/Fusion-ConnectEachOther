import { useDispatch, useSelector } from "react-redux";
import { CreateChannelActions } from "../redux/features/pop/CreateChannelPopSlice";
import "../components/chat/test.css";
const CreateChannel = () => {
  const state = useSelector((state) => state.createChannel.value);
  const dispatch = useDispatch();
  const PopOutChannelCreate = () => {
    dispatch(CreateChannelActions.setChannelPop(false));
  };
  return (
    <>
      <div style={{ display: state ? "block" : "none" }}>
        <div
          onClick={PopOutChannelCreate}
          className="backdrop-2ByYRN withLayer-2VVmpp "
          style={{ opacity: "0.85", background: "var(--black-500)" }}
        />

        <div className={`layer-fP3xEz`}>
          <div
            className="focusLock-bHVOlV"
            role="dialog"
            aria-labelledby="uid_285"
            tabIndex={-1}
            aria-modal="true"
          >
            <div
              className="modal-1Kmy_E scrollbarGhostHairline-2LpzZ9 scrollbar-3vVt8d root-1CAIjD fullscreenOnMobile-2971EC rootWithShadow-2hdL2J"
              style={{ opacity: 1, transform: "scale(1)" }}
            >
              <form>
                <div>
                  <div
                    style={{
                      position: "relative",
                      width: 460,
                      height: 482,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        flexDirection: "column",
                        backfaceVisibility: "hidden",
                        width: 460,
                        transform: "translate3d(0px, -50%, 0px) scale(1, 1)",
                        top: "50%",
                        left: "auto",
                        right: "auto",
                      }}
                    >
                      <div
                        className="flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyStart-2Mwniq alignCenter-14kD11 noWrap-hBpHBz header-1ffhsl"
                        style={{ flex: "0 0 auto" }}
                      >
                        <div className="header-o8wV_s">
                          <h1
                            className="defaultColor-1EVLSt heading-lg-semibold-14ouVv defaultColor-1GKx81 title-CDVS9k"
                            id="uid_285"
                            data-text-variant="heading-lg/semibold"
                          >
                            Create Channel
                          </h1>
                        </div>
                      </div>
                      <div
                        className="content-1OG56Q modalContent-33IoUE thin-RnSY0a scrollerBase-1Pkza4"
                        dir="ltr"
                        style={{ overflow: "hidden scroll", paddingRight: 8 }}
                      >
                        <div className="type-170HeD marginBottom20-315RVT">
                          <h2
                            className="h5-2feg8J eyebrow-2wJAoF defaultMarginh5-3THN2O"
                            id=":r3:"
                          >
                            Channel Type
                          </h2>
                          <div
                            role="radiogroup"
                            aria-labelledby=":r3:"
                            aria-orientation="vertical"
                            aria-disabled="false"
                          >
                            <div
                              className="item-1TA5qI marginBottom8-emkd0_ horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 itemFilled-2Fo7lr"
                              role="radio"
                              aria-checked="true"
                              tabIndex={0}
                            >
                              <div className="radioBar-1XgZqD radioPositionLeft-27wZ8M radioBar-3_FqUK">
                                <div className="radioBarIcon-EiCq-C">
                                  <svg
                                    aria-hidden="true"
                                    role="img"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                      fill="currentColor"
                                    />
                                    <circle
                                      cx={12}
                                      cy={12}
                                      r={5}
                                      className="radioIconForeground-3wH3aU"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                                <div className="info-3cKxwI radioBarLabel-1MDA6y">
                                  <div
                                    className="text-md-medium-2n7Vn5"
                                    data-text-variant="text-md/medium"
                                  >
                                    <div className="radioItemName-3F4dmu">
                                      <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        className="icon-1ykL9s"
                                        background="background-2neGeL"
                                        aria-hidden="true"
                                        role="img"
                                      >
                                        <path
                                          className="foreground-1dSmCM"
                                          fill="currentColor"
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
                                        />
                                      </svg>
                                      <div>
                                        <div
                                          className="defaultColor-1EVLSt text-md-medium-2n7Vn5 radioLabelName-3FiyYq"
                                          data-text-variant="text-md/medium"
                                        >
                                          Text
                                        </div>
                                        <div
                                          className="text-sm-normal-AEQz4v radioLabelDescription-2ZSE0N"
                                          data-text-variant="text-sm/normal"
                                          style={{
                                            color: "var(--header-secondary)",
                                          }}
                                        >
                                          Send messages, images, GIFs, emoji,
                                          opinions, and puns
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="item-1TA5qI marginBottom8-emkd0_ horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 itemFilled-2Fo7lr"
                              role="radio"
                              aria-checked="false"
                              tabIndex={-1}
                            >
                              <div className="radioBar-1XgZqD radioPositionLeft-27wZ8M radioBar-3_FqUK">
                                <div className="radioBarIcon-EiCq-C">
                                  <svg
                                    aria-hidden="true"
                                    role="img"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                                <div className="info-3cKxwI radioBarLabel-1MDA6y">
                                  <div
                                    className="text-md-medium-2n7Vn5"
                                    data-text-variant="text-md/medium"
                                  >
                                    <div className="radioItemName-3F4dmu">
                                      <svg
                                        className="icon-1ykL9s"
                                        background="background-2neGeL"
                                        aria-hidden="true"
                                        role="img"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          className="foreground-1dSmCM"
                                          fill="currentColor"
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z"
                                          aria-hidden="true"
                                        />
                                      </svg>
                                      <div>
                                        <div
                                          className="defaultColor-1EVLSt text-md-medium-2n7Vn5 radioLabelName-3FiyYq"
                                          data-text-variant="text-md/medium"
                                        >
                                          Voice
                                        </div>
                                        <div
                                          className="text-sm-normal-AEQz4v radioLabelDescription-2ZSE0N"
                                          data-text-variant="text-sm/normal"
                                          style={{
                                            color: "var(--header-secondary)",
                                          }}
                                        >
                                          Hang out together with voice, video,
                                          and screen share
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="name-2pGuEz marginBottom20-315RVT">
                          <label
                            className="label-7akf7- eyebrow-2wJAoF defaultColor-3Olr-9 sectionTitle-34s8y3"
                            id=":r4:"
                            htmlFor="uid_286"
                          >
                            Channel Name
                          </label>
                          <div className="inputWrapper-2K8ds1 inputWrapper-BB4B-o">
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              className="inputPrefix-1HHwWv"
                              aria-hidden="true"
                              role="img"
                            >
                              <path
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
                              />
                            </svg>
                            <input
                              className="inputDefault-Ciwd-S input-3O04eu inputInner-vW14RT"
                              id="uid_286"
                              maxLength={100}
                              placeholder="new-channel"
                              name=""
                              type="text"
                              aria-labelledby=":r4:"
                              defaultValue=""
                            />
                          </div>
                        </div>

                        <div>
                          <div className="container-31PmuA">
                            <div className="labelRow-NnoUIp">
                              <label htmlFor=":r6:" className="title-2yADjX">
                                <svg
                                  width={24}
                                  height={24}
                                  className="switchIcon-3IwSZ_"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  role="img"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z"
                                    aria-hidden="true"
                                  />
                                </svg>
                                Private Channel
                              </label>
                              <div className="control-10qYax">
                                <div
                                  className="container-1QtPKm"
                                  style={{
                                    opacity: 1,
                                    backgroundColor: "rgb(128, 132, 142)",
                                  }}
                                >
                                  <svg
                                    className="slider-HJFN2i"
                                    viewBox="0 0 28 20"
                                    preserveAspectRatio="xMinYMid meet"
                                    aria-hidden="true"
                                    style={{ left: "-3px" }}
                                  >
                                    <rect
                                      fill="white"
                                      x={4}
                                      y={0}
                                      height={20}
                                      width={20}
                                      rx={10}
                                    />
                                    <svg viewBox="0 0 20 20" fill="none">
                                      <path
                                        fill="rgba(128, 132, 142, 1)"
                                        d="M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z"
                                      />
                                      <path
                                        fill="rgba(128, 132, 142, 1)"
                                        d="M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z"
                                      />
                                    </svg>
                                  </svg>
                                  <input
                                    id=":r6:"
                                    type="checkbox"
                                    className="input-125oad"
                                    tabIndex={0}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="note-3SS3a9">
                              <div className="colorStandard-1Xxp1s size14-k_3Hy4 description-foE_WP formText-2UzJT0 modeDefault-3Warim">
                                Only selected members and roles will be able to
                                view this channel.
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
                            height: 0,
                          }}
                        />
                      </div>

                      <div
                        className="flex-2S1XBF flex-3BkGQD horizontalReverse-60Katr horizontalReverse-2QssvL flex-3BkGQD directionRowReverse-HZatnx justifyStart-2Mwniq alignStretch-Uwowzr noWrap-hBpHBz footer-IubaaS modalFooter-2XY3GW footerSeparator-3U8YsT"
                        style={{ flex: "0 0 auto" }}
                      >
                        <button
                          type="submit"
                          disabled=""
                          className="button-ejjZWC lookFilled-1H2Jvj colorBrand-2M3O3N sizeMedium-2oH5mg grow-2T4nbg"
                        >
                          <div className="contents-3NembX">Create Channel</div>
                        </button>
                        <button
                          type="button"
                          className="button-ejjZWC lookLink-13iF2K lowSaturationUnderline-Z6CW6z colorPrimary-2-Lusz sizeMedium-2oH5mg grow-2T4nbg"
                        >
                          <div
                            className="contents-3NembX"
                            onClick={PopOutChannelCreate}
                          >
                            Cancel
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateChannel;
