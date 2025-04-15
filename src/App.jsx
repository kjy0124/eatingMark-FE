import "./App.css";
import Header from "./components/Header";
import LikeCardList from "./components/LikeCardList";
import List from "./components/List";
// import RestaurantCard from "./components/RestaurantCard";
import { fetchAllRestaurants } from "./api/restaurantAPI";
import { useEffect, useState } from "react";

function App() {
  //맛집 데이터를 담을 상태 변수 선언
  const [allRestaurants, setAllRestaurants] = useState([]);

  //컴포넌트가 처음 화면에 나타났을 때 딱 한 번만 실행
  useEffect(() => {
    const data = async () => {
      try {
        //아까 반환한 JSON 형식을 서버에 요청을 보내 데이터를 받음
        const all = await fetchAllRestaurants();
        //데이터를 받고 상태 변경 적용
        setAllRestaurants(all);
        // console.log("all :", all);
      } catch (error) {
        console.log(error);
      }
    };
    data(); //비동기 함수를 실행
  }, []);
  // console.log(allRestaurants);

  return (
    <div className="min-h-screen bg-[#121212] text-gray-200">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-8 bg-[#1e1e1e] p-8 rounded-xl border-[#333] shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-center text-white">
            ❤️ 찜한 맛집
          </h3>
          <LikeCardList />
        </section>
        <section className="bg-[#1e1e1e] p-8 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4 text-center text-white">
            📍전체 맛집 목록
          </h2>
          <List allRestaurants={allRestaurants} />
        </section>
      </main>
    </div>
  );
}

export default App;
