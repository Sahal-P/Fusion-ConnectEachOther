import { useEffect } from 'react';
import './SideBarChannel.css'
import TagIcon from '@mui/icons-material/Tag';
function SideBarChannel(props) {
    return (
        <div className='sidebarchannel'>
            <h4>
                <span className='sidebar_channel_hash'><TagIcon/></span>{props.name}
            </h4>
        </div>
    )
}

export default SideBarChannel
