import GroupVoiceMessage from "./GroupVoiceMessage";
import Participents from "./Participents";

const GroupVoiceChat = () => {
  return (
    <div className="chat-2ZfjoI">
      <div className="uploadArea-2uvx-B uploadArea-2Nu_Vc">
        <div className="uploadDropModal-13Kd20">
          <div className="bgScale-1iWuPF" />
          <div className="inner-rBP-MS">
            <div className="icons-1UZPvE">
              <div className="wrapOne-2VKwBJ">
                <div className="icon-HW4tZ- one-NzgGbt document-1u6V3N" />
              </div>
              <div className="wrapThree-3wCMkN">
                <div className="icon-HW4tZ- three-fZYihQ code-rRQnfi" />
              </div>
              <div className="wrapTwo-3T9wbh">
                <div className="icon-HW4tZ- two-1t2_74 image-2ssF8k" />
              </div>
            </div>
            <div className="title-3ChJ_v">
              Upload to <strong>stage-1</strong>
            </div>
            <div className="instructions-272j2A">
              <pre>
                You can add comments before uploading.{"\n"}Hold shift to upload
                directly.
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="container-cH6QoY">
        <div className="callContainer-BGIngG theme-dark">
          <div
            className="root-22AK9z"
            style={{ height: "calc(100% - 48px)", paddingTop: 48 }}
          >
            <div
              className="scroller-35tvpe auto-1QyTTa scrollerBase-2JI3E3"
              style={{ overflow: "hidden scroll", paddingRight: 0 }}
            >
              <div className="content-yjf30S" style={{ height: 1232 }}>
                <div aria-hidden="true" style={{ height: 0 }} />
                <div
                  className="container-2ke8bD header-1sQw5b"
                  role="button"
                  tabIndex={0}
                >
                  <svg
                    className="micIcon-3cjD1k"
                    aria-hidden="true"
                    role="img"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                    />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                    />
                    <path
                      fill="currentColor"
                      d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                    />
                    <path
                      fill="currentColor"
                      d="M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                    />
                  </svg>
                  <div
                    className="text-md-semibold-2VMhBr text-39cIuf"
                    data-text-variant="text-md/semibold"
                    style={{ color: "var(--header-primary)" }}
                  >
                    Audience — 58
                  </div>
                  <svg
                    className="downIcon-cM591w"
                    aria-hidden="true"
                    role="img"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M16.59 8.59003L12 13.17L7.41 8.59003L6 10L12 16L18 10L16.59 8.59003Z"
                    />
                  </svg>
                </div>

                <Participents />
                <Participents />
                <Participents />
                <Participents />
                <Participents />
                <Participents />

                {/* <div className="participants-3hk3ND">
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src={avatar}
                    alt="HOALV"
                    aria-label="HOALV"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    HOALV
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="https://cdn.discordapp.com/avatars/803940956264464404/953b8465827f87f4e4c78a0a51d426c3.webp?size=80"
                    alt="kosaku360"
                    aria-label="kosaku360"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    kosaku360
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/6f26ddd1bf59740c536d2274bb834a05.png"
                    alt="V1n"
                    aria-label="V1n"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    V1n
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="https://cdn.discordapp.com/avatars/681221497993560075/b7dc13bcea0a0cc23bbca1f9ff097700.webp?size=80"
                    alt="تروك"
                    aria-label="تروك"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    تروك
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="https://cdn.discordapp.com/avatars/703061927823278171/0e1a3114e266d5fc636f8597eb969e1d.webp?size=80"
                    alt="ABSURD ODDITY"
                    aria-label="ABSURD ODDITY"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    ABSURD ODDITY
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/1f0bfc0865d324c2587920a7d80c609b.png"
                    alt="almagrace0504"
                    aria-label="almagrace0504"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    almagrace0504
                  </div>
                </div>
              </div>
            </div>
            <div className="participants-3hk3ND">
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src={avatar}
                    alt="anyan"
                    aria-label="anyan"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    anyan
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/1f0bfc0865d324c2587920a7d80c609b.png"
                    alt="Castle"
                    aria-label="Castle"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    Castle
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/7c8f476123d28d103efe381543274c25.png"
                    alt="ErdsDii"
                    aria-label="ErdsDii"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    ErdsDii
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/7c8f476123d28d103efe381543274c25.png"
                    alt="intereye"
                    aria-label="intereye"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    intereye
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/c09a43a372ba81e3018c3151d4ed4773.png"
                    alt="jpavo99"
                    aria-label="jpavo99"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    jpavo99
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/1f0bfc0865d324c2587920a7d80c609b.png"
                    alt="MarcusASBarr"
                    aria-label="MarcusASBarr"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    MarcusASBarr
                  </div>
                </div>
              </div>
            </div>
            <div className="participants-3hk3ND">
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/c09a43a372ba81e3018c3151d4ed4773.png"
                    alt="RStephenFitz"
                    aria-label="RStephenFitz"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    RStephenFitz
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/1f0bfc0865d324c2587920a7d80c609b.png"
                    alt="xmalolatx"
                    aria-label="xmalolatx"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    xmalolatx
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/1f0bfc0865d324c2587920a7d80c609b.png"
                    alt="ChaosBorders"
                    aria-label="ChaosBorders"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    ChaosBorders
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="https://cdn.discordapp.com/avatars/299284538691944451/e2dd72b2f834f727cd16064faa61f32d.webp?size=80"
                    alt="fb01"
                    aria-label="fb01"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    fb01
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/c09a43a372ba81e3018c3151d4ed4773.png"
                    alt="intereye"
                    aria-label="intereye"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    intereye
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/1f0bfc0865d324c2587920a7d80c609b.png"
                    alt="Mah"
                    aria-label="Mah"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    Mah
                  </div>
                </div>
              </div>
            </div>
            <div className="participants-3hk3ND">
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="https://cdn.discordapp.com/avatars/988161906458132540/f7f2e9361e8a54ce6e72580ac7b967af.webp?size=80"
                    alt="Thiemo"
                    aria-label="Thiemo"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    Thiemo
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/7c8f476123d28d103efe381543274c25.png"
                    alt="wahren"
                    aria-label="wahren"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    wahren
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="https://cdn.discordapp.com/avatars/889549540183662643/8e30afaa4240bd58aa1a5cd1bcf03c23.webp?size=80"
                    alt="XISHNIKA"
                    aria-label="XISHNIKA"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    XISHNIKA
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/1f0bfc0865d324c2587920a7d80c609b.png"
                    alt="aurora quinti"
                    aria-label="aurora quinti"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    aurora quinti
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/c09a43a372ba81e3018c3151d4ed4773.png"
                    alt="akiyuki"
                    aria-label="akiyuki"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    akiyuki
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/7c8f476123d28d103efe381543274c25.png"
                    alt="ARKIDE"
                    aria-label="ARKIDE"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    ARKIDE
                  </div>
                </div>
              </div>
            </div>
            <div className="participants-3hk3ND">
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/3c6ccb83716d1e4fb91d3082f6b21d77.png"
                    alt="Cinal"
                    aria-label="Cinal"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    Cinal
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/3c6ccb83716d1e4fb91d3082f6b21d77.png"
                    alt="adeline"
                    aria-label="adeline"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    adeline
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="https://cdn.discordapp.com/avatars/588872410657193985/bec89048402a2df708eaa393094df03d.webp?size=80"
                    alt="BONGSU"
                    aria-label="BONGSU"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    BONGSU
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="https://cdn.discordapp.com/avatars/1109192262207930548/f7f2e9361e8a54ce6e72580ac7b967af.webp?size=80"
                    alt="ChatGPT_2023_nico"
                    aria-label="ChatGPT_2023_nico"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    ChatGPT_2023_nico
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="https://cdn.discordapp.com/avatars/1109434159946027088/17b7893ed8b1a8abd4cf29da3c0a7d49.webp?size=80"
                    alt="evartsterrenz"
                    aria-label="evartsterrenz"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    evartsterrenz
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/7c8f476123d28d103efe381543274c25.png"
                    alt="Ghermas"
                    aria-label="Ghermas"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    Ghermas
                  </div>
                </div>
              </div>
            </div>
            <div className="participants-3hk3ND">
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/1f0bfc0865d324c2587920a7d80c609b.png"
                    alt="JeanL"
                    aria-label="JeanL"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    JeanL
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/c09a43a372ba81e3018c3151d4ed4773.png"
                    alt="vcoleman"
                    aria-label="vcoleman"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    vcoleman
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/7c8f476123d28d103efe381543274c25.png"
                    alt="吉水"
                    aria-label="吉水"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    吉水
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/1f0bfc0865d324c2587920a7d80c609b.png"
                    alt="hassankhan123"
                    aria-label="hassankhan123"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    hassankhan123
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="https://cdn.discordapp.com/avatars/639231094968942592/de8d271a43f5b435394124f4199bcbe1.webp?size=80"
                    alt="Humanity and Conflicts"
                    aria-label="Humanity and Conflicts"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    Humanity and Conflicts
                  </div>
                </div>
              </div>
              <div
                className="tileContainer-Os085F tileBaseContainer-2zuu3-"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="avatarContainer-1IdZvt">
                  <img
                    src="/assets/1f0bfc0865d324c2587920a7d80c609b.png"
                    alt="Inventio"
                    aria-label="Inventio"
                    className="avatar-rC0Atp"
                  />
                </div>
                <div className="textContainer-37W3Ry">
                  <div
                    className="text-sm-normal-AEQz4v text-NKMwrd"
                    data-text-variant="text-sm/normal"
                    style={{ color: "var(--header-primary)" }}
                  >
                    Inventio
                  </div>
                </div>
              </div>
            </div> */}
              </div>
            </div>
            <div className="videoControls-353CsJ">
              <div className="gradientBottom-uB_-4E gradientContainer-phMG8d" />
              <div className="topControls-23RE3h controlSection-1mNixL">
                <section className="theme-dark participants-3eCqDy container-ZMc96U transparent-1lUmft">
                  <div className="children-3xh0VB">
                    <div className="icon-2vczkG iconWrapper-2awDjA">
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
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="channelNameWrapper-2KkqV0 titleWrapper-24Kyzc">
                      <h1
                        className="defaultColor-1EVLSt heading-md-semibold-2h_vsp defaultColor-1GKx81 channelName-1d4zaz title-17SveM"
                        data-text-variant="heading-md/semibold"
                      >
                        stage-1
                      </h1>
                    </div>
                    <div className="divider-q3P9HC divider-lB_XoY" />
                    <div className="titleWrapper-24Kyzc">
                      <h1
                        className="defaultColor-1EVLSt heading-md-semibold-2h_vsp defaultColor-1GKx81 title-17SveM"
                        data-text-variant="heading-md/semibold"
                      >
                        <svg
                          aria-hidden="true"
                          role="img"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z"
                            fill="currentColor"
                          />
                        </svg>
                        <div
                          className="text-xs-medium-311pdh speakerCount-1EvsQT"
                          data-text-variant="text-xs/medium"
                          style={{ color: "var(--header-secondary)" }}
                        >
                          0 is speaking
                        </div>
                        <svg
                          aria-hidden="true"
                          role="img"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                          />
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                          />
                          <path
                            fill="currentColor"
                            d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                          />
                          <path
                            fill="currentColor"
                            d="M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                          />
                        </svg>
                        <div
                          className="text-xs-medium-311pdh speakerCount-1EvsQT"
                          data-text-variant="text-xs/medium"
                          style={{ color: "var(--header-secondary)" }}
                        >
                          58 in audience
                        </div>
                      </h1>
                    </div>
                  </div>
                  <div className="toolbar-3_r2xA">
                    <div>
                      <button
                        aria-label="More"
                        type="button"
                        className="button-FZsBUU button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"
                      >
                        <div className="contents-3NembX lineHeightReset-1WxXXk">
                          <svg
                            className="controlIcon-10O-4h buttonIcon-27C7JL"
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
                    <div className="recentsIcon-F3eO1o">
                      <div
                        className="button-FZsBUU iconWrapper-2awDjA clickable-ZD7xvu"
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
                    <div className="button-FZsBUU">
                      <div>
                        <button
                          aria-label="Show Chat"
                          type="button"
                          className="button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"
                        >
                          <div className="contents-3NembX lineHeightReset-1WxXXk">
                            <div className="chatIcon-R5MUNn controlIcon-10O-4h buttonIcon-27C7JL">
                              <svg width={24} height={24} viewBox="0 0 24 24">
                                <defs>
                                  <mask id="f2876a36-6b0c-4823-b7ff-7547f1be0b9e">
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
                                  mask="url(#f2876a36-6b0c-4823-b7ff-7547f1be0b9e)"
                                />
                              </svg>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="bottomControls-31YuPK controlSection-1mNixL">
                <div
                  className="flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyStart-2Mwniq alignCenter-14kD11 noWrap-hBpHBz"
                  style={{ flex: "0 1 50%" }}
                />
                <div
                  className="flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyCenter-rrurWZ alignCenter-14kD11 noWrap-hBpHBz"
                  style={{ flex: "1 1 auto" }}
                >
                  <div className="container-a_NK-C">
                    <div className="">
                      <div>
                        <button
                          aria-label="Mute Music"
                          type="button"
                          className="buttonSpacing-ZuQU_D centerButton-1IShs7 colorable-3rVGna primaryDark-2UJt1G button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N"
                        >
                          <div className="contents-3NembX lineHeightReset-1WxXXk">
                            <svg
                              aria-hidden="true"
                              role="img"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M22 16.53C22 18.3282 20.2485 19.7837 18.089 19.7837C15.9285 19.7837 14.5396 18.3277 14.5396 16.53C14.5396 14.7319 15.9286 13.2746 18.089 13.2746C18.7169 13.2746 19.3089 13.4013 19.8353 13.6205V5.814L9.46075 7.32352V18.7449C9.46075 20.5424 7.70957 22 5.54941 22C3.38871 22 2 20.5443 2 18.7456C2 16.9481 3.3892 15.4898 5.54941 15.4898C6.17823 15.4898 6.76966 15.6162 7.29604 15.836C7.29604 11.3608 7.29604 8.5366 7.29604 4.1395L21.9996 2L22 16.53Z"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="">
                      <div>
                        <span className="disabledButtonWrapper-1m0hYZ">
                          <button
                            aria-label="Raise Hand Disabled"
                            type="button"
                            disabled=""
                            className="buttonSpacing-ZuQU_D centerButton-1IShs7 colorable-3rVGna primaryDark-2UJt1G button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N"
                          >
                            <div className="contents-3NembX lineHeightReset-1WxXXk">
                              <svg
                                className="raisedHandButtonIcon-36wr8e"
                                aria-hidden="true"
                                role="img"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M21.03 7.76998C20.955 7.60998 20.81 7.48998 20.635 7.44498C20.545 7.41998 20.445 7.39498 20.35 7.36998C19.805 7.22998 19.135 7.56498 18.85 8.11498L17.87 9.99998C17.585 10.55 17.225 10.51 17.07 9.90998L14.895 1.38498C14.74 0.779981 14.14 0.459981 13.55 0.664981C12.96 0.869981 12.595 1.52498 12.725 2.13498L13.995 7.95998C14.13 8.56998 14.075 9.11498 13.875 9.18498C13.675 9.25498 13.35 8.83498 13.15 8.24498L11.05 2.07498C10.85 1.48498 10.21 1.17498 9.62004 1.37998C9.03004 1.58498 8.71504 2.22998 8.91004 2.81998L10.97 8.99998C11.165 9.58998 11.165 10.125 10.965 10.195C10.765 10.265 10.385 9.86498 10.125 9.29998L7.77504 4.29998C7.51004 3.73998 6.82004 3.44498 6.23004 3.64998C5.64504 3.85498 5.37504 4.47498 5.64004 5.03998L8.60004 11.045C8.86004 11.61 8.91004 12.125 8.71004 12.195C8.51004 12.265 8.03004 11.93 7.64004 11.445L5.60504 8.82498C5.21504 8.33998 4.54004 8.07498 4.09504 8.22998C3.65504 8.38498 3.54004 8.94498 3.84504 9.48998L6.34504 13.865C6.40004 14.02 7.85504 16.8 7.96004 16.915C9.00004 18.565 10.645 19.51 12.73 18.79L14.91 18.035C16.145 17.605 17.095 16.735 17.63 15.7C17.64 15.69 20.15 10.205 21.03 8.28498C21.105 8.11498 21.105 7.92998 21.03 7.76998Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M21.3251 23.4001L19.1101 19.0301C18.8501 18.5201 18.2501 18.2851 17.7151 18.4851L12.3101 20.5101C12.0201 20.6201 11.7851 20.8451 11.6651 21.1351C11.5451 21.4251 11.5551 21.7501 11.6851 22.0301L12.3151 23.3951H21.3251V23.4001Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                          </button>
                          <span className="disabledButtonOverlay-10gJ0t" />
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="buttonSpacing-ZuQU_D buttonWithTextButton-3X3HMj button-ejjZWC lookFilled-1H2Jvj colorRed-2VFhM4 sizeMedium-2oH5mg grow-2T4nbg"
                    >
                      <div className="contents-3NembX">
                        <div className="buttonWithTextInnerContainer-2Vl7uJ">
                          <svg
                            className="buttonWithTextIcon-YDu3bb"
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
                          <div
                            className="text-sm-medium-2-Xzsi"
                            data-text-variant="text-sm/medium"
                          >
                            Disconnect Quietly
                          </div>
                        </div>
                      </div>
                    </button>
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
                      className="rightTrayIcon-1gEoki button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"
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
                      className="rightTrayIcon-1gEoki button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg"
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
            <div
              className="erd_scroll_detection_container erd_scroll_detection_container_animation_active"
              style={{
                visibility: "hidden",
                display: "inline",
                width: 0,
                height: 0,
                zIndex: -1,
                overflow: "hidden",
                margin: 0,
                padding: 0,
              }}
            >
              <div
                dir="ltr"
                className="erd_scroll_detection_container"
                style={{
                  position: "absolute",
                  flex: "0 0 auto",
                  overflow: "hidden",
                  zIndex: -1,
                  visibility: "hidden",
                  width: "100%",
                  height: "100%",
                  left: 0,
                  top: 0,
                }}
              >
                <div
                  className="erd_scroll_detection_container"
                  style={{
                    position: "absolute",
                    flex: "0 0 auto",
                    overflow: "hidden",
                    zIndex: -1,
                    visibility: "hidden",
                    inset: "-18px -17px -17px -18px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      flex: "0 0 auto",
                      overflow: "scroll",
                      zIndex: -1,
                      visibility: "hidden",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 776,
                        height: 837,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      flex: "0 0 auto",
                      overflow: "scroll",
                      zIndex: -1,
                      visibility: "hidden",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "200%",
                        height: "200%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <GroupVoiceMessage/> */}
      </div>
      <div className="layerContainer-2lfOPe">
        <div className="chatToasts-2Puyg2 theme-dark" />
      </div>
      <div className="content-1jQy2l noChat-sb1z07" />
    </div>
  );
};

export default GroupVoiceChat;
