import {MediaAttachmets} from "./MediaAttachmets"
import { ReactionAttachments } from "./ReactionAttachments"

export const Message = (props) => {

    return (
        <li id="chat-messages-989270503925616680-1102153185184993380" className="chat-messageListItem"
            aria-setsize={-1}>
            <div className="message-2CShn3 cozyMessage-1DWF9U groupStart-3Mlgv1 wrapper-30-Nkg cozy-VmLDNB zalgo-26OfGz" role="article" data-list-item-id="chat-messages___chat-messages-989270503925616680-1102153185184993380"
                tabIndex={-1}
                aria-setsize={-1}
                aria-roledescription="Message"
                aria-labelledby="message-username-1102153185184993380 uid_1 message-content-1102153185184993380 uid_2 message-timestamp-1102153185184993380">
                {
                props.hasReplay && <div id="message-reply-context-1102097374052110346" className="repliedMessage-3Z6XBG" aria-label="Dr3am L0g1c replying to SvenskKung">
                    <img alt=""
                        src={
                            props.replayAvatar
                        }
                        className="replyAvatar-sHd2sU clickable-31pE3P"/>
                    <span className="username-h_Y3Us desaturateUserColors-1O-G89 clickable-31pE3P" aria-expanded="false" role="button"
                        tabIndex={0}
                        style={
                            {color: "rgb(52, 152, 219)"}
                    }>
                        {
                        props.replayTo
                    } </span>
                    <div className="repliedTextPreview-1bvxun clickable-31pE3P" role="button"
                        tabIndex={0}>
                        <div id="message-content-1102095146067181718" className="repliedTextContent-2hOYMB markup-eYLPri messageContent-2t3eCI">
                            {
                            props.replayMsg
                        }
                            -{" "}
                            {
                            props.replayHasLink && <a className="anchor-1X4H4q anchorUnderlineOnHover-wiZFZ_" rel="noreferrer noopener" target="_blank" title="https://twitter.com/svpino/status/1650938223412011009?s=46&t=UIBjLvfbJL0jdH-wMbY91Q">
                                {
                                props.replayMsgLink
                            } </a>
                        } </div>
                    </div>
                    <svg className="repliedTextContentIcon-1LQXRB" aria-hidden="true" role="img"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z" fill="currentColor"/>
                    </svg>
                </div>
            }
                <div className="contents-2MsGLg">
                    {
                    props.isDetailAvail && <>
                        <img src={
                                props.avatar
                            }
                            aria-hidden="true"
                            className="avatar-2e8lTP clickable-31pE3P"
                            alt=" "/>
                        <h3 className="header-2jRmjb" aria-labelledby="message-username-1102153185184993380 message-timestamp-1102153185184993380">
                            <span id="message-username-1102153185184993380" className="headerText-2z4IhQ">
                                <span className="username-h_Y3Us desaturateUserColors-1O-G89 clickable-31pE3P" aria-expanded="false" role="button"
                                    tabIndex={0}
                                    style={
                                        {color: "rgb(52, 152, 219)"}
                                }>
                                    {
                                    props.username
                                } </span>
                            </span>
                            <span className="timestamp-p1Df1m timestampInline-_lS3aK">
                                <time aria-label="Today at 2:13 PM" id="message-timestamp-1102153185184993380" dateTime="2023-04-30T08:43:16.364Z">
                                    <i className="separator-AebOhG" aria-hidden="true">
                                        {" "}
                                        —{" "} </i>
                                    {
                                    props.time
                                } </time>
                            </span>
                        </h3>
                    </>
                }

                    <div id="message-content-1102153185184993380" className="markup-eYLPri messageContent-2t3eCI">
                        {
                        props.messageContent
                    } </div>
                </div>
                <div id="message-accessories-1102153185184993380" className="container-2sjPya">
                {
                props.isMediaAttached && 
                    <MediaAttachmets mediaOriginal={props.mediaOriginal} mediaImg={props.mediaImg}/>
                } 
                {props.hasReaction &&
                    <ReactionAttachments/>
                }
                </div>
            </div>
        </li>
    )
}
