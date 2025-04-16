import "./App.css";
import Header from "./components/Header";
import LikeCardList from "./components/LikeCardList";
import List from "./components/List";
import SkeletonList from "./components/SkeletonList";
import { fetchAllRestaurants } from "./api/restaurantAPI";
import { sortPlacesByDistance } from "./utils/loc";

import { useEffect, useState } from "react";

function App() {
  //맛집 데이터를 담을 상태 변수 선언
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //에러처리 상태 변수 선언
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // 브라우저에서 현재 사용자 위치 요청
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // 위도, 경도 받아오기
        const { latitude: userLat, longitude: userLon } = position.coords;

        // 사용자의 현재 위치를 기준으로 맛집 목록을 거리순으로 정렬
        const sorted = sortPlacesByDistance(
          allRestaurants.places,
          userLat,
          userLon
        );

        // 정렬된 데이터를 상태에 저장(장소는 거리순으로 변경됨)
        setAllRestaurants({ ...allRestaurants, places: sorted });
      },
      (error) => {
        console.error("위치 정보를 가져오는 데 실패했습니다.", error);
      }
    );
    //거리 순으로 상태가 변경될 때마다 렌더링
  }, [allRestaurants]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchAllRestaurants();
        setAllRestaurants(data);
      } catch (err) {
        console.error("요청 실패:", err);

        if (err instanceof Response) {
          if (err.status === 404) {
            setErrorMessage("요청하신 데이터를 찾을 수 없습니다. (404)");
          } else {
            setErrorMessage(`문제가 발생했습니다. (상태 코드: ${err.status})`);
          }
        } else {
          setErrorMessage("서버와 연결할 수 없습니다. 주소를 확인해주세요.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const data = async () => {
      try {
        const all = await fetchAllRestaurants();
        // console.log("백엔드 응답 : ", all);
        setAllRestaurants(all);
      } catch (err) {
        console.error("에러 발생!", err);
      } finally {
        setIsLoading(false);
      }
    };
    data();
  }, []);

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
  // console.log("state :", allRestaurants);

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
          {errorMessage && (
            <div className="text-red-400 text-center my-4 font-medium">
              {errorMessage}
            </div>
          )}

          {isLoading ? (
            <SkeletonList />
          ) : (
            <List allRestaurants={allRestaurants} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
