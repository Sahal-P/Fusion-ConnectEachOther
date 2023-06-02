// import './test.css'
import './Chat.css'
import {ChatHeaderTitle} from './ChatHeaderTitle'
import {Message} from './Message'
import {MessageNotification} from './MessageNotification'
import {MessageErrorBar} from './MessageErrorBar'
import {FormTextArea} from './FormTextArea'
import { ChannelMembersContainer } from './ChannelMembersContainer'
import avatar from '../../assets/media/avatar/avatar.svg'
import io from 'socket.io-client';

import NewDivider from './NewDivider'
import { useEffect } from 'react'

export const Chat = () => {
    const id = '565758'
    useEffect(()=>{
    console.log('hiiiiii chat');
    let url = `wss://fusion.com/ws/socket/user/${id}/`
    const _socket = new WebSocket(url)
    _socket.onmessage = function(e){
      let data = JSON.parse(e.data)
      console.log(data);
    }
    },[])
    return (
        <div className="chat-base-container">
          
            <ChatHeaderTitle/>

            <div className="chat-content-wrapper">
                <main className="chat-content" aria-label="philosophy (channel)">
                    <span className="hidden-visually-span">
                        <h2>philosophy chat</h2>
                    </span>
                    <div className="chat-message-wrapper">

                        <MessageNotification since={"10:30 AM"}
                            count={"50"}/>
                        <div className="scroller-kQBbkU customTheme-3QAYZq auto-2TJ1RH scrollerBase-1Pkza4 disableScrollAnchor-3Jzgzl managedReactiveScroller-1LjJZ5" dir="ltr" data-jump-section="global"
                            tabIndex={-1}
                            role="group">
                            <div className="scrollerContent-2SW0kQ content-yjf30S">
                                <ol className="scrollerInner-2PPAp2" aria-label="Messages in philosophy" role="list" data-list-id="chat-messages"
                                    tabIndex={0}>
                                    <span className="navigationDescription-3xDmE2" id="messagesNavigationDescription" aria-hidden="true">
                                        Use the up and down arrow keys to navigate between messages quickly. New
                                                                                        messages will be added to the bottom of the list as they come in.
                                    </span>


                                    <div style={
                                        {
                                            height: 16,
                                            flex: "0 0 auto"
                                        }
                                    }/>


                                    <div className="chat-date-divider" role="separator" aria-label="April 30, 2023">
                                        <span className="content-3spvdd">April 30, 2023</span>
                                    </div>
                                    

                                    {/* <Message avatar={"https://cdn.discordapp.com/avatars/186675009706524673/2dbe296ba70d43ac9d06fcec1f2d24ce.webp?size=160"}
                                        messageContent={"Lolll Speaking of psychoanalysis"}
                                        time={"Today at 10:20 AM"}
                                        isDetailAvail={true}
                                        username={"HighwireAct"}/> */}
                                    {/* <Message avatar={"https://cdn.discordapp.com/avatars/186675009706524673/2dbe296ba70d43ac9d06fcec1f2d24ce.webp?size=160"}
                                        messageContent={"also on my list"}
                                        time={"Today at 10:20 AM"}
                                        isDetailAvail={false}
                                        isMediaAttached={true}
                                        mediaOriginal={"https://cdn.discordapp.com/attachments/989270503925616680/1102095082729001072/43786EF2-D7C0-469A-A26F-CCF86375EC1B.jpg"}
                                        mediaImg={"https://media.discordapp.net/attachments/989270503925616680/1102095082729001072/43786EF2-D7C0-469A-A26F-CCF86375EC1B.jpg?width=526&height=700"}
                                        username={"HighwireAct"}/>
                                    <Message avatar={"https://cdn.discordapp.com/avatars/186675009706524673/2dbe296ba70d43ac9d06fcec1f2d24ce.webp?size=160"}
                                        messageContent={"also on my list"}
                                        time={"Today at 10:20 AM"}
                                        isDetailAvail={false}
                                        isMediaAttached={true}
                                        mediaOriginal={"https://cdn.discordapp.com/attachments/989270503925616680/1102095082729001072/43786EF2-D7C0-469A-A26F-CCF86375EC1B.jpg"}
                                        mediaImg={"https://media.discordapp.net/attachments/989270503925616680/1102089474046951544/8D6CAD63-D0B7-4487-A104-FF6B80DFA017.jpg?width=934&height=700"}
                                        username={"HighwireAct"}/> */}
                                    <NewDivider/>

                                    <Message 
                                        isMediaAttached={false}
                                        mediaOriginal=""
                                        mediaImg=""
                                        hasReaction={false}
                                        hasReplay={true}
                                        replayTo={"@HighwireAct"}
                                        replayAvatar={"https://cdn.discordapp.com/avatars/186675009706524673/2dbe296ba70d43ac9d06fcec1f2d24ce.webp?size=32"}
                                        replayMsg={"Also on my list"}
                                        username={"Dr3am L0g1c"}
                                        messageContent={"Unbehagen intensifies"}
                                        isDetailAvail={true}
                                        time={"Today at 10:23 AM"}
                                        avatar={avatar}/>
{/* 
                                    <Message avatar={avatar}
                                        messageContent={"That book is crucial and some of its insights are still considered radical. Nowhere near a hardcore Freudian, lean more towards Jung in the generalities. Nevertheless the idea of our uneasiness in civilization as it exist being due to the pathology of normal or normalizing behaviors is fairly spot on. Compulsion and coercion for everyone!"}
                                        time={"Today at 10:20 AM"}
                                        isDetailAvail={false}
                                        username={"HighwireAct"}
                                        hasReaction={true}/> */}

{/* 
                                    <Message hasReplay={true}
                                        replayAvatar={"https://cdn.discordapp.com/avatars/365600754205065226/b86d7db764fa4747162e11be7402f9ab.webp?size=32"}
                                        replayTo={"@SvenskKung"}
                                        replayMsg={'Anyone else kind of find this to be amusing lol'}
                                        replayHasLink={true}
                                        isDetailAvail={true}
                                        replayMsgLink={'https://twitter.com/svpino/status/1650938223412011009?s=46&amp;t=UIBjLvfbJL0jdH-wMbY91Q'}
                                        avatar={avatar}
                                        messageContent={"I’d be interested to see how he supports the claim of safety. Like I don’t imagine machine learning research as this entirely unregulated mess devoid of ethics and risk assessment. Sametime it’s unpredictable and unprecedented science"}
                                        time={"Today at 10:31 AM"}
                                        username={"Dr3am L0g1c"}/> */}
                                    {/* <Message avatar={avatar}
                                        messageContent={"None"}
                                        isDetailAvail={true}
                                        time={"Today at 1:49 PM"}
                                        username={"yoichi222"}/> */}
{/* 
                                    <Message avatar={avatar}
                                        messageContent={"When the channel went dead for a few hours I kinda sensed that …"}
                                        time={"Today at 2:13 PM"}
                                        isDetailAvail={true}
                                        username={"Dr3am L0g1c"}/> */}
                                    <div className="scrollerSpacer-3AqkT9"/>
                                </ol>
                            </div>

                        </div>
                        {/* <MessageErrorBar/> */}
                    </div>
                    <FormTextArea/>
                    <div className="layerContainer-2lfOPe"/>
                </main>
                {/* <ChannelMembersContainer/> */}
            </div>
        </div>

    )
}
