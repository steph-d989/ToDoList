import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import data from './data'
import List from './List'


const Main = () => {
  const [items, setItems] = useState(data);

  const [values, setValues] = useState({
    title: '',
    desc: '',
    isDone: ''
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const clearItems = () => setItems([]);

  const form = useRef();


  const resetItems = () => setItems(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const isDone = false;

    const newItem = { title, desc, isDone }

    setItems([newItem, ...items])
    form.current.reset();
    setValues({
      ...values,
      title: '',
      desc: ''
    })
  }

  return (
    <section>
      <button onClick={clearItems}>Borrar todo</button>
      <button onClick={resetItems}>Recargar</button>

      <form ref={form} onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="title">Tarea</label>
          <input type="text" name="title" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="desc">Descripción</label>
          <input type="text" name="desc" onChange={handleChange} />
        </div>

        {values.title && values.desc ?
          <button type="submit">Crear tarea</button> :
          <i>Rellena todos los campos</i>
        }

      </form>
      <List props={items} setItems={(list) => setItems(list)} />
    </section>
  )
};

export default Main;
