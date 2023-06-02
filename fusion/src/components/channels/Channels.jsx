import { Chat } from '../chat/Chat'
import { ChannelsBase } from './ChannelsBase'


export const Channels = () => {
  return (
    <div className='channels-base'>
      <ChannelsBase/>
      <Chat/>
    </div>
  )
}
