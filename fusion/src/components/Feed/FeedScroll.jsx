import { FeedImageCard } from "./FeedImageCard";
import Explore7 from "../images/explore/Explore7.jpg";
import Explore6 from "../images/explore/Explore6.jpeg";
import Explore5 from "../images/explore/Explore5.png";
import Explore4 from "../images/explore/Explore4.jpg";
import card_avatar4 from "../images/card_avatars/card_avatar4.webp";

export const FeedScroll = () => {
  return (
    <div className="feed_window">
      <div className="feed_scroller_base">
        <div className="feed_base">
          <div className="feed_layout">
            <FeedImageCard image={Explore7} avatar={card_avatar4} />
            <FeedImageCard image={Explore6} avatar={card_avatar4} />
            <FeedImageCard image={Explore5} avatar={card_avatar4} />
            <FeedImageCard image={Explore4} avatar={card_avatar4} />
          </div>
        </div>
      </div>
    </div>
  );
};
