import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardsArray = robots.map((user) => {
    return (
      <Card key={user.id} id={user.id} name={user.name} email={user.name} />
    );
  });

  return <Fragment>{cardsArray}</Fragment>;
};

export default CardList;
