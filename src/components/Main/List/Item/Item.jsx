import React, { useState } from "react";

const Item = ({
  dataItem: { title, desc, isDone },
  deleteCard
 }) => {

  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return <article>
    <h3>{title}</h3>
    <p>{desc}</p>
    <input type="checkbox" id="isDone" name="isDone" value="false" checked={isChecked} onChange={handleOnChange} />Hecho?
    <button onClick={deleteCard}>Borrar</button>
  </article>;
};

export default Item;
