// Campo de Input e botao de adicionar
import { useState } from 'react';
import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TodoForm() {
  const [input, setInput] = useState('');
  const { adicionarTarefa } = useContext(TodoContext);

  const adicionar = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    adicionarTarefa(input);
    setInput('');
  };


  return (
    <form className="input-group mb-3">
      <label className='input-group-text' htmlFor="novaTarefa">Nova tarefa: </label>
      <input className='form-control'
        type="text"
        placeholder="Digite sua tarefa"
        id="novaTarefa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className='btn btn-primary' onClick={adicionar}>
        Adicionar
      </button>
    </form>
  );
}

export default TodoForm;