const RestrictedFormTextArea = () => {
  return (
    <form className="form-channel-text-area">
      <div className="channelTextArea-1FufC0 channelTextArea-1VQBuV channelTextAreaDisabled-1p2fQv">
        <div className="channel-text-scrollable-container">
          <div className="chat-channel-text-area-disabled">
            <div className="chat-channel-text-area-disabled-slate">
              <div>
                <div
                  className="chat-channel-text-placeholder"
                  aria-hidden="true"
                >
                  You do not have permission to send messages in this channel.
                </div>
                <div
                  spellCheck="true"
                  aria-haspopup="listbox"
                  aria-invalid="false"
                  aria-autocomplete="list"
                  className="markup-eYLPri editor-H2NA06 slateTextArea-27tjG0 fontSize16Padding-XoMpjI"
                  autoCorrect="off"
                  data-can-focus="false"
                  aria-label="You do not have permission to send messages in this channel."
                  aria-multiline="true"
                  data-slate-editor="true"
                  data-slate-node="value"
                  contentEditable="false"
                  zindex={-1}
                  style={{
                    position: "relative",
                    outline: "none",
                    whiteSpace: "pre-wrap",
                    overflowWrap: "break-word",
                  }}
                >
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
            </div>
            <div className="buttons-uaqb-5" />
          </div>
        </div>
        <div
          className="container-1ZA19X hidden-tnoHf9 stickerIconOffset-2zxofV"
          tabIndex={-1}
          aria-hidden="true"
          role="button"
          style={{ minWidth: 120 }}
        >
          <div
            className="stickerResults-cD_yeI"
            tabIndex={-1}
            role="list"
            data-list-id="expression-suggestions-stickers"
          />{" "}
          <div className="bottomInformationTextContainer-3xmddX">
            <div className="textDivider-34kVsR" />
            <div className="bottomInformationLayout-3pAQvD">
              <div
                className="defaultColor-1EVLSt text-sm-normal-AEQz4v descriptionText-yl6pN6"
                data-text-variant="text-sm/normal"
                style={{ maxWidth: 120 }}
              >
                <div className="combo-3PNrpQ keybind-1ejq-9">
                  <span className="key-RP8gj3">
                    <svg
                      width={10}
                      height={10}
                      xmlns="http://www.w3.org/2000/svg"
                      className="bindArrow-L3Mvw5 up-1_xtU2"
                    >
                      <g fill="#FFFFFF">
                        <polygon
                          transform="translate(5.025000, 5.000000) scale(1, -1) translate(-5.025000, -5.000000) "
                          points="4.16666667 10 4.16666672 3.33333333 1.25 6.25 0.05 5 5.00000005 0 9.99999967 5 8.75 6.25 5.83333338 3.33333333 5.83333333 10"
                        />
                      </g>
                    </svg>
                  </span>
                </div>{" "}
                to select
              </div>
              <div className="" role="button" tabIndex={0}>
                <svg
                  aria-label="Don't show again"
                  aria-hidden="false"
                  role="img"
                  className="closeIcon-14ZT1N"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="containerBackground-Ang24O" />
        </div>
      </div>
    </form>
  );
};

export default RestrictedFormTextArea;
