import axios from "axios";
// import { response } from "express";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchAllRestaurants = async () => {
  // const response = await fetch(`${BASE_URL}/places`, { method: "GET" });
  // // 백엔드 서버의 /places 경로로 GET 요청 보냄
  // if (!response.ok) {
  //   throw response;
  // }
  // const result = await response.json(); //서버가 응답한 데이터를 JSON 형식으로 파싱
  // // console.log("result", result);
  // return result;
  try {
    const response = await axios.get(`${BASE_URL}/places`);
    return response.data;
  } catch (err) {
    console.error("요청 에러:", err);
  }
};

export const postUserLike = async (restaurant) => {
  // const payload = { place: restaurant };
  // console.log(payload, BASE_URL);
  // const response = await fetch(`${BASE_URL}/users/places`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });
  // if (!response.ok) {
  //   const errText = await response.text();
  //   console.error("서버 응답 실패 내용: ", errText);
  //   throw new Error("찜 저장 실패");
  // }
  try {
    const payload = { place: restaurant };
    const response = await axios.post(`${BASE_URL}/users/places`, payload);
    return response.data;
  } catch (err) {
    console.error("찜 저장 실패!", err);
  }
};

export const getUserLikes = async () => {
  // const response = await fetch(`${BASE_URL}/users/places`, {
  //   method: "GET",
  // });
  // if (!response.ok) {
  //   throw new Error("찜 목록 불러오기 실패!");
  // }

  // const result = await response.json();
  // return result;
  try {
    const response = await axios.get(`${BASE_URL}/users/places`);
    return response.data;
  } catch (err) {
    console.error("찜 목록 불러오기 실패", err);
  }
};

export const deleteUserLike = async (id) => {
  // const response = await fetch(`${BASE_URL}/users/places/${id}`, {
  //   method: "DELETE",
  // });

  // if (!response.ok) {
  //   throw new Error("찜 해제 실패");
  // }
  try {
    const response = await axios.delete(`${BASE_URL}/users/places/${id}`);
    console.log(response.status);
    console.log(
      "Delete :",
      response.status === 200 || response.status === 204
        ? "삭제 성공"
        : "삭제 실패"
    );
  } catch (err) {
    console.error("찜 해제 실패", err);
  }
};
