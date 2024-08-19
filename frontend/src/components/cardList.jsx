import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./card";

const CardList = () => {
  const API_URL = "http://localhost:8000/api/v1";
  const { search } = useSelector(state => state.card );
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await fetch(`${API_URL}/cards?search=${search}`);
      if (!response.ok) {
        const result = await response.json();
        const errorMessage = result.message || "Something went wrong!";
        throw new Error(errorMessage);
      }
      const results = await response.json();
      const data = results?.data;
      if (data) {
        setCards(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, [search]);

  return (
    <div className="flex w-full justify-center items-center">
      <div className="grid grid-cols-2 place-content-center gap-24 py-20">
        {cards &&
          cards.length > 0 &&
          cards.map(({ title, description, _id }) => (
            <Card title={title} key={_id} description={description} />
          ))}
      </div>
    </div>
  );
};

export default CardList;
