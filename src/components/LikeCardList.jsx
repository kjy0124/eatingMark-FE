import RestaurantCard from "./RestaurantCard";

const LikeCardList = ({ likedRestaurants, onToggleLike }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* <h3>찜한 맛집</h3> */}
      {likedRestaurants.map((item) => (
        <RestaurantCard
          key={item.id}
          infoRestaurants={item}
          likedList={likedRestaurants}
          onToggleLike={onToggleLike}
        />
      ))}
    </div>
  );
};

export default LikeCardList;
