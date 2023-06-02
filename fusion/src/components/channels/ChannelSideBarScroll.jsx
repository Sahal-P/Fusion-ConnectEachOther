import {ChannelsList} from "./ChannelsList"
import {HomeIcon} from '../icons/HomeIcon'
import {EventCalenderIcon} from '../icons/EventCalenderIcon'
import {HashSearchIcon} from '../icons/HashSearchIcon'
import { DownArrowExpandIcon } from "../icons/DownArrowExpandIcon"
import { AnnouncementIcon } from "../icons/AnnouncementIcon"
import { HashMessagePrivateIcon } from "../icons/HashMessagePrivateIcon"
import VoiceChannelStageIcon from "../icons/VoiceChannelStageIcon"
import { Link } from "react-router-dom"
import ChannelDefault from "./ChannelDefault"

export const ChannelSideBarScroll = () => {
    return (
        <div className="channels-side-bar-scroll-bar" orientation="vertical" id="channels"
            tabIndex={0}
            data-jump-section="global"
            style={
                {
                    overflow: "hidden scroll",
                    paddingRight: 0
                }
        }>
            <ul aria-label="Channels" className="channel-sidebar-scroll-ul-content">
                <div aria-hidden="true"
                    style={
                        {height: 84}
                    }/>
                <div style={
                    {height: 12}
                }/>
                <div className="channel-sidebar-scroll-icon-wrapper">
                    <div className="channel-sidebar-scroll-content">
                        <div className="channel-sidebar-scroll-main-content" role="listitem" data-list-item-id="channels___home-tab-662267976984297473"
                            tabIndex={-1}>
                            <div className="channel-sidebar-scroll-icon-container">
                                <HomeIcon/>
                            </div>
                            <div className="channel-sidebar-scroll-icon-text">Home</div>
                        </div>
                    </div>
                </div>
                <div className="channel-sidebar-scroll-icon-wrapper-default">
                    <div className="channel-sidebar-scroll-icon-wrapper">
                        <div className="channel-scrollbar-unread-sy"/>
                        <div className="channel-sidebar-scroll-content">
                            <div className="channel-sidebar-scroll-main-content" role="listitem" data-list-item-id="channels___upcoming-events-662267976984297473"
                                tabIndex={-1}>
                                <div className="channel-sidebar-scroll-icon-container">
                                    <EventCalenderIcon/>
                                </div>
                                <div className="channel-sidebar-scroll-icon-text">2 Events</div>
                                <div className="channel-sidebar-numberBadge"
                                    style={
                                        {width: 16}
                                }>
                                    2
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="channel-sidebar-scroll-icon-wrapper-default">
                    <div className="channel-sidebar-scroll-icon-wrapper">
                        <div className="channel-sidebar-scroll-content">
                            <div className="channel-sidebar-scroll-main-content" role="button"
                                tabIndex={0}>
                                <div className="channel-sidebar-scroll-icon-container">
                                    <HashSearchIcon/>
                                </div>
                                <div className="channel-sidebar-scroll-icon-text">Channels &amp; Roles</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="channel-sidebar-section-divider"/>

                <li className="channel-sidebar-scroll-icon-wrapper-default-title" data-dnd-name="info" draggable="true">
                    <div className="channel-sidebar-scroll-icon-wrapper-title collapsed-2KOacR clickable-2AoIYN">
                        <div className="channel-sidebar-scroll-main-content-title"
                            tabIndex={-1}
                            data-list-item-id="channels___942050264683257928"
                            aria-label="info (category)"
                            aria-expanded="false"
                            role="button">
                            <DownArrowExpandIcon/>
                            <h2 className="channel-sidebar-scroll-title-name">
                                <div className="channel-sidebar-title-overflow">info</div>
                            </h2>
                        </div>
                        <div className="children-3MeUvj"/>
                    </div>
                </li>
                <li className="channel-sidebar-scroll-icon-wrapper-default" data-dnd-name="announcements">
                    <div className="channel-sidebar-scroll-icon-wrapper wrapper-NhbLHG modeUnread-3Cxepe">
                        <div className="channel-scrollbar-unread-sy unreadRelevant-2f-VSK"/>
                        <div className="channel-sidebar-scroll-content">
                        <Link to={'/channels/11223054545'} className="channel-sidebar-scroll-main-content" tabIndex={-1}>
                            
                                <div aria-label="Announcements" role="img" className="channel-sidebar-scroll-icon-container">
                                    <AnnouncementIcon/>
                                </div>
                                <div className="channel-sidebar-scroll-icon-text channelName-3KPsGw channel-sidebar-title-overflow" aria-hidden="true">
                                    announcements
                                </div>
                        </Link>
                            <div className="channel-scrollbar-children-icon -1MGS9G">
                                <div className="channel-scrollbar-children-icon-item" aria-label="Invite to Server"
                                    tabIndex={0}
                                    role="button">
                                    <svg className="channel-scrollbar-children-action-icon" aria-hidden="true" role="img"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16">
                                        <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"/>
                                        <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"/>
                                        <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"/>
                                    </svg>
                                </div>
                                <div className="channel-scrollbar-children-channel-info"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="channel-sidebar-scroll-icon-wrapper-default" data-dnd-name="status">
                    <div className="channel-sidebar-scroll-icon-wrapper wrapper-NhbLHG modeUnread-3Cxepe">
                        <div className="channel-scrollbar-unread-sy unreadRelevant-2f-VSK"/>
                        <div className="channel-sidebar-scroll-content">
                        <Link to={'/channels/7845466654545'} className="channel-sidebar-scroll-main-content" tabIndex={-1}>
                               
                                <div aria-label="Announcements" role="img" className="channel-sidebar-scroll-icon-container">
                                <AnnouncementIcon/>
                                    
                                </div>
                                <div className="channel-sidebar-scroll-icon-text channelName-3KPsGw channel-sidebar-title-overflow" aria-hidden="true">
                                    status
                                </div>
                        </Link>
                            <div className="channel-scrollbar-children-icon">
                                <div className="channel-scrollbar-children-icon-item" aria-label="Invite to Server"
                                    tabIndex={0}
                                    role="button">
                                    <svg className="channel-scrollbar-children-action-icon" aria-hidden="true" role="img"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16">
                                        <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"/>
                                        <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"/>
                                        <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"/>
                                    </svg>
                                </div>
                                <div className="channel-scrollbar-children-channel-info"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="channel-sidebar-scroll-icon-wrapper-default-title" data-dnd-name="Support" draggable="true">
                    <div className="channel-sidebar-scroll-icon-wrapper-title collapsed-2KOacR clickable-2AoIYN">
                        <div className="channel-sidebar-scroll-main-content-title"
                            tabIndex={-1}
                            data-list-item-id="channels___989982386471182426"
                            aria-label="Support (category)"
                            aria-expanded="false"
                            role="button">
                            <DownArrowExpandIcon/>
                            
                            <h2 className="channel-sidebar-scroll-title-name">
                                <div className="channel-sidebar-title-overflow">Support</div>
                            </h2>
                        </div>
                        <div className="children-3MeUvj"/>
                    </div>
                </li>
                <li className="channel-sidebar-scroll-icon-wrapper-default-title" data-dnd-name="Newcomer Rooms" draggable="true">
                    <div className="channel-sidebar-scroll-icon-wrapper-title clickable-2AoIYN">
                        <div className="channel-sidebar-scroll-main-content-title"
                            tabIndex={-1}
                            data-list-item-id="channels___968967288151761026"
                            aria-label="Newcomer Rooms (category)"
                            aria-expanded="true"
                            role="button">
                            <DownArrowExpandIcon/>
                            
                            <h2 className="channel-sidebar-scroll-title-name">
                                <div className="channel-sidebar-title-overflow">Newcomer Rooms</div>
                            </h2>
                        </div>
                        <div className="children-3MeUvj"/>
                    </div>
                </li>
                <li className="channel-sidebar-scroll-icon-wrapper-default" data-dnd-name="newbies-45">
                    <div className="channel-sidebar-scroll-icon-wrapper wrapper-NhbLHG modeUnread-3Cxepe">
                        <div className="channel-scrollbar-unread-sy unreadRelevant-2f-VSK"/>
                        <div className="channel-sidebar-scroll-content">
                                <Link to={'/channels/988876654545'} className="channel-sidebar-scroll-main-content" tabIndex={-1}>
                                <div aria-label="Text (Active Threads)" role="img" className="channel-sidebar-scroll-icon-container">
                                    <HashMessagePrivateIcon/>
                                </div>
                                <div className="channel-sidebar-scroll-icon-text channelName-3KPsGw channel-sidebar-title-overflow" aria-hidden="true">
                                    newbies-45
                                </div>
                                </Link>
                            <div className="channel-scrollbar-children-icon">
                                <div className="channel-scrollbar-children-icon-item" aria-label="Invite to Server"
                                    tabIndex={0}
                                    role="button">
                                    <svg className="channel-scrollbar-children-action-icon" aria-hidden="true" role="img"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16">
                                        <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"/>
                                        <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"/>
                                        <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"/>
                                    </svg>
                                </div>
                                <div className="channel-scrollbar-children-channel-info"/>
                            </div>
                        </div>
                    </div>
                </li>
                <Link style={{color: 'inherit',textDecoration: 'inherit'}} to={'voice/87868676776'}>
                <li className="channel-sidebar-scroll-icon-wrapper-default" data-dnd-name="newbies-15">
                    <div className="channel-sidebar-scroll-icon-wrapper wrapper-NhbLHG modeUnread-3Cxepe">
                        <div className="channel-scrollbar-unread-sy unreadRelevant-2f-VSK"/>
                        <div className="channel-sidebar-scroll-content">
                            <a href="/channels/662267976984297473/981697600023560262" role="link" className="channel-sidebar-scroll-main-content" data-list-item-id="channels___981697600023560262"
                                tabIndex={-1}
                                aria-label="unread, newbies-15 (text channel)">
                                <div aria-label="Text (Active Threads)" role="img" className="channel-sidebar-scroll-icon-container">
                                    {/* <HashMessagePrivateIcon/> */}
                                    <VoiceChannelStageIcon/>
                                </div>
                                <div className="channel-sidebar-scroll-icon-text channelName-3KPsGw channel-sidebar-title-overflow" aria-hidden="true">
                                    voice-ch-1
                                </div>
                            </a>
                            <div className="channel-scrollbar-children-icon">
                                <div className="channel-scrollbar-children-icon-item" aria-label="Invite to Server"
                                    tabIndex={0}
                                    role="button">
                                    <svg className="channel-scrollbar-children-action-icon" aria-hidden="true" role="img"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16">
                                        <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"/>
                                        <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"/>
                                        <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"/>
                                    </svg>
                                      
                                </div>
                                
                                <div className="channel-scrollbar-children-channel-info"/>
                            </div>
                        </div>
                    </div>
                </li>
                </Link>
                <li className="channel-sidebar-scroll-icon-wrapper-default-title" data-dnd-name="newcomer rooms 2" draggable="true">
                    <div className="channel-sidebar-scroll-icon-wrapper-title clickable-2AoIYN">
                        <div className="channel-sidebar-scroll-main-content-title"
                            tabIndex={-1}
                            data-list-item-id="channels___997259074561392771"
                            aria-label="newcomer rooms 2 (category)"
                            aria-expanded="true"
                            role="button">
                            <DownArrowExpandIcon/>
                            
                            <h2 className="channel-sidebar-scroll-title-name">
                                <div className="channel-sidebar-title-overflow">newcomer rooms 2</div>
                            </h2>
                        </div>
                        <div className="children-3MeUvj"/>
                    </div>
                </li>
                <li className="channel-sidebar-scroll-icon-wrapper-default" data-dnd-name="newbies-75">
                    <div className="channel-sidebar-scroll-icon-wrapper wrapper-NhbLHG modeUnread-3Cxepe">
                        <div className="channel-scrollbar-unread-sy unreadRelevant-2f-VSK"/>
                        <div className="channel-sidebar-scroll-content">
                        <Link to={'/channels/1000898545/video/7678768'} className="channel-sidebar-scroll-main-content" tabIndex={-1}>
                            
                                <div aria-label="Text (Active Threads)" role="img" className="channel-sidebar-scroll-icon-container">
                                    {/* <HashMessagePrivateIcon/> */}
                                    <svg className="channel-sidebar-scroll-icon-2" aria-hidden="true" role="img"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"><path fill="currentColor" d="M21.526 8.149C21.231 7.966 20.862 7.951 20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z"></path></svg>
                                </div>
                                <div className="channel-sidebar-scroll-icon-text channelName-3KPsGw channel-sidebar-title-overflow" aria-hidden="true">
                                    newbies-75
                                </div>
                        </Link>
                            <div className="channel-scrollbar-children-icon">
                                <div className="channel-scrollbar-children-icon-item" aria-label="Invite to Server"
                                    tabIndex={0}
                                    role="button">
                                    <svg className="channel-scrollbar-children-action-icon" aria-hidden="true" role="img"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16">
                                        <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"/>
                                        <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"/>
                                        <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"/>
                                    </svg>
                                </div>
                                <div className="channel-scrollbar-children-channel-info"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="channel-sidebar-scroll-icon-wrapper-default-title" data-dnd-name="Chat" draggable="true">
                    <div className="channel-sidebar-scroll-icon-wrapper-title clickable-2AoIYN">
                        <div className="channel-sidebar-scroll-main-content-title"
                            tabIndex={-1}
                            data-list-item-id="channels___746557006558527579"
                            aria-label="Chat (category)"
                            aria-expanded="true"
                            role="button">
                            <DownArrowExpandIcon/>
                            
                            <h2 className="channel-sidebar-scroll-title-name">
                                <div className="channel-sidebar-title-overflow">Chat</div>
                            </h2>
                        </div>
                        <div className="children-3MeUvj"/>
                    </div>
                </li>
                <li className="channel-sidebar-scroll-icon-wrapper-default selected-2TbFuo" data-dnd-name="discussion">
                    <div className="channel-sidebar-scroll-icon-wrapper wrapper-NhbLHG modeSelected-3DmyhH">
                        <div className="channel-sidebar-scroll-content">
                            <a href="/channels/662267976984297473/938713143759216720" role="link" className="channel-sidebar-scroll-main-content" data-list-item-id="channels___938713143759216720"
                                tabIndex={-1}
                                aria-label="unread, discussion (text channel)">
                                <div aria-label="Text" role="img" className="channel-sidebar-scroll-icon-container">
                                    <svg width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        className="channel-sidebar-scroll-icon-2"
                                        aria-hidden="true"
                                        role="img">
                                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"/>
                                    </svg>
                                </div>
                                <div className="channel-sidebar-scroll-icon-text channelName-3KPsGw channel-sidebar-title-overflow" aria-hidden="true">
                                    discussion
                                </div>
                            </a>
                            <div className="channel-scrollbar-children-icon">
                                <div className="channel-scrollbar-children-icon-item" aria-label="Invite to Server"
                                    tabIndex={0}
                                    role="button">
                                    <svg className="channel-scrollbar-children-action-icon" aria-hidden="true" role="img"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16">
                                        <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"/>
                                        <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"/>
                                        <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"/>
                                    </svg>
                                </div>
                                <div className="channel-scrollbar-children-channel-info"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="channel-sidebar-scroll-icon-wrapper-default" data-dnd-name="philosophy">
                    <div className="channel-sidebar-scroll-icon-wrapper wrapper-NhbLHG modeUnread-3Cxepe">
                        <div className="channel-scrollbar-unread-sy unreadRelevant-2f-VSK"/>
                        <div className="channel-sidebar-scroll-content">
                            <a href="/channels/662267976984297473/989270503925616680" role="link" className="channel-sidebar-scroll-main-content" data-list-item-id="channels___989270503925616680"
                                tabIndex={-1}
                                aria-label="unread, philosophy (text channel)">
                                <div aria-label="Text" role="img" className="channel-sidebar-scroll-icon-container">
                                    <svg width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        className="channel-sidebar-scroll-icon-2"
                                        aria-hidden="true"
                                        role="img">
                                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"/>
                                    </svg>
                                </div>
                                <div className="channel-sidebar-scroll-icon-text channelName-3KPsGw channel-sidebar-title-overflow" aria-hidden="true">
                                    philosophy
                                </div>
                            </a>
                            <div className="channel-scrollbar-children-icon">
                                <div className="channel-scrollbar-children-icon-item" aria-label="Invite to Server"
                                    tabIndex={0}
                                    role="button">
                                    <svg className="channel-scrollbar-children-action-icon" aria-hidden="true" role="img"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16">
                                        <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"/>
                                        <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"/>
                                        <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"/>
                                    </svg>
                                </div>
                                <div className="channel-scrollbar-children-channel-info"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="channel-sidebar-scroll-icon-wrapper-default" data-dnd-name="prompt-chat">
                    <div className="channel-sidebar-scroll-icon-wrapper wrapper-NhbLHG modeUnread-3Cxepe">
                        <div className="channel-scrollbar-unread-sy unreadRelevant-2f-VSK"/>
                        <div className="channel-sidebar-scroll-content">
                            <a href="/channels/662267976984297473/992207085146222713" role="link" className="channel-sidebar-scroll-main-content" data-list-item-id="channels___992207085146222713"
                                tabIndex={-1}
                                aria-label="unread, prompt-chat (text channel)">
                                <div aria-label="Text (Active Threads)" role="img" className="channel-sidebar-scroll-icon-container">
                                    <svg className="channel-sidebar-scroll-icon-2" aria-hidden="true" role="img"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none">
                                        <path fill="currentColor" d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z"/>
                                        <path fill="currentColor" d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z"/>
                                    </svg>
                                </div>
                                <div className="channel-sidebar-scroll-icon-text channelName-3KPsGw channel-sidebar-title-overflow" aria-hidden="true">
                                    prompt-chat
                                </div>
                            </a>
                            <div className="channel-scrollbar-children-icon">
                                <div className="channel-scrollbar-children-icon-item" aria-label="Invite to Server"
                                    tabIndex={0}
                                    role="button">
                                    <svg className="channel-scrollbar-children-action-icon" aria-hidden="true" role="img"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16">
                                        <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"/>
                                        <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"/>
                                        <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"/>
                                    </svg>
                                </div>
                                <div className="channel-scrollbar-children-channel-info"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="channel-sidebar-scroll-icon-wrapper-default" data-dnd-name="off-topic">
                    <div className="channel-sidebar-scroll-icon-wrapper wrapper-NhbLHG modeUnread-3Cxepe">
                        <div className="channel-scrollbar-unread-sy unreadRelevant-2f-VSK"/>
                        <div className="channel-sidebar-scroll-content">
                            <a href="/channels/662267976984297473/942201389805879366" role="link" className="channel-sidebar-scroll-main-content" data-list-item-id="channels___942201389805879366"
                                tabIndex={-1}
                                aria-label="unread, off-topic (text channel)">
                                <div aria-label="Text" role="img" className="channel-sidebar-scroll-icon-container">
                                    <svg width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        className="channel-sidebar-scroll-icon-2"
                                        aria-hidden="true"
                                        role="img">
                                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"/>
                                    </svg>
                                </div>
                                <div className="channel-sidebar-scroll-icon-text channelName-3KPsGw channel-sidebar-title-overflow" aria-hidden="true">
                                    off-topic
                                </div>
                            </a>
                            <div className="channel-scrollbar-children-icon">
                                <div className="channel-scrollbar-children-icon-item" aria-label="Invite to Server"
                                    tabIndex={0}
                                    role="button">
                                    <svg className="channel-scrollbar-children-action-icon" aria-hidden="true" role="img"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16">
                                        <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"/>
                                        <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"/>
                                        <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"/>
                                    </svg>
                                </div>
                                <div className="channel-scrollbar-children-channel-info"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="channel-sidebar-scroll-icon-wrapper-default" data-dnd-name="ideas-and-features">
                    <div className="channel-sidebar-scroll-icon-wrapper wrapper-NhbLHG modeUnread-3Cxepe">
                        <div className="channel-scrollbar-unread-sy unreadRelevant-2f-VSK"/>
                        <div className="channel-sidebar-scroll-content">
                            <a href="/channels/662267976984297473/989270517401911316" role="link" className="channel-sidebar-scroll-main-content" data-list-item-id="channels___989270517401911316"
                                tabIndex={-1}
                                aria-label="unread, ideas-and-features (text channel)">
                                <div aria-label="Text" role="img" className="channel-sidebar-scroll-icon-container">
                                    <svg width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        className="channel-sidebar-scroll-icon-2"
                                        aria-hidden="true"
                                        role="img">
                                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"/>
                                    </svg>
                                </div>
                                <div className="channel-sidebar-scroll-icon-text channelName-3KPsGw channel-sidebar-title-overflow" aria-hidden="true">
                                    ideas-and-features
                                </div>
                            </a>
                            <div className="channel-scrollbar-children-icon">
                                <div className="channel-scrollbar-children-icon-item" aria-label="Invite to Server"
                                    tabIndex={0}
                                    role="button">
                                    <svg className="channel-scrollbar-children-action-icon" aria-hidden="true" role="img"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16">
                                        <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"/>
                                        <path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"/>
                                        <path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"/>
                                    </svg>
                                </div>
                                <div className="channel-scrollbar-children-channel-info"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="channel-sidebar-scroll-icon-wrapper-default-title" data-dnd-name="Community Forums" draggable="true">
                    <div className="channel-sidebar-scroll-icon-wrapper-title clickable-2AoIYN">
                        <div className="channel-sidebar-scroll-main-content-title"
                            tabIndex={-1}
                            data-list-item-id="channels___1017914551250980946"
                            aria-label="Community Forums (category)"
                            aria-expanded="true"
                            role="button">
                            <DownArrowExpandIcon/>
                            
                            <h2 className="channel-sidebar-scroll-title-name">
                                <div className="channel-sidebar-title-overflow">Community Forums</div>
                            </h2>
                        </div>
                        <div className="children-3MeUvj"/>
                    </div>
                </li>
                <ChannelDefault name={'Ideas-1'} type={'default'}/>
                <ChannelsList/> 
                <ChannelsList/>
            </ul>
        </div>

    )
}
