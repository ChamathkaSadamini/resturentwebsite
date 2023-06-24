import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
  return (
   <div>
    <Navbar />
    <Hero></Hero>
    <HeadlineCards></HeadlineCards>
    <Food></Food>
    <Category></Category>
   </div>
  );
}

export default App;
