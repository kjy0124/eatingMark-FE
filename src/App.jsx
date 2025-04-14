// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LikeCardList from "./components/LikeCardList";
import List from "./components/List";
import RestaurantCard from "./components/RestaurantCard";

function App() {
  return (
    <>
      <Header />
      <LikeCardList />
      <List />
    </>
  );
}

export default App;
