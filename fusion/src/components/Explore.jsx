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
      <div className=""></div>
      <div className="overflow-hidden overflow-y-scroll p-8 relative box-border min-h-0 flex-1 scroller_base">
        <div className="max-w-[1608px] mx-auto">
          <div className="relative text-center min-h-[200px]">
            <img className="inherit rounded-[8px] w-[150vh] max-h-[500px]" src={Explore9} alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full min-w-[160px] max-w-[720px] mx-24">
                <h1 class="text-white text-[24px] leading-[30px] text-center">Find your community on Fusion</h1>
                <div class="mt-[8px] text-white text-[16px] leading-[20px]">
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
                <div className="mt-[20px] flex flex-col items-center min-w-[200px]">
                  <div className="bg-white w-[80%] rounded-md h-10 p-0.5rem shadow-md flex items-center explore-input-wrapper px-[15px]">
                    <input
                      className="bg-transparent border-0 h-full text-lg w-full ml-1"
                      type="text"
                      placeholder="Search"
                      value={input}
                      onChange={onSearch}
                    />
                    <SearchIcon id="explore-search-icon" />
                  </div>
                  <div className="w-85 bg-white flex flex-col shadow-md rounded-md mt-4 max-h-200 overflow-y-scroll text-left">
                    {results.map((result, id) => {
                      return (
                        <div className="text-black p-[5px] hover:bg-[#efefef]" key={id}>
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
        <div className="text-[20px] font-semibold text-white p-[10px]">Featured communities</div>
        <div className="h-max">
          <div className="grid gap-[16px] grid-cols-featured_grid">
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
