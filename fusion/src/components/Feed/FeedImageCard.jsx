export const FeedImageCard = (props) => {
  return (
    <div className="feed_image_base">
      <div className="feed_header">
        <div className="feed_avatar_base">
          <img className="feed_avatar" src={props.avatar} alt="" />
        </div>
      </div>
      <div className="feed_img">
        <img className="feed_img" src={props.image} alt="" />
      </div>
      <div className="feed_options"></div>
      <div className="feed_footer"></div>
    </div>
  );
};
