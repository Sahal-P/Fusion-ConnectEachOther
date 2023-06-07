import InviteDefaultScreen from "./InviteDefaultScreen"
import VideoScreenContainer from "./VideoScreenContainer"
import VideoControls from "./VideoControls"
import { useEffect, createContext, useRef, useState } from "react"
import io from 'socket.io-client';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const VideoContext = createContext();


const VideoChat = () => {
  const { id } = useParams();
  const servers = {
    iceServers:[
        {
            urls:['stun:stun1.l.google.com:19302', 'stun:stun2.1.google.com:19302']
        }
    ]
}

  const [count, setCount] = useState(0)
  const [User, setUser] = useState(useSelector((state)=> state.user.user))
  const [RemoteUser, setRemoteUser] = useState(null)
  const candidates = useRef([])
  
  const localVideoRef = useRef()
  const remoteVideoRef = useRef()
  const pc = useRef(new RTCPeerConnection(null))
  const [socket, setSocket] = useState(null)


  useEffect(()=>{

    let url = `wss://fusion.com/ws/socket/${id}/`
    const _socket = new WebSocket(url)
    _socket.onmessage = function(e){
      let data = JSON.parse(e.data)
      if(data.sender==User.username){
        return
      }
      if(data.type === 'offer' ){
        setRemoteDiscription(data.message)
        console.log('data sender :' ,data.sender);

        setRemoteUser(data.sender)
      }
      if(data.type === 'answer'){
        setRemoteDiscription(data.message)
        console.log('data sender :' ,data.sender);
        setRemoteUser(data.sender)
      
      }
      if(data.type === 'icecandidates'){
        console.log(data.message);
        // candidates.current = [ ...candidates.current, data.message]
        addCandidate(data.message)
      }
    }
    
    const _pc = new RTCPeerConnection(servers)

    const constraints = {
      audio: false,
      video: {
        width:{min:240, ideal:1920, max:1920},
        height:{min:280, ideal:1080, max:1080},
      }
    }
    navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
      localVideoRef.current.srcObject = stream

      stream.getTracks().forEach(track => {
        _pc.addTrack(track, stream)
      })
    })
    .catch(e => {
      console.log("getUserMedia error.....");
    })

    _pc.onicecandidate = (e) => {
      if (e.candidate){
        const message = {
          type: 'icecandidates',
          sender: `${User.username}`,
          message: e.candidate
        };
        if (socket) { // Add a null check for the socket variable
          socket.send(JSON.stringify(message));
        }else {
          _socket.send(JSON.stringify(message))
        }
      }
      
    }
    
    _pc.oniceconnectionstatechange = (e) => {
      // this event here helps check the connection state of our peer connection 
      //possible values : connected , failed, disconnected, closed
    }

    _pc.ontrack = (e) => {
      console.log(e,'on track----------');
      remoteVideoRef.current.srcObject = e.streams[0]
    }

    pc.current = _pc
    // socket = _socket
    setSocket(_socket)
    // return () => {
    //   socket.disconnect();
    // };
    
  },[])

  const createOffer = () => {
    pc.current.createOffer({
      offerToReceiveAudio: 1,
      offerToReceiveVideo: 1,
    }).then( SDP => {
      const message = {
        type: 'offer',
        sender: `${User.username}`,
        message: SDP
      };
      socket.send(JSON.stringify(message))
      pc.current.setLocalDescription(SDP)
    }).catch( e => console.log(e, 'error'))
  }

  const createAnswer = () => {
    pc.current.createAnswer({
      offerToReceiveAudio: 1,
      offerToReceiveVideo: 1,
    }).then( SDP => {
      const message = {
        type: 'answer',
        sender: `${User.username}`,
        message: SDP
      };
      socket.send(JSON.stringify(message))
      pc.current.setLocalDescription(SDP)
    }).catch( e => console.log(e, 'error'))
  }

  const setRemoteDiscription = (sdp) => {
    pc.current.setRemoteDescription(new RTCSessionDescription(sdp))
  }

  const addCandidate = (candidate) => {
      pc.current.addIceCandidate(new RTCIceCandidate(candidate))
  }

  return (
    <VideoContext.Provider value={{User, RemoteUser}}>
    <div className="chat-2ZfjoI">
  <div className="wrapper-1gVUIN noChat-2UYgeE video-3n15R6">
    <div className="callContainer-HtHELf theme-dark">
      <div className="root-22AK9z">
        <div
          className="flex-2S1XBF flex-3BkGQD horizontal-112GEH horizontal-1Piu5- flex-3BkGQD directionRow-2Iu2A9 justifyCenter-rrurWZ alignCenter-14kD11 noWrap-hBpHBz videoGridWrapper-2WpXPj"
          style={{ flex: "1 1 auto" }}
        >
          <div
            className="scroller-2MALzE videoGrid-1tZm-F thin-RnSY0a scrollerBase-1Pkza4 fade-27X6bG"
            dir="ltr"
            style={{ overflow: "hidden scroll", paddingRight: 0 }}
          >
            <div
              role="list"
              className="listItems-6eZzQ1"
              style={{ inset: "171px 0px 163px 8px" }}
            >
              <div className="row-jreWvj">
                <VideoScreenContainer refrence={localVideoRef} user={'user'}/>
                <VideoScreenContainer refrence={remoteVideoRef} user={'remote'}/>
                {/* <VideoScreenContainer/> */}
                {/* <InviteDefaultScreen/> */}
                
              </div>
              
            </div>
            <div className="listHeight-3LiElf" style={{ height: 655 }} />
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
        <VideoControls createOffer={createOffer} createAnswer={createAnswer}/>
        <div>
          <button
            aria-label="Show Chat"
            type="button"
            className="button-ejjZWC lookBlank-FgPMy6 colorBrand-2M3O3N grow-2T4nbg chatButton-10jXXp"
          >
            <div className="contents-3NembX lineHeightReset-1WxXXk">
              <div className="chatIcon-R5MUNn controlIcon-10O-4h">
                <svg width={24} height={24} viewBox="0 0 24 24">
                  <defs>
                    <mask id="ea416fc8-ab08-4353-8d58-19a3b19c5328">
                      <rect fill="white" width="100%" height="100%" />
                    </mask>
                  </defs>
                  <path
                    fill="currentColor"
                    d="M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                    mask="url(#ea416fc8-ab08-4353-8d58-19a3b19c5328)"
                  />
                </svg>
              </div>
            </div>
          </button>
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
            padding: 0
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
              top: 0
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
                inset: "-18px -17px -17px -18px"
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
                  height: "100%"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 1184,
                    height: 708
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
                  height: "100%"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "200%",
                    height: "200%"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="channelChatWrapper-35N3nR" />
  </div>
  <div className="layerContainer-2lfOPe">
    <div className="container-3q3CS_" aria-hidden="true" />
  </div>
  <div className="layerContainer-2lfOPe">
    <div className="chatToasts-3oZ62v theme-dark" />
  </div>
  <div className="content-1jQy2l noChat-sb1z07" />
</div>
 </VideoContext.Provider>

  )
}

export default VideoChat
