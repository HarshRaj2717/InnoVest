import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
const Roompage = () => {
    const {roomid}=useParams();
    const mymeeting=async(element)=>{
        const appId=330352337;
        const serverSecret="08a79252b5da8661460608806dfc7b53";
        const kittoken=ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,serverSecret,roomid,Date.now().toString(),"Mridul");
        const zp=ZegoUIKitPrebuilt.create(kittoken);
        zp.joinRoom({
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.VideoConference
            }
        })
    }
  return (
    <div>
      <div ref={mymeeting}/>
    </div>
  )
}

export default Roompage
