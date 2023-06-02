import { ChannelHeader } from './ChannelHeader'
import { ChannelHeaderCommunityInfo } from './ChannelHeaderCommunityInfo'
import { ChannelProfilePannel } from './ChannelProfilePannel'
import { ChannelSideBarScroll } from './ChannelSideBarScroll'
import './channelsBase.css'

export const ChannelsBase = () => {
  return (
        <div className="channels-side-bar">
            <div className="channels-side-bar-container">
                    {/* channel header */}
                <div className="channels-side-bar-container-1">
                    <header className="channel-sidebar-header">
                        <ChannelHeader name="Midjourney"/>
                        <ChannelHeaderCommunityInfo type="Public"/>     
                    </header>
                    <div className="channel-animated-container">
                        <div className="channel-animated-banner-img">
                            <img src="https://cdn.discordapp.com/banners/662267976984297473/63249e6867f276efc07d32793b7b3b5a.webp?size=480" alt="" />
                        </div>
                    </div>
                </div>

                <div className="channels-side-bar-container-2"></div>
                <div className="channels-side-bar-positioned-container"></div>

                <ChannelSideBarScroll/>
                <div className="channels-side-bar-container-bottom">
                    <div className="channels-sidebar-bottom-padding">
                        <div className="container-bottom-empty-bar">
                        </div>
                    </div>
                </div>

            </div>
            <ChannelProfilePannel/>
        </div>
    
  )
}
