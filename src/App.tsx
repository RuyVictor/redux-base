import React, { FormEventHandler } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from './store';
import { addItem, delItem, updateItem } from './store/ducks/todo/actions';

function App() {

  const dispatch = useDispatch();
  const todo = useSelector((state: ApplicationState) => state.todo);
  const [item, setItem] = React.useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    dispatch(addItem(item))
  }

  const handleRemove = (e:any) => {
    e.preventDefault();
    dispatch(delItem(item))
  }

  const handleUpdate = (e:any) => {
    e.preventDefault();
    dispatch(updateItem(item))
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <input onChange={e => setItem(e.target.value)} type="text"/>
        <button type="submit">Adicionar</button>
      </form>
      <button onClick={handleRemove}>Remover</button>
      <button onClick={handleUpdate}>Atualizar</button>

      <ul>
        {
          todo.items.map((name) => <li>{name}</li>)
        }
      </ul>

    </div>
  );
}

export default App;
