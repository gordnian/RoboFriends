import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const list = robots.map((user) => {
    return (
      <Card key={user.id} id={user.id} name={user.name} email={user.email} />
    );
  });
  return <div>{list}</div>;
};

export default CardList;
