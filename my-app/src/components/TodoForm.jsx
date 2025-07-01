// Campo de Input e botao de adicionar
import { useState } from 'react';
import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TodoForm() {
  const [input, setInput] = useState('');
  const {adicionarTarefa} = useContext(TodoContext);

const adicionar = (e) => {
  e.preventDefault();
  if (input.trim() === '') return;
  adicionarTarefa(input);
  setInput('');
};


  return (
    <div className=' d-flex gap-2 mb-3'>
      <form className='form-control'>
        <label htmlFor="novaTarefa">Nova tarefa: </label>
        <input
          type="text"
          placeholder="Digite sua tarefa"
          id="novaTarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      <button className='btn btn-primary m-1' onClick={adicionar}>
        Adicionar
      </button>
      </form>
    </div>
  );
}

export default TodoForm;