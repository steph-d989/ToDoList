import React from "react";
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';

const List = ({props, setItems}) => {

  const renderItems = (items) =>
  
    props.map((item, i) => (
      <Item
        key={uuidv4()}
        dataItem={item}
        deleteCard={() => deleteItem(i)}
      />
    ));

    const deleteItem = (pos) =>{
      const remainingItems = props.filter((item,index)=>index !== pos);
      setItems(remainingItems);
    }

    return <ul>
      {renderItems()}
    </ul>
};

export default List;
