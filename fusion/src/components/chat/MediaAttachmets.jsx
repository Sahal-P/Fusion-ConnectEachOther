
export const MediaAttachmets = (props) => {
  return (
    <div className="mediaAttachmentsContainer-1WGRWy">
                        <div className="oneByOneGrid-3Cl27N oneByOneGridSingle-2ss-Zx">
                            <div className="messageAttachment-CZp8Iv messageAttachmentNoJustify-lIzP9c messageAttachmentMediaMosaic-2ic1yt hideOverflow-bsO1Md">
                                <div className="imageContent-3Av-9c embedWrapper-1MtIDg attachmentContentContainer-3WAhvQ attachmentContentItem-UKeiCx">
                                    <div className="imageContainer-10XenG">
                                        <div className="imageWrapper-oMkQl4 imageZoom-3yLCXY clickable-LksVCf lazyImgContainer-3k3gRy"
                                            style={
                                                {
                                                    display: "block",
                                                    maxHeight: "inherit",
                                                    margin: "auto",
                                                    width: 263,
                                                    height: "100%"
                                                }
                                        }>
                                            <a tabIndex={-1}
                                                aria-hidden="true"
                                                className="originalLink-Azwuo9"
                                                href={props.mediaOriginal}
                                                data-role="img"/>
                                            <div className="clickableWrapper-2WTAkL"
                                                tabIndex={0}
                                                aria-label="Image"
                                                aria-describedby="uid_4"
                                                role="button">
                                                <img className="lazyImg-ewiNCh" alt="Image" src={props.mediaImg}
                                                    style={
                                                        {
                                                            display: "block",
                                                            objectFit: "cover",
                                                            minWidth: "100%",
                                                            minHeight: "100%",
                                                            maxWidth: "100%"
                                                        }
                                                    }/>
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
  )
}
