import "./App.css"
import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import CardList from "./components/cardList";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <CardList />
      </main>
      <Footer />
    </>
  );
};

export default App;
