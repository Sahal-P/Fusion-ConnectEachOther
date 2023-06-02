
const ImojiStickerLayer = () => {
  return (
    <div
    className="positionLayer-1cndvf theme-dark layer-2BGhQ8"
    style={{ position: "absolute", bottom: 76, right: 16 }}
  >
    <section
      className="positionContainer-dMArNx"
      role="dialog"
      aria-label="Expression Picker"
    >
      <div className="drawerSizingWrapper-1txdWG" style={{ width: 498 }}>
        <div className="resizeHandle-T_gFJR" />
        <div className="contentWrapper-3vHNP2">
          <nav className="nav-1zWVQw">
            <div
              className="navList-YSb9UB"
              role="tablist"
              aria-label="Expression Picker Categories"
            >
              <button
                role="tab"
                id="gif-picker-tab"
                aria-selected="false"
                type="button"
                className="navButton-1XuvI- navItem-3McpmW button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"
              >
                <div className="contents-3NembX">GIFs</div>
              </button>
              <button
                role="tab"
                id="sticker-picker-tab"
                aria-selected="false"
                type="button"
                className="navButton-1XuvI- navItem-3McpmW button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"
              >
                <div className="contents-3NembX">
                  <div className="stickersNavItem-9B2BzM">Stickers</div>
                </div>
              </button>
              <button
                role="tab"
                aria-controls="emoji-picker-tab-panel"
                id="emoji-picker-tab"
                aria-selected="true"
                aria-current="page"
                type="button"
                className="navButton-1XuvI- navItem-3McpmW navButtonActive-1EqC5l button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"
              >
                <div className="contents-3NembX">Emoji</div>
              </button>
            </div>
          </nav>
          <div
            id="emoji-picker-tab-panel"
            aria-labelledby="emoji-picker-tab"
            role="tabpanel"
            className="wrapper-3u51GQ emojiPickerHasTabWrapper-LoluYe"
          >
            <div className="emojiPicker-6YCk8a">
              <div className="header-11eigE">
                <div className="searchBar-2M9mRP container-1SX9VC medium-13kyaW">
                  <div
                    className="inner-1NoIT5 thin-RnSY0a scrollerBase-1Pkza4"
                    dir="ltr"
                    style={{ overflow: "hidden scroll", paddingRight: 0 }}
                  >
                    <input
                      className="input-2FSSDe"
                      type="text"
                      spellCheck="false"
                      placeholder="Find the perfect emoji"
                      aria-disabled="false"
                      role="combobox"
                      aria-haspopup="grid"
                      aria-autocomplete="list"
                      aria-label="Search emoji"
                      aria-controls="emoji-picker-grid"
                      aria-expanded="true"
                      aria-activedescendant="emoji-picker-grid-0-0"
                      defaultValue=""
                    />
                    <div
                      className="iconLayout-SqV3nb medium-13kyaW"
                      tabIndex={-1}
                      aria-hidden="true"
                      aria-label="Clear search"
                      role="button"
                    >
                      <div className="iconContainer-1RqWJj">
                        <svg
                          className="icon-18rqoe visible-2yTnyW"
                          aria-hidden="true"
                          role="img"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z"
                          />
                        </svg>
                        <svg
                          aria-hidden="true"
                          role="img"
                          className="icon-18rqoe"
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
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        pointerEvents: "none",
                        minHeight: 0,
                        minWidth: 1,
                        flex: "0 0 auto",
                        height: 1
                      }}
                    />
                  </div>
                </div>
                <div className="diversitySelector-P-W_tU">
                  <div
                    className="diversitySelectorButton-2CGlo5"
                    aria-label="Select emoji skin tone"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-controls="uid_6"
                    tabIndex={0}
                    role="button"
                  >
                    <div
                      className="diversityEmojiItemImage-1pfGqI"
                      style={{
                        backgroundImage:
                          'url("/assets/9fa091f676e4451ee5946fed948cb8fe.svg")'
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="bodyWrapper-1eSOtW">
                <div
                  className="emojiPickerListWrapper-1T3YI3"
                  id="emoji-picker-grid"
                  role="grid"
                  aria-rowcount={243}
                  aria-colcount={9}
                  tabIndex={0}
                  data-ref-id="emoji-picker-grid"
                >
                  <div className="listWrapper-2nHLP8">
                    <div
                      className="scroller-2MALzE list-3V14yy thin-RnSY0a scrollerBase-1Pkza4"
                      dir="ltr"
                      style={{ overflow: "hidden scroll", paddingRight: 0 }}
                    >
                      <div
                        role="none presentation"
                        className="listItems-6eZzQ1"
                        style={{ inset: "0px 0px 8px 8px" }}
                      >
                        <div className="categorySection-3j71bm">
                          <div className="wrapper-1NNaWG header-1ULbqO">
                            <div
                              className="header-1XpmZs interactive-MpGq2z"
                              aria-expanded="true"
                              role="button"
                              tabIndex={0}
                            >
                              <div
                                aria-hidden="true"
                                className="headerIcon-2Gk2OH"
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  width={16}
                                  height={16}
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M21.924 8.61789C21.77 8.24489 21.404 8.00089 21 8.00089H15.618L12.894 2.55389C12.555 1.87689 11.444 1.87689 11.105 2.55389L8.38199 8.00089H2.99999C2.59599 8.00089 2.22999 8.24489 2.07599 8.61789C1.92199 8.99089 2.00699 9.42289 2.29299 9.70789L6.87699 14.2919L5.03899 20.7269C4.92399 21.1299 5.07199 21.5619 5.40999 21.8089C5.74999 22.0569 6.20699 22.0659 6.55399 21.8329L12 18.2029L17.445 21.8329C17.613 21.9449 17.806 22.0009 18 22.0009C18.207 22.0009 18.414 21.9369 18.59 21.8089C18.928 21.5619 19.076 21.1299 18.961 20.7269L17.123 14.2919L21.707 9.70789C21.993 9.42289 22.078 8.99089 21.924 8.61789Z"
                                  />
                                </svg>
                              </div>
                              <span className="headerLabel-1g790w">
                                Top Emoji in Midjourney
                              </span>
                              <svg
                                className="arrow-2HswgU headerCollapseIcon-3WeMjJ"
                                width={16}
                                height={16}
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
                                />
                              </svg>
                            </div>
                          </div>
                          <ul
                            role="row"
                            aria-rowindex={1}
                            className="emojiListRow-3hshyU emojiListRowMediumSize-2_-xbz"
                          >
                            <li
                              role="gridcell"
                              aria-rowindex={1}
                              aria-colindex={1}
                              id="emoji-picker-grid-0-0"
                            >
                              <button
                                tabIndex={0}
                                className="emojiItem-277VFM emojiItemMedium-2stgkv emojiItemSelected-2Lg50V "
                                data-type="emoji"
                                data-id={993735162263257141}
                                data-name="this"
                              >
                                <img
                                  className="image-3tDi44"
                                  alt=":this:"
                                  src="https://cdn.discordapp.com/emojis/993735162263257141.webp?size=48&quality=lossless"
                                  aria-label=":this: from Midjourney"
                                  style={{
                                    backgroundSize: 40,
                                    height: 40,
                                    width: 40
                                  }}
                                />
                              </button>
                            </li>
                            <li
                              role="gridcell"
                              aria-rowindex={1}
                              aria-colindex={2}
                              id="emoji-picker-grid-1-0"
                            >
                              <button
                                tabIndex={-1}
                                className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                data-type="emoji"
                                data-id={1013540048785907743}
                                data-name="berk"
                              >
                                <img
                                  className="image-3tDi44"
                                  alt=":berk:"
                                  src="https://cdn.discordapp.com/emojis/1013540048785907743.webp?size=48&quality=lossless"
                                  aria-label=":berk: from Midjourney"
                                  style={{
                                    backgroundSize: 40,
                                    height: 40,
                                    width: 40
                                  }}
                                />
                              </button>
                            </li>
                            <li
                              role="gridcell"
                              aria-rowindex={1}
                              aria-colindex={3}
                              id="emoji-picker-grid-2-0"
                            >
                              <button
                                tabIndex={-1}
                                className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                data-type="emoji"
                                data-id={983849832944914432}
                                data-name="cute"
                              >
                                <img
                                  className="image-3tDi44"
                                  alt=":cute:"
                                  src="https://cdn.discordapp.com/emojis/983849832944914432.webp?size=48&quality=lossless"
                                  aria-label=":cute: from Midjourney"
                                  style={{
                                    backgroundSize: 40,
                                    height: 40,
                                    width: 40
                                  }}
                                />
                              </button>
                            </li>
                            <li
                              role="gridcell"
                              aria-rowindex={1}
                              aria-colindex={4}
                              id="emoji-picker-grid-3-0"
                            >
                              <button
                                tabIndex={-1}
                                className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                data-type="emoji"
                                data-id={984302969237409862}
                                data-name="blueboat"
                              >
                                <img
                                  className="image-3tDi44"
                                  alt=":blueboat:"
                                  src="https://cdn.discordapp.com/emojis/984302969237409862.webp?size=48&quality=lossless"
                                  aria-label=":blueboat: from Midjourney"
                                  style={{
                                    backgroundSize: 40,
                                    height: 40,
                                    width: 40
                                  }}
                                />
                              </button>
                            </li>
                            <li
                              role="gridcell"
                              aria-rowindex={1}
                              aria-colindex={5}
                              id="emoji-picker-grid-4-0"
                            >
                              <button
                                tabIndex={-1}
                                className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                data-type="emoji"
                                data-id={1035760850809651230}
                                data-name="hap"
                              >
                                <img
                                  className="image-3tDi44"
                                  alt=":hap:"
                                  src="https://cdn.discordapp.com/emojis/1035760850809651230.webp?size=48&quality=lossless"
                                  aria-label=":hap: from Midjourney"
                                  style={{
                                    backgroundSize: 40,
                                    height: 40,
                                    width: 40
                                  }}
                                />
                              </button>
                            </li>
                            <li
                              role="gridcell"
                              aria-rowindex={1}
                              aria-colindex={6}
                              id="emoji-picker-grid-5-0"
                            >
                              <button
                                tabIndex={-1}
                                className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                data-type="emoji"
                                data-id={1005739860553895966}
                                data-name="bansword"
                              >
                                <img
                                  className="image-3tDi44"
                                  alt=":bansword:"
                                  src="https://cdn.discordapp.com/emojis/1005739860553895966.webp?size=48&quality=lossless"
                                  aria-label=":bansword: from Midjourney"
                                  style={{
                                    backgroundSize: 40,
                                    height: 40,
                                    width: 40
                                  }}
                                />
                              </button>
                            </li>
                            <li
                              role="gridcell"
                              aria-rowindex={1}
                              aria-colindex={7}
                              id="emoji-picker-grid-6-0"
                            >
                              <button
                                tabIndex={-1}
                                className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                data-type="emoji"
                                data-id={1013540050761429053}
                                data-name="thinkies"
                              >
                                <img
                                  className="image-3tDi44"
                                  alt=":thinkies:"
                                  src="https://cdn.discordapp.com/emojis/1013540050761429053.webp?size=48&quality=lossless"
                                  aria-label=":thinkies: from Midjourney"
                                  style={{
                                    backgroundSize: 40,
                                    height: 40,
                                    width: 40
                                  }}
                                />
                              </button>
                            </li>
                            <li
                              role="gridcell"
                              aria-rowindex={1}
                              aria-colindex={8}
                              id="emoji-picker-grid-7-0"
                            >
                              <button
                                tabIndex={-1}
                                className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                data-type="emoji"
                                data-id={1004263316442591293}
                                data-name="greenboat"
                              >
                                <img
                                  className="image-3tDi44"
                                  alt=":greenboat:"
                                  src="https://cdn.discordapp.com/emojis/1004263316442591293.webp?size=48&quality=lossless"
                                  aria-label=":greenboat: from Midjourney"
                                  style={{
                                    backgroundSize: 40,
                                    height: 40,
                                    width: 40
                                  }}
                                />
                              </button>
                            </li>
                            <li
                              role="gridcell"
                              aria-rowindex={1}
                              aria-colindex={9}
                              id="emoji-picker-grid-8-0"
                            >
                              <button
                                tabIndex={-1}
                                className="emojiItem-277VFM emojiItemMedium-2stgkv emojiItemDisabled-3VVnwp"
                                data-type="emoji"
                                data-id={1004638051047309393}
                                data-name="partyblob"
                              >
                                <img
                                  className="image-3tDi44"
                                  alt=":partyblob:"
                                  src="https://cdn.discordapp.com/emojis/1004638051047309393.gif?size=48&quality=lossless"
                                  aria-label=":partyblob: from Midjourney"
                                  style={{
                                    backgroundSize: 40,
                                    height: 40,
                                    width: 40
                                  }}
                                />
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="categorySection-3j71bm">
                          <div className="wrapper-1NNaWG header-1ULbqO">
                            <div
                              className="header-1XpmZs interactive-MpGq2z"
                              aria-expanded="true"
                              role="button"
                              tabIndex={0}
                            >
                              <div
                                aria-hidden="true"
                                className="headerIcon-2Gk2OH"
                              >
                                <svg
                                  aria-hidden="true"
                                  role="img"
                                  width={16}
                                  height={16}
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    d="M12 2C6.4764 2 2 6.4764 2 12C2 17.5236 6.4764 22 12 22C17.5236 22 22 17.5236 22 12C22 6.4764 17.5236 2 12 2ZM12 5.6C12.4422 5.6 12.8 5.95781 12.8 6.4V11.5376L16.5625 13.7126C16.9453 13.9329 17.0703 14.4173 16.85 14.8001C16.6297 15.183 16.1453 15.3079 15.7625 15.0876L11.6873 12.7376C11.656 12.7251 11.6279 12.7048 11.5998 12.6876C11.3607 12.5486 11.1998 12.2954 11.1998 12.0001V6.4001C11.1998 5.9579 11.5578 5.6 12 5.6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                              <span className="headerLabel-1g790w">
                                Frequently Used
                              </span>
                              <svg
                                className="arrow-2HswgU headerCollapseIcon-3WeMjJ"
                                width={16}
                                height={16}
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
                                />
                              </svg>
                            </div>
                          </div>
                          <ul
                            role="row"
                            aria-rowindex={2}
                            className="emojiListRow-3hshyU emojiListRowMediumSize-2_-xbz"
                          >
                            <li
                              role="gridcell"
                              aria-rowindex={2}
                              aria-colindex={1}
                              id="emoji-picker-grid-0-1"
                            >
                              <button
                                tabIndex={-1}
                                className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                data-type="emoji"
                                data-name={100}
                              >
                                <div
                                  className="emojiSpriteImage-3ykvhZ"
                                  style={{
                                    backgroundImage:
                                      'url("/assets/d218674f309bcbfbf56faf6074df6347.png")',
                                    backgroundPosition: "-880px -1000px",
                                    backgroundSize: "1680px 1520px",
                                    height: 40,
                                    width: 40
                                  }}
                                >
                                  <span className="hiddenVisually-39QJvl">
                                    :100:
                                  </span>
                                </div>
                              </button>
                            </li>
                            <li
                              role="gridcell"
                              aria-rowindex={2}
                              aria-colindex={2}
                              id="emoji-picker-grid-1-1"
                            >
                              <button
                                tabIndex={-1}
                                className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                data-type="emoji"
                                data-name="laughing"
                              >
                                <div
                                  className="emojiSpriteImage-3ykvhZ"
                                  style={{
                                    backgroundImage:
                                      'url("/assets/d218674f309bcbfbf56faf6074df6347.png")',
                                    backgroundPosition: "-160px 0px",
                                    backgroundSize: "1680px 1520px",
                                    height: 40,
                                    width: 40
                                  }}
                                >
                                  <span className="hiddenVisually-39QJvl">
                                    :laughing: :satisfied:
                                  </span>
                                </div>
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="wrapper-3mwv0u">
                          <div className="children-1577pq">
                            <div className="categorySection-3j71bm">
                              <div className="wrapper-1NNaWG header-1ULbqO">
                                <div
                                  className="header-1XpmZs interactive-MpGq2z"
                                  aria-expanded="true"
                                  role="button"
                                  tabIndex={0}
                                >
                                  <div
                                    aria-hidden="true"
                                    className="headerIcon-2Gk2OH"
                                  >
                                    <div>
                                      <svg
                                        width={16}
                                        height={16}
                                        className="svg-lIB-lq mask-1hlQQ6"
                                        viewBox="0 0 16 16"
                                      >
                                        <foreignObject
                                          x={0}
                                          y={0}
                                          width={16}
                                          height={16}
                                          overflow="visible"
                                          mask="url(#svg-mask-squircle)"
                                        >
                                          <img
                                            alt="Midjourney"
                                            src="https://cdn.discordapp.com/icons/662267976984297473/e75033be72087a87fa09e91727dac2a4.webp?size=32"
                                            className="guildIcon-2SUGiq"
                                          />
                                        </foreignObject>
                                      </svg>
                                    </div>
                                  </div>
                                  <span className="headerLabel-1g790w">
                                    Midjourney
                                  </span>
                                  <svg
                                    className="arrow-2HswgU headerCollapseIcon-3WeMjJ"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <ul
                                role="row"
                                aria-rowindex={3}
                                className="emojiListRow-3hshyU emojiListRowMediumSize-2_-xbz"
                              >
                                <li
                                  role="gridcell"
                                  aria-rowindex={3}
                                  aria-colindex={1}
                                  id="emoji-picker-grid-0-2"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={996954863198015628}
                                    data-name="angry_grape"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":angry_grape:"
                                      src="https://cdn.discordapp.com/emojis/996954863198015628.webp?size=48&quality=lossless"
                                      aria-label=":angry_grape: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={3}
                                  aria-colindex={2}
                                  id="emoji-picker-grid-1-2"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={1005739860553895966}
                                    data-name="bansword"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":bansword:"
                                      src="https://cdn.discordapp.com/emojis/1005739860553895966.webp?size=48&quality=lossless"
                                      aria-label=":bansword: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={3}
                                  aria-colindex={3}
                                  id="emoji-picker-grid-2-2"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={1013540048785907743}
                                    data-name="berk"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":berk:"
                                      src="https://cdn.discordapp.com/emojis/1013540048785907743.webp?size=48&quality=lossless"
                                      aria-label=":berk: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={3}
                                  aria-colindex={4}
                                  id="emoji-picker-grid-3-2"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={984302969237409862}
                                    data-name="blueboat"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":blueboat:"
                                      src="https://cdn.discordapp.com/emojis/984302969237409862.webp?size=48&quality=lossless"
                                      aria-label=":blueboat: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={3}
                                  aria-colindex={5}
                                  id="emoji-picker-grid-4-2"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={1005704088408838247}
                                    data-name="checkstatus"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":checkstatus:"
                                      src="https://cdn.discordapp.com/emojis/1005704088408838247.webp?size=48&quality=lossless"
                                      aria-label=":checkstatus: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={3}
                                  aria-colindex={6}
                                  id="emoji-picker-grid-5-2"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={1014718957380440155}
                                    data-name="cheemscry"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":cheemscry:"
                                      src="https://cdn.discordapp.com/emojis/1014718957380440155.webp?size=48&quality=lossless"
                                      aria-label=":cheemscry: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={3}
                                  aria-colindex={7}
                                  id="emoji-picker-grid-6-2"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={983849806378188812}
                                    data-name="cry~1"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":cry~1:"
                                      src="https://cdn.discordapp.com/emojis/983849806378188812.webp?size=48&quality=lossless"
                                      aria-label=":cry~1: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={3}
                                  aria-colindex={8}
                                  id="emoji-picker-grid-7-2"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={983849832944914432}
                                    data-name="cute"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":cute:"
                                      src="https://cdn.discordapp.com/emojis/983849832944914432.webp?size=48&quality=lossless"
                                      aria-label=":cute: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={3}
                                  aria-colindex={9}
                                  id="emoji-picker-grid-8-2"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={1039283909323661403}
                                    data-name="disghosted"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":disghosted:"
                                      src="https://cdn.discordapp.com/emojis/1039283909323661403.webp?size=48&quality=lossless"
                                      aria-label=":disghosted: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                              </ul>
                              <ul
                                role="row"
                                aria-rowindex={4}
                                className="emojiListRow-3hshyU emojiListRowMediumSize-2_-xbz"
                              >
                                <li
                                  role="gridcell"
                                  aria-rowindex={4}
                                  aria-colindex={1}
                                  id="emoji-picker-grid-0-3"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={1005738740997685248}
                                    data-name="excited"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":excited:"
                                      src="https://cdn.discordapp.com/emojis/1005738740997685248.webp?size=48&quality=lossless"
                                      aria-label=":excited: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={4}
                                  aria-colindex={2}
                                  id="emoji-picker-grid-1-3"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={1019780253243162684}
                                    data-name="galaxybrain"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":galaxybrain:"
                                      src="https://cdn.discordapp.com/emojis/1019780253243162684.webp?size=48&quality=lossless"
                                      aria-label=":galaxybrain: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={4}
                                  aria-colindex={3}
                                  id="emoji-picker-grid-2-3"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={1004263316442591293}
                                    data-name="greenboat"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":greenboat:"
                                      src="https://cdn.discordapp.com/emojis/1004263316442591293.webp?size=48&quality=lossless"
                                      aria-label=":greenboat: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={4}
                                  aria-colindex={4}
                                  id="emoji-picker-grid-3-3"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={1013540053089259582}
                                    data-name="grimberk"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":grimberk:"
                                      src="https://cdn.discordapp.com/emojis/1013540053089259582.webp?size=48&quality=lossless"
                                      aria-label=":grimberk: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={4}
                                  aria-colindex={5}
                                  id="emoji-picker-grid-4-3"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={1035760850809651230}
                                    data-name="hap"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":hap:"
                                      src="https://cdn.discordapp.com/emojis/1035760850809651230.webp?size=48&quality=lossless"
                                      aria-label=":hap: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={4}
                                  aria-colindex={6}
                                  id="emoji-picker-grid-5-3"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={1005764918374572102}
                                    data-name="happylimmy"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":happylimmy:"
                                      src="https://cdn.discordapp.com/emojis/1005764918374572102.webp?size=48&quality=lossless"
                                      aria-label=":happylimmy: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={4}
                                  aria-colindex={7}
                                  id="emoji-picker-grid-6-3"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={1035402557926940754}
                                    data-name="meatman"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":meatman:"
                                      src="https://cdn.discordapp.com/emojis/1035402557926940754.webp?size=48&quality=lossless"
                                      aria-label=":meatman: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={4}
                                  aria-colindex={8}
                                  id="emoji-picker-grid-7-3"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={980163861867028540}
                                    data-name="nervousSweat"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":nervousSweat:"
                                      src="https://cdn.discordapp.com/emojis/980163861867028540.webp?size=48&quality=lossless"
                                      aria-label=":nervousSweat: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={4}
                                  aria-colindex={9}
                                  id="emoji-picker-grid-8-3"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={1004260546813624340}
                                    data-name="oliveboat"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":oliveboat:"
                                      src="https://cdn.discordapp.com/emojis/1004260546813624340.webp?size=48&quality=lossless"
                                      aria-label=":oliveboat: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                              </ul>
                              <ul
                                role="row"
                                aria-rowindex={5}
                                className="emojiListRow-3hshyU emojiListRowMediumSize-2_-xbz"
                              >
                                <li
                                  role="gridcell"
                                  aria-rowindex={5}
                                  aria-colindex={1}
                                  id="emoji-picker-grid-0-4"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={1004260553008627793}
                                    data-name="orangeboat"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":orangeboat:"
                                      src="https://cdn.discordapp.com/emojis/1004260553008627793.webp?size=48&quality=lossless"
                                      aria-label=":orangeboat: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={5}
                                  aria-colindex={2}
                                  id="emoji-picker-grid-1-4"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={1004260551515443241}
                                    data-name="pinkboat"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":pinkboat:"
                                      src="https://cdn.discordapp.com/emojis/1004260551515443241.webp?size=48&quality=lossless"
                                      aria-label=":pinkboat: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={5}
                                  aria-colindex={3}
                                  id="emoji-picker-grid-2-4"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={987474720683356232}
                                    data-name="plague"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":plague:"
                                      src="https://cdn.discordapp.com/emojis/987474720683356232.webp?size=48&quality=lossless"
                                      aria-label=":plague: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={5}
                                  aria-colindex={4}
                                  id="emoji-picker-grid-3-4"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={987474652857270292}
                                    data-name="plagueheart"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":plagueheart:"
                                      src="https://cdn.discordapp.com/emojis/987474652857270292.webp?size=48&quality=lossless"
                                      aria-label=":plagueheart: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={5}
                                  aria-colindex={5}
                                  id="emoji-picker-grid-4-4"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={987474691868459009}
                                    data-name="plaguepride"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":plaguepride:"
                                      src="https://cdn.discordapp.com/emojis/987474691868459009.webp?size=48&quality=lossless"
                                      aria-label=":plaguepride: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={5}
                                  aria-colindex={6}
                                  id="emoji-picker-grid-5-4"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={940149617683759104}
                                    data-name="plus"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":plus:"
                                      src="https://cdn.discordapp.com/emojis/940149617683759104.webp?size=48&quality=lossless"
                                      aria-label=":plus: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={5}
                                  aria-colindex={7}
                                  id="emoji-picker-grid-6-4"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={1004260545614061618}
                                    data-name="purpleboat"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":purpleboat:"
                                      src="https://cdn.discordapp.com/emojis/1004260545614061618.webp?size=48&quality=lossless"
                                      aria-label=":purpleboat: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={5}
                                  aria-colindex={8}
                                  id="emoji-picker-grid-7-4"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={980213939021439047}
                                    data-name="shy"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":shy:"
                                      src="https://cdn.discordapp.com/emojis/980213939021439047.webp?size=48&quality=lossless"
                                      aria-label=":shy: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                                <li
                                  role="gridcell"
                                  aria-rowindex={5}
                                  aria-colindex={9}
                                  id="emoji-picker-grid-8-4"
                                >
                                  <button
                                    tabIndex={-1}
                                    className="emojiItem-277VFM emojiItemMedium-2stgkv"
                                    data-type="emoji"
                                    data-id={1004260548050944031}
                                    data-name="tealboat"
                                  >
                                    <img
                                      className="image-3tDi44"
                                      alt=":tealboat:"
                                      src="https://cdn.discordapp.com/emojis/1004260548050944031.webp?size=48&quality=lossless"
                                      aria-label=":tealboat: from Midjourney"
                                      style={{
                                        backgroundSize: 40,
                                        height: 40,
                                        width: 40
                                      }}
                                    />
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="listHeight-3LiElf"
                        style={{ height: 12188 }}
                      />
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
                  </div>
                </div>
              </div>
             
            </div>
            <div className="wrapper-22rqw6 categoryList-2qRrlj">
              <div
                className="scroller-2MALzE none-1rXy4P scrollerBase-1Pkza4"
                dir="ltr"
                style={{ overflow: "hidden scroll", paddingRight: 0 }}
              >
                <div
                  role="list"
                  className="listItems-6eZzQ1"
                  style={{ inset: "8px 8px 0px" }}
                >
                  <div
                    className="categoryItemDefaultCategory-3haEDq categoryItem-1sHzUv categoryItemDefaultCategorySelected-2YeRUu"
                    role="listitem"
                    data-list-item-id="NO_LIST___expression-guild-0"
                    tabIndex={-1}
                    aria-label="top guild emoji"
                  >
                    <svg
                      className="categoryIcon-2cYeku"
                      aria-hidden="true"
                      role="img"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M21.924 8.61789C21.77 8.24489 21.404 8.00089 21 8.00089H15.618L12.894 2.55389C12.555 1.87689 11.444 1.87689 11.105 2.55389L8.38199 8.00089H2.99999C2.59599 8.00089 2.22999 8.24489 2.07599 8.61789C1.92199 8.99089 2.00699 9.42289 2.29299 9.70789L6.87699 14.2919L5.03899 20.7269C4.92399 21.1299 5.07199 21.5619 5.40999 21.8089C5.74999 22.0569 6.20699 22.0659 6.55399 21.8329L12 18.2029L17.445 21.8329C17.613 21.9449 17.806 22.0009 18 22.0009C18.207 22.0009 18.414 21.9369 18.59 21.8089C18.928 21.5619 19.076 21.1299 18.961 20.7269L17.123 14.2919L21.707 9.70789C21.993 9.42289 22.078 8.99089 21.924 8.61789Z"
                      />
                    </svg>
                  </div>
                  <div
                    className="categoryItemDefaultCategory-3haEDq categoryItem-1sHzUv categoryItemRecentEmoji-Rk8CU1"
                    role="listitem"
                    data-list-item-id="NO_LIST___expression-guild-1"
                    tabIndex={-1}
                    aria-label="recent"
                  >
                    <svg
                      className="categoryIcon-2cYeku"
                      aria-hidden="true"
                      role="img"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C6.4764 2 2 6.4764 2 12C2 17.5236 6.4764 22 12 22C17.5236 22 22 17.5236 22 12C22 6.4764 17.5236 2 12 2ZM12 5.6C12.4422 5.6 12.8 5.95781 12.8 6.4V11.5376L16.5625 13.7126C16.9453 13.9329 17.0703 14.4173 16.85 14.8001C16.6297 15.183 16.1453 15.3079 15.7625 15.0876L11.6873 12.7376C11.656 12.7251 11.6279 12.7048 11.5998 12.6876C11.3607 12.5486 11.1998 12.2954 11.1998 12.0001V6.4001C11.1998 5.9579 11.5578 5.6 12 5.6Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  {/* <div className="guildEmojiSectionItems-3l3n3N">
                    <div>
                      <div>
                        <div
                          className="categoryItemGuildCategory-3mvXlo categoryItem-1sHzUv"
                          role="listitem"
                          data-list-item-id="NO_LIST___expression-guild-2"
                          tabIndex={-1}
                          aria-label="Midjourney"
                        >
                          <div>
                            <svg
                              width={32}
                              height={32}
                              className="svg-lIB-lq mask-1hlQQ6"
                              viewBox="0 0 32 32"
                            >
                              <foreignObject
                                x={0}
                                y={0}
                                width={32}
                                height={32}
                                overflow="visible"
                                mask="url(#svg-mask-avatar-default)"
                              >
                                <img
                                  alt="Midjourney"
                                  src="https://cdn.discordapp.com/icons/662267976984297473/e75033be72087a87fa09e91727dac2a4.webp?size=32"
                                  className="guildIcon-2SUGiq"
                                />
                              </foreignObject>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div
                          className="categoryItemGuildCategory-3mvXlo categoryItem-1sHzUv"
                          role="listitem"
                          data-list-item-id="NO_LIST___expression-guild-3"
                          tabIndex={-1}
                          aria-label="Python"
                        >
                          <div>
                            <svg
                              width={32}
                              height={32}
                              className="svg-lIB-lq mask-1hlQQ6"
                              viewBox="0 0 32 32"
                            >
                              <foreignObject
                                x={0}
                                y={0}
                                width={32}
                                height={32}
                                overflow="visible"
                                mask="url(#svg-mask-avatar-default)"
                              >
                                <img
                                  alt="Python"
                                  src="https://cdn.discordapp.com/icons/267624335836053506/a_8a4f6b575c0af85165938367af61a903.webp?size=32"
                                  className="guildIcon-2SUGiq"
                                />
                              </foreignObject>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="guildCategorySeparator-3QYkij" />
                  </div> */}
                  <div
                    className="categoryItemDefaultCategory-3haEDq categoryItem-1sHzUv"
                    role="listitem"
                    data-list-item-id="NO_LIST___expression-guild-4"
                    tabIndex={-1}
                    aria-label="people"
                  >
                    <svg
                      className="categoryIcon-2cYeku"
                      aria-hidden="true"
                      role="img"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.522 2 12 2ZM16.293 6.293L17.707 7.706L16.414 9L17.707 10.293L16.293 11.706L13.586 9L16.293 6.293ZM6.293 7.707L7.707 6.294L10.414 9L7.707 11.707L6.293 10.294L7.586 9L6.293 7.707ZM12 19C9.609 19 7.412 17.868 6 16.043L7.559 14.486C8.555 15.92 10.196 16.831 12 16.831C13.809 16.831 15.447 15.92 16.443 14.481L18 16.04C16.59 17.867 14.396 19 12 19Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div
                    className="categoryItemDefaultCategory-3haEDq categoryItem-1sHzUv"
                    role="listitem"
                    data-list-item-id="NO_LIST___expression-guild-5"
                    tabIndex={-1}
                    aria-label="nature"
                  >
                    <svg
                      className="categoryIcon-2cYeku"
                      aria-hidden="true"
                      role="img"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6.814 8.982C4.539 11.674 4.656 15.591 6.931 18.153L4.034 21.579L5.561 22.87L8.463 19.437C9.569 20.127 10.846 20.513 12.161 20.513C14.231 20.513 16.183 19.607 17.516 18.027C20.069 15.01 20.771 6.945 21 3C17.765 3.876 9.032 6.356 6.814 8.982V8.982ZM8.935 17.331C6.826 15.548 6.56 12.382 8.342 10.272C9.592 8.793 14.904 6.845 18.764 5.698L8.935 17.331V17.331Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div
                    className="categoryItemDefaultCategory-3haEDq categoryItem-1sHzUv"
                    role="listitem"
                    data-list-item-id="NO_LIST___expression-guild-6"
                    tabIndex={-1}
                    aria-label="food"
                  >
                    <svg
                      className="categoryIcon-2cYeku"
                      aria-hidden="true"
                      role="img"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path d="M11 18H13V22H11V18Z" fill="currentColor" />
                      <path
                        d="M12 2C8.822 2 7 4.187 7 8V16C7 16.552 7.447 17 8 17H16C16.553 17 17 16.552 17 16V8C17 4.187 15.178 2 12 2ZM11 14.001H10V5.001H11V14.001ZM14 14.001H13V5.001H14V14.001Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div
                    className="categoryItemDefaultCategory-3haEDq categoryItem-1sHzUv"
                    role="listitem"
                    data-list-item-id="NO_LIST___expression-guild-7"
                    tabIndex={-1}
                    aria-label="activity"
                  >
                    <svg
                      className="categoryIcon-2cYeku"
                      aria-hidden="true"
                      role="img"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5.66487 5H18.3351C19.9078 5 21.2136 6.21463 21.3272 7.78329L21.9931 16.9774C22.0684 18.0165 21.287 18.9198 20.248 18.9951C20.2026 18.9984 20.1572 19 20.1117 19C18.919 19 17.8785 18.1904 17.5855 17.0342L17.0698 15H6.93015L6.41449 17.0342C6.12142 18.1904 5.08094 19 3.88826 19C2.84645 19 2.00189 18.1554 2.00189 17.1136C2.00189 17.0682 2.00354 17.0227 2.00682 16.9774L2.67271 7.78329C2.78632 6.21463 4.0921 5 5.66487 5ZM14.5 10C15.3284 10 16 9.32843 16 8.5C16 7.67157 15.3284 7 14.5 7C13.6716 7 13 7.67157 13 8.5C13 9.32843 13.6716 10 14.5 10ZM18.5 13C19.3284 13 20 12.3284 20 11.5C20 10.6716 19.3284 10 18.5 10C17.6716 10 17 10.6716 17 11.5C17 12.3284 17.6716 13 18.5 13ZM6.00001 9H4.00001V11H6.00001V13H8.00001V11H10V9H8.00001V7H6.00001V9Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div
                    className="categoryItemDefaultCategory-3haEDq categoryItem-1sHzUv"
                    role="listitem"
                    data-list-item-id="NO_LIST___expression-guild-8"
                    tabIndex={-1}
                    aria-label="travel"
                  >
                    <svg
                      className="categoryIcon-2cYeku"
                      aria-hidden="true"
                      role="img"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22 17H19.725C19.892 16.529 20 16.029 20 15.5C20 13.015 17.985 11 15.5 11H13.5L12.276 8.553C12.107 8.214 11.761 8 11.382 8H7C6.448 8 6 8.447 6 9V11.051C3.753 11.302 2 13.186 2 15.5C2 17.986 4.015 20 6.5 20H15.5C16.563 20 17.527 19.616 18.297 19H22V17ZM6.5 16.75C5.81 16.75 5.25 16.19 5.25 15.5C5.25 14.81 5.81 14.25 6.5 14.25C7.19 14.25 7.75 14.81 7.75 15.5C7.75 16.19 7.19 16.75 6.5 16.75ZM11.5 16.75C10.81 16.75 10.25 16.19 10.25 15.5C10.25 14.81 10.81 14.25 11.5 14.25C12.19 14.25 12.75 14.81 12.75 15.5C12.75 16.19 12.19 16.75 11.5 16.75ZM16.5 16.75C15.81 16.75 15.25 16.19 15.25 15.5C15.25 14.81 15.81 14.25 16.5 14.25C17.19 14.25 17.75 14.81 17.75 15.5C17.75 16.19 17.19 16.75 16.5 16.75Z"
                        fill="currentColor"
                      />
                      <path
                        d="M8 7H10C10 5.346 8.654 4 7 4H6V6H7C7.551 6 8 6.449 8 7Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div
                    className="categoryItemDefaultCategory-3haEDq categoryItem-1sHzUv"
                    role="listitem"
                    data-list-item-id="NO_LIST___expression-guild-9"
                    tabIndex={-1}
                    aria-label="objects"
                  >
                    <svg
                      className="categoryIcon-2cYeku"
                      aria-hidden="true"
                      role="img"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 5.999H17V4.999C17 4.448 16.553 3.999 16 3.999H4C3.447 3.999 3 4.448 3 4.999V12.999C3 14.488 3.47 15.865 4.265 16.999H15.722C16.335 16.122 16.761 15.105 16.92 13.999H18C20.205 13.999 22 12.205 22 9.999C22 7.794 20.205 5.999 18 5.999V5.999ZM18 12H17V8H18C19.104 8 20 8.897 20 10C20 11.102 19.104 12 18 12Z"
                        fill="currentColor"
                      />
                      <path d="M2 18H18V20H2V18Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div
                    className="categoryItemDefaultCategory-3haEDq categoryItem-1sHzUv"
                    role="listitem"
                    data-list-item-id="NO_LIST___expression-guild-10"
                    tabIndex={-1}
                    aria-label="symbols"
                  >
                    <svg
                      className="categoryIcon-2cYeku"
                      aria-hidden="true"
                      role="img"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M16 4.001C14.406 4.001 12.93 4.838 12 6.081C11.07 4.838 9.594 4.001 8 4.001C5.243 4.001 3 6.244 3 9.001C3 14.492 11.124 19.633 11.471 19.849C11.633 19.95 11.817 20.001 12 20.001C12.183 20.001 12.367 19.95 12.529 19.849C12.876 19.633 21 14.492 21 9.001C21 6.244 18.757 4.001 16 4.001V4.001Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className="listHeight-3LiElf" style={{ height: 459 }} />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default ImojiStickerLayer
