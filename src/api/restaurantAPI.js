const BASE_URL = import.meta.env.VITE_BASE_URL;
export const fetchAllRestaurants = async () => {
  const response = await fetch(`${BASE_URL}/places`, { method: "GET" });
  // 백엔드 서버의 /places 경로로 GET 요청 보냄
  const result = await response.json(); //서버가 응답한 데이터를 JSON 형식으로 파싱
  console.log("result", result);
  return result;
};
