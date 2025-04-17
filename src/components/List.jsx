import RestaurantCard from "./RestaurantCard";

const List = ({ allRestaurants, likedRestaurants, onToggleLike }) => {
  const allRestaurant = allRestaurants;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {allRestaurant.places?.map((item) => (
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

export default List;
