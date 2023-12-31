import { useState } from "react";
import { cross, like, popCross } from "../assets/icons";
const Image = ({ data }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    console.log("Close button clicked");
    setIsPopupOpen(false);
  };

  function handleDownloadClick() {
    const downloadImgUrl = data.links.html;
    setImageUrl(downloadImgUrl);
    // Create a hidden anchor tag and trigger the download
    const link = document.createElement("a");
    link.href = downloadImgUrl;
    link.download = "unsplash-image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
      <div
        class="flex-col items-center justify-between px-6 py-4 rounded-xl hover:bg-slate-100  cursor-pointer"
        onClick={openPopup}
      >
        <img
          className="h-auto w-auto md:h-72 md:w-full object-cover rounded-lg shadow-md"
          src={data.urls.small}
          alt={data.alt_description}
        />
        <div className="flex py-4 px-4 justify-between items-center">
          <div className="flex gap-8">
            <div className="">
              <img
                className="h-10 w-10 rounded-[20px]"
                src={data.user.profile_image.large}
              />
            </div>
            <div>
              <div class="text-xl font-montserrat font-bold text-slate-700">
                {data.user.name}
              </div>
              <p class=" text-xs font-Poppins font-semibold italic text-slate-gray">
                @{data.user.instagram_username}
              </p>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <img src={like} className="w-5 h-5" />
            <span className="text-sm font-montserrat font-semibold text-slate-700 ">
              {data.likes}
            </span>
          </div>
        </div>
        {isPopupOpen && (
          <div>
            <h1 className="font-semibold font-montserrat mb-2">Related Tags</h1>
            <div className="flex gap-2">
              {data.tags.map((tag) => (
                <div
                  className="bg-slate-200 px-3 py-1 rounded-sm"
                  key={tag.title}
                >
                  {tag.title}
                </div>
              ))}
            </div>
            <button
              className="bg-slate-500 px-2 py-1 mt-3 rounded-sm text-white"
              onClick={handleDownloadClick}
            >
              Download
            </button>
          </div>
        )}
      </div>
      {isPopupOpen && (
        <div className="flex justify-end mt-[-35px] mr-2">
          <img
            src={popCross}
            onClick={closePopup}
            className="h-7 w-7 rounded-xl"
          ></img>
        </div>
      )}
    </div>
  );
};

export default Image;
