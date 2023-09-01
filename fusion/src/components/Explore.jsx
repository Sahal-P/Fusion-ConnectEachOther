import "./Explore.css";
import Explore1 from "./images/explore/Explore1.png";
import Explore2 from "./images/explore/Explore2.png";
import Explore3 from "./images/explore/Explore3.png";
import Explore4 from "./images/explore/Explore4.jpg";
import Explore5 from "./images/explore/Explore5.png";
import Explore6 from "./images/explore/Explore6.jpeg";
import Explore7 from "./images/explore/Explore7.jpg";
import Explore8 from "./images/explore/Explore8.jpg";
import Explore9 from "./images/explore/Explore9.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import card_background1 from "./images/card_background/card_background1.jpg";
import card_background2 from "./images/card_background/card_background2.jpg";
import card_background3 from "./images/card_background/card_background3.jpg";
import card_background4 from "./images/card_background/card_background4.jpg";
import card_background5 from "./images/card_background/card_background5.jpg";
import card_avatar1 from "./images/card_avatars/card_avatar1.webp";
import card_avatar2 from "./images/card_avatars/card_avatar2.webp";
import card_avatar3 from "./images/card_avatars/card_avatar3.webp";
import card_avatar4 from "./images/card_avatars/card_avatar4.webp";
import card_avatar5 from "./images/card_avatars/card_avatar5.webp";
import FeaturedCommunitiesCard from "./FeaturedCommunitiesCard";
import axios from "axios";
import { error } from "jquery";

const Explore = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const onSearch = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    if (e.target.value === "") {
      setResults([]);
      return;
    }
    fetchData(e.target.value);
  };
  const fetchData = async (value) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/search?prefix=${value}`
      );
      if (res.status === 204) {
        setResults([]);
        return;
      }
      const arr = res.data.slice(0, 50);
      setResults(arr);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex flex-col flex-[0.82] h-[100vh] bg-[#26272b] text-gray-400 items-center relative">
      <div className="top_notification"></div>
      <div className="scroller_base">
        <div className="image_explore">
          <div className="image_e">
            <img className="explore_img" src={Explore9} alt="" />
            <div className="explore_search_box">
              <div className="search_field">
                <h1 class="explore_text1">Find your community on Fusion</h1>
                <div class="explore_text2">
                  From gaming, to music, to learning, there's a place for you.
                </div>
                {/* <div className="explore_input_box">
                                    <div className="explore_search_align">
                                        <div className="explore_input_white">
                                            <div className="explore_search">
                                                <input className="explore_input" onChange={onSearch} type="text"/>
                                                <SearchIcon className="explore_input_icon"/>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                <div className="search-bar-container">
                  <div className="explore-input-wrapper">
                    <input
                      type="text"
                      placeholder="Search"
                      value={input}
                      onChange={onSearch}
                    />
                    <SearchIcon id="explore-search-icon" />
                  </div>
                  <div className="explore-search-result-list">
                    {results.map((result, id) => {
                      return (
                        <div className="explore-search-results" key={id}>
                          {result}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured_h2">Featured communities</div>
        <div className="features">
          <div className="featured_grid">
            <FeaturedCommunitiesCard
              title={"Midjourney"}
              text={
                "The official server for Midjourney, a text-to-image AI where your imagination is the only limit."
              }
              online={"1,362,999 Online"}
              members={"13,065,020 Members"}
              avatar={card_avatar1}
              bg_image={card_background1}
            />
            <FeaturedCommunitiesCard
              title={"Genshin Impact Official"}
              text={
                "Welcome to Teyvat, Traveler! This is the place to discuss with others about your favorite game: Genshin Impact!"
              }
              online={"338,816 Online"}
              members={"165,020 Members"}
              avatar={card_avatar2}
              bg_image={card_background2}
            />
            <FeaturedCommunitiesCard
              title={"OpenAI"}
              text={
                "A space for developers and enthusiasts to collaborate and share creations built with OpenAI's powerful models."
              }
              online={"320,233 Online"}
              members={"1,320,233 Members"}
              avatar={card_avatar3}
              bg_image={card_background3}
            />
            <FeaturedCommunitiesCard
              title={"VALORANT"}
              text={
                "The official VALORANT Discord server, in collaboration with Riot Games. Find the latest news and talk about the game!"
              }
              online={"284,943 Online"}
              members={"999,997 Members"}
              avatar={card_avatar4}
              bg_image={card_background4}
            />
            <FeaturedCommunitiesCard
              title={"MINECRAFT"}
              text={
                "The official Minecraft Discord. Find the latest news and talk about the game!"
              }
              online={"178,663 Online"}
              members={"565,080 Members"}
              avatar={card_avatar5}
              bg_image={card_background5}
            />
            <FeaturedCommunitiesCard
              title={"Midjourney"}
              text={
                "The official server for Midjourney, a text-to-image AI where your imagination is the only limit."
              }
              online={"1,362,999 Online"}
              members={"13,065,020 Members"}
              avatar={card_avatar1}
              bg_image={card_background1}
            />
            <FeaturedCommunitiesCard
              title={"Genshin Impact Official"}
              text={
                "Welcome to Teyvat, Traveler! This is the place to discuss with others about your favorite game: Genshin Impact!"
              }
              online={"338,816 Online"}
              members={"165,020 Members"}
              avatar={card_avatar2}
              bg_image={card_background2}
            />
            <FeaturedCommunitiesCard
              title={"OpenAI"}
              text={
                "A space for developers and enthusiasts to collaborate and share creations built with OpenAI's powerful models."
              }
              online={"320,233 Online"}
              members={"1,320,233 Members"}
              avatar={card_avatar3}
              bg_image={card_background3}
            />
            <FeaturedCommunitiesCard
              title={"VALORANT"}
              text={
                "The official VALORANT Discord server, in collaboration with Riot Games. Find the latest news and talk about the game!"
              }
              online={"284,943 Online"}
              members={"999,997 Members"}
              avatar={card_avatar4}
              bg_image={card_background4}
            />
            <FeaturedCommunitiesCard
              title={"MINECRAFT"}
              text={
                "The official Minecraft Discord. Find the latest news and talk about the game!"
              }
              online={"178,663 Online"}
              members={"565,080 Members"}
              avatar={card_avatar5}
              bg_image={card_background5}
            />
            <FeaturedCommunitiesCard
              title={"Midjourney"}
              text={
                "The official server for Midjourney, a text-to-image AI where your imagination is the only limit."
              }
              online={"1,362,999 Online"}
              members={"13,065,020 Members"}
              avatar={card_avatar1}
              bg_image={card_background1}
            />
            <FeaturedCommunitiesCard
              title={"Genshin Impact Official"}
              text={
                "Welcome to Teyvat, Traveler! This is the place to discuss with others about your favorite game: Genshin Impact!"
              }
              online={"338,816 Online"}
              members={"165,020 Members"}
              avatar={card_avatar2}
              bg_image={card_background2}
            />
            <FeaturedCommunitiesCard
              title={"OpenAI"}
              text={
                "A space for developers and enthusiasts to collaborate and share creations built with OpenAI's powerful models."
              }
              online={"320,233 Online"}
              members={"1,320,233 Members"}
              avatar={card_avatar3}
              bg_image={card_background3}
            />
            <FeaturedCommunitiesCard
              title={"VALORANT"}
              text={
                "The official VALORANT Discord server, in collaboration with Riot Games. Find the latest news and talk about the game!"
              }
              online={"284,943 Online"}
              members={"999,997 Members"}
              avatar={card_avatar4}
              bg_image={card_background4}
            />
            <FeaturedCommunitiesCard
              title={"MINECRAFT"}
              text={
                "The official Minecraft Discord. Find the latest news and talk about the game!"
              }
              online={"178,663 Online"}
              members={"565,080 Members"}
              avatar={card_avatar5}
              bg_image={card_background5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
