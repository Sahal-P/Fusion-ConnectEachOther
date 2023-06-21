import CreateChannel from "./CreateChannel";
import CreateCommunity from "./CreateCommunity";
import FileUploadCreateThreadLayer from "./FileUploadCreateThreadLayer";
import ImojiStickerLayer from "./ImojiStickerLayer";
import "./LayerComponent.css";
import { LayerPopOutChannelOption } from "./LayerPopOutChannelOption";
import UserProfileViewLayer from "./UserProfileViewLayer";

export const LayerComponent = () => {
  return (
    <div className="layer-componet-base-container">
      {/* <LayerPopOutChannelOption/> */}
      <CreateChannel />
      <CreateCommunity />
      {/* <ImojiStickerLayer/> */}
      {/* <FileUploadCreateThreadLayer/> */}
      {/* <UserProfileViewLayer/> */}
    </div>
  );
};
