import React from "react";


const Item = ({
  dataItem: { title, desc, isDone },
  deleteCard
 }) => {
  return <article>
    <h3>{title}</h3>
    <p>{desc}</p>
    <p>{isDone}</p>
    <button onClick={deleteCard}>Borrar</button>
  </article>;
};

export default Item;
