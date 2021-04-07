import React, { FormEventHandler } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from './store';
import { addItem, delItem } from './store/ducks/todo/actions';

function App() {

  const dispatch = useDispatch();
  const todo = useSelector((state: ApplicationState) => state.todo);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    dispatch(addItem(e.target.item.value))
  }

  const handleRemove = (e:any) => {
    e.preventDefault();
    dispatch(delItem(e.target.item.value))
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <input name="item" type="text"/>
        <button type="submit">Adicionar</button>
      </form>
      <button onClick={handleRemove}>remover</button>

      <ul>
        {
          todo.items.map((name) => <li>{name}</li>)
        }
      </ul>

    </div>
  );
}

export default App;
