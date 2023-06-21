import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import ReplayAttachmentBar from "./ReplayAttachmentBar";

export const FormTextArea = () => {
  const [message, setMessage] = useState();
  const [replayTo, setReplayTo] = useState(null);

  const HandleMessage = (e) => {
    setVal(e.target.value);
    console.log(e.target.value);
  };
  return (
    <form className="form-3gdLxP">
      <div className="channelTextArea-1FufC0 channelTextArea-1VQBuV">
        <ReplayAttachmentBar replayTo={replayTo} to={"Dr3am L0g1c "} />
        <div className="scrollableContainer-15eg7h webkit-QgSAqd">
          <div className="inner-NQg18Y sansAttachButton-1ERHue">
            <div className="uploadInput-YH_iku">
              <input
                className="file-input"
                type="file"
                tabIndex={-1}
                multiple=""
                accept=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  cursor: "pointer",
                  fontSize: 0,
                }}
              />
            </div>
            <div className="attachWrapper-3slhXI">
              <button
                aria-expanded="false"
                aria-label="Upload a file or send invites"
                type="button"
                className="attachButton-_ACFSu attachButton-1ijpt9 button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"
              >
                <div className="contents-3NembX attachButtonInner-2mwer8">
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <path
                      className="attachButtonPlus-3IYelE"
                      fill="currentColor"
                      d="M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div className="textArea-2CLwUE textAreaSlate-9-y-k2 slateContainer-3x9zil">
              <div>
                <input
                  placeholder={"Message #newbies-45"}
                  value={message}
                  onChange={HandleMessage}
                  type="text"
                  className="markup-eYLPri editor-H2NA06 slateTextArea-27tjG0 fontSize16Padding-XoMpjI"
                  style={{
                    position: "relative",
                    outline: "none",
                    background: "none",
                    border: "none",
                    width: "100%",
                    whiteSpace: "pre-wrap",
                    overflowWrap: "break-word",
                  }}
                />
                <div data-slate-node="element">
                  <span data-slate-node="text">
                    <span data-slate-leaf="true" className="emptyText-1o0WH_">
                      <span data-slate-zero-width="n" data-slate-length={0}>
                        <br />
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="buttons-uaqb-5">
              <div className="expression-picker-chat-input-button buttonContainer-2lnNiN">
                <button
                  aria-expanded="false"
                  aria-haspopup="dialog"
                  aria-controls="uid_5"
                  aria-label="Open GIF picker"
                  type="button"
                  className="button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"
                >
                  <div className="contents-3NembX button-2fCJ0o button-3BaQ4X">
                    <div
                      className="buttonWrapper-3YFQGJ"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <svg
                        width={24}
                        height={24}
                        className="icon-1d5zch"
                        aria-hidden="true"
                        role="img"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="m2 2c-1.1046 0-2 0.89543-2 2v16c0 1.1046 0.89543 2 2 2h20c1.1046 0 2-0.8954 2-2v-16c0-1.1046-0.8954-2-2-2h-20zm2.4846 13.931c0.55833 0.375 1.2 0.5625 1.925 0.5625 0.96667 0 1.6958-0.3333 2.1875-1l0.2375 0.825h1.475v-4.9h-3.7625v1.625h1.9875v1.075c-0.15833 0.225-0.38333 0.4042-0.675 0.5375-0.28333 0.125-0.59583 0.1875-0.9375 0.1875-0.76667 0-1.3542-0.2458-1.7625-0.7375-0.40833-0.4916-0.6125-1.1916-0.6125-2.1 0-0.9 0.20417-1.5958 0.6125-2.0874 0.40833-0.5 0.99583-0.75 1.7625-0.75 0.84167 0 1.475 0.39166 1.9 1.175l1.4125-1.0124c-0.30003-0.575-0.74586-1.0208-1.3375-1.3375-0.58333-0.31667-1.2458-0.475-1.9875-0.475-0.875 0-1.6292 0.19166-2.2625 0.575-0.625 0.38333-1.1042 0.9125-1.4375 1.5875-0.325 0.67495-0.4875 1.45-0.4875 2.325 0 0.8834 0.15417 1.6667 0.4625 2.35 0.30833 0.675 0.74167 1.2 1.3 1.575zm7.4509 0.3875h1.825v-8.625h-1.825v8.625zm3.5767 0h1.825v-3.275h3.2v-1.65h-3.2v-2.05h3.9375v-1.65h-5.7625v8.625z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div className="expression-picker-chat-input-button buttonContainer-2lnNiN">
                <button
                  aria-expanded="false"
                  aria-haspopup="dialog"
                  aria-controls="uid_5"
                  aria-label="Open sticker picker"
                  type="button"
                  className="button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"
                >
                  <div className="contents-3NembX button-2fCJ0o button-3BaQ4X stickerButton-1-nFh2">
                    <div
                      className="buttonWrapper-3YFQGJ"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <svg
                        width={24}
                        height={24}
                        className="stickerIcon-3Jx5SE"
                        aria-hidden="true"
                        role="img"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="currentColor"
                          className=""
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM11.9998 12.2201C11.9998 13.3245 11.1046 14.2198 10.0002 14.2198C8.8958 14.2198 8.00052 13.3245 8.00052 12.2201H6.66742C6.66742 14.0607 8.15955 15.5529 10.0002 15.5529C11.8408 15.5529 13.3329 14.0607 13.3329 12.2201H11.9998ZM4.44559 13.331C4.44559 13.9446 3.94821 14.442 3.33467 14.442C2.72112 14.442 2.22375 13.9446 2.22375 13.331C2.22375 12.7175 2.72112 12.2201 3.33467 12.2201C3.94821 12.2201 4.44559 12.7175 4.44559 13.331ZM16.6657 14.442C17.2793 14.442 17.7766 13.9446 17.7766 13.331C17.7766 12.7175 17.2793 12.2201 16.6657 12.2201C16.0522 12.2201 15.5548 12.7175 15.5548 13.331C15.5548 13.9446 16.0522 14.442 16.6657 14.442Z"
                        />
                        <path
                          fill="currentColor"
                          className="hidden-334jci"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM12 13H11.2H8.8H8C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13ZM17.7766 13.331C17.7766 13.9446 17.2793 14.442 16.6657 14.442C16.0522 14.442 15.5548 13.9446 15.5548 13.331C15.5548 12.7175 16.0522 12.2201 16.6657 12.2201C17.2793 12.2201 17.7766 12.7175 17.7766 13.331ZM2 12.2361L2.53532 11L5.62492 12.7835C5.79161 12.8797 5.79161 13.1203 5.62492 13.2165L2.53532 15L2 13.7639L3.32339 13L2 12.2361Z"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div className="expression-picker-chat-input-button buttonContainer-2lnNiN">
                <button
                  type="submit"
                  className="emojiButtonNormal-35P0_i emojiButton-3FRTuj emojiButton-1fMsf3 button-3BaQ4X button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"
                >
                  <div className="contents-3NembX button-2fCJ0o button-3BaQ4X stickerButton-1-nFh2">
                    <div
                      className="buttonWrapper-3YFQGJ"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <SendIcon />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
