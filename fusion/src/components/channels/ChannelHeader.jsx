import {GreenTickIcon} from "../GreenTickIcon"

export const ChannelHeader = (props) => {
    
    return (
        <div className="channel-header-content">
            <GreenTickIcon/>
            <div className="channel-header-content-name" data-text-variant="text-md/semibold">
                {props.name}
            </div>
            <div className="channel-header-content-button" aria-expanded="false" aria-label="Midjourney, server actions" role="button"
                tabIndex={0}/>
            <div className="channel-header-content-children">
                <div className="">
                    <svg width={18}
                        height={18}
                        className="channel-header-dropdown-button">
                        <g fill="none" fillRule="evenodd">
                            <path d="M0 0h18v18H0"/>
                            <path stroke="currentColor" d="M4.5 4.5l9 9" strokeLinecap="round"/>
                            <path stroke="currentColor" d="M13.5 4.5l-9 9" strokeLinecap="round"/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}
