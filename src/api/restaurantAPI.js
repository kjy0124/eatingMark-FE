const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchAllRestaurants = async () => {
  const response = await fetch(`${BASE_URL}/places`, { method: "GET" });
  // 백엔드 서버의 /places 경로로 GET 요청 보냄
  if (!response.ok) {
    throw response;
  }
  const result = await response.json(); //서버가 응답한 데이터를 JSON 형식으로 파싱
  // console.log("result", result);
  return result;
};

export const postUserLike = async (restaurant) => {
  const payload = { place: restaurant };
  console.log(payload, BASE_URL);
  const response = await fetch(`${BASE_URL}/users/places`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    const errText = await response.text();
    console.error("서버 응답 실패 내용: ", errText);
    throw new Error("찜 저장 실패");
  }
};

export const getUserLikes = async () => {
  const response = await fetch(`${BASE_URL}/users/places`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("찜 목록 불러오기 실패!");
  }

  const result = await response.json();
  return result;
};

export const deleteUserLike = async (id) => {
  const response = await fetch(`${BASE_URL}/users/places/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("찜 해제 실패");
  }

  // return await response.json();
};
