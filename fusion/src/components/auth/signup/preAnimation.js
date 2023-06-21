// JQUERY
import { $ } from "react-jquery-plugin";

function preAnim() {
  // JQUERY
  $(function () {
    var images = [
      "https://wallpapersite.com/images/pages/pic_w/1063.jpg",
      "http://www.hdwallpaper.nu/wp-content/uploads/2017/04/PLAYERUNKNOWNS-BATTLEGROUNDS-12937710.jpg",
      "https://www.hdwallpapers.in/walls/overwatch_4k-HD.jpg",
      "https://images.alphacoders.com/186/186993.jpg",
      "https://images4.alphacoders.com/602/thumb-1920-602788.png",
    ];

    setTimeout(function () {
      $(".logoContainer").animate({ scale: 1 }, 700);
      setTimeout(function () {
        $(".logoContainer .loginlogo").addClass("loadIn");
        setTimeout(function () {
          $(".logoContainer .text").addClass("loadIn");
          setTimeout(function () {
            $(".acceptContainer").animate({ height: "801.5px" });
            setTimeout(function () {
              $(".acceptContainer").addClass("loadIn");
              setTimeout(function () {
                $(".formDiv, form h1").addClass("loadIn");
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 10);
  });
}

export default preAnim;
