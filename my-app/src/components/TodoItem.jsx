//Todo Item cada tarefa com opçao de concluir e remover
import React from 'react';
const TodoItem = React.memo(function TodoItem({ id, texto, tarefaConcluida, marcarConcluida, removerTarefa }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span style={{ textDecoration: tarefaConcluida ? 'line-through' : 'none' }}>
        {texto}
      </span>
      {/* Checkbox para marcar tarefa como concluida */}
      <label htmlFor="concluido" className="form-check-label">Concluir ➡</label>
      <input className='form-check-input' type="checkbox" name="concluido" onChange={() => marcarConcluida(id)} checked={tarefaConcluida}/>

      <button className="btn btn-sm btn-danger" onClick={() => removerTarefa(id)}>Remover</button>
    </li>
  );
});

export default TodoItem;
