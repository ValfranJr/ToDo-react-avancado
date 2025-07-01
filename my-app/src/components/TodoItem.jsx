//Todo Item cada tarefa com opçao de concluir e remover
import React from 'react';
const TodoItem = React.memo(function TodoItem({ id, texto, tarefaConcluida, marcarConcluida, removerTarefa }) {
  return (
    <li className="d-flex justify-content-between align-items-center mb-2">
      <span style={{ textDecoration: tarefaConcluida ? 'line-through' : 'none' }}>
        {texto}
      </span>
      <input type="checkbox" name="concluido" onChange={() => marcarConcluida(id)} checked={tarefaConcluida} />
      {/* <button className="btn btn-sm btn-success" onClick={() => marcarConcluida(id)}>{tarefaConcluida ? '✔' : '❌'}</button> */}
      <button className="btn btn-sm btn-danger" onClick={() => removerTarefa(id)}>Remover</button>
    </li>
  );
});

export default TodoItem;
