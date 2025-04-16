const RestaurantCard = ({ infoRestaurants }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  // console.log("맛집 사진 : ", infoRestaurants?.image?.src);
  return (
    <div className="relative cursor-pointer transform transition duration-200 hover:scale-95 bg-[#1e1e1e] border border-[rgb(51,51,51)] rounded-2xl shadow-xl overflow-hidden">
      <img
        src={`${BASE_URL}/${infoRestaurants?.image.src}`}
        alt={infoRestaurants?.image?.alt || "맛집 이미지"}
        className="object-cover w-full h-[200px]"
        width={300}
        height={300}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 text-white truncate">
          {infoRestaurants?.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2">
          {infoRestaurants?.description}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
