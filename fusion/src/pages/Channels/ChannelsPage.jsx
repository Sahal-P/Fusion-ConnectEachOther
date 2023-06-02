import SideIcons from "../../components/NavBar/SideIcons"
import { Outlet } from "react-router-dom"
import { Channels } from "../../components/channels/Channels"
import { ChannelsBase } from "../../components/channels/ChannelsBase"

export const ChannelsPage = () => {
  return (
    <>
      <SideIcons/>
      
      <div className='channels-base'>
      <ChannelsBase/>
      <Outlet/>
      </div>
      
    </>
  )
}
