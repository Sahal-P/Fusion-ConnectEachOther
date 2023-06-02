// import card_background1 from './card_background1.jpg'

import { GreenTickIcon } from "./GreenTickIcon"

const FeaturedCommunitiesCard = (props) => {
    return (
        <div className="loaded_content">
            <div className="loaded_card">
                <div className="card_header">
                    <div className="card_background">
                        <img src={
                                props.bg_image
                            }
                            className="card_image"
                            alt=""/>
                    </div>
                    <div className="card_icon">
                        <svg width={"48"}
                            height={"48"}>
                            <foreignObject style={
                                    {"display": "block"}
                                }
                                x={0}
                                y={0}
                                width={48}
                                height={48}
                                overflow="visible"
                                mask="url(#svg-mask-squircle)">
                                <div className="iconMask">
                                    <svg width={40}
                                        height={40}
                                        viewBox="0 0 40 40">
                                        <foreignObject x={0}
                                            y={0}
                                            width={40}
                                            height={40}
                                            overflow="visible"
                                            mask="url(#svg-mask-squircle)">
                                            <img src={
                                                    props.avatar
                                                }
                                                alt=""
                                                className="image_avatar"/>
                                        </foreignObject>
                                    </svg>
                                </div>
                            </foreignObject>
                        </svg>
                    </div>
                </div>
                <div className="card_info">
                    <div className="card_info_title">
                        <GreenTickIcon/>

                        <h3 className="card_info_title_text">
                            {
                            props.title
                        } </h3>
                    </div>
                    <div className="card_info_text">
                        {
                        props.text
                    } </div>
                    <div className="card_member_info">
                        <div className="card_member_count">
                            <div className="dot_online"/>
                            <div className="card_memeber_text">
                                {
                                props.online
                            } </div>
                        </div>
                        <div className="card_member_count">
                            <div className="dot_members"/>
                            <div className="card_memeber_text">
                                {
                                props.members
                            } </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default FeaturedCommunitiesCard
