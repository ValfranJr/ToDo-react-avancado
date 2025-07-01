import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { useContext } from 'react';
import TodoContext from './context/TodoContext';
import TodoFilters from './components/TodoFilters';

function ListaTarefas() {
  const { tarefas, filtroTexto, filtroStatus, marcarConcluida, removerTarefa } = useContext(TodoContext);
  const tarefasFiltradas = tarefas.filter((tarefa) => {
  const textoCondiz = tarefa.texto.toLowerCase().includes(filtroTexto.toLowerCase());

  if (filtroStatus === 'todas') return textoCondiz;
  if (filtroStatus === 'concluidas') return textoCondiz && tarefa.concluida;
  if (filtroStatus === 'pendentes') return textoCondiz && !tarefa.concluida;
  return true;
});

return (
  <ul className="list-group">
    {tarefasFiltradas.map((tarefa) => (
      <TodoItem
          key={tarefa.id}
          id={tarefa.id}
          texto={tarefa.texto}
          tarefaConcluida={tarefa.concluida}
          marcarConcluida={marcarConcluida}
          removerTarefa={removerTarefa}
        />
      ))}
    </ul>
  );
}

function App() {
  return (
    <TodoProvider>
      <div className="container my-4">
        <h1 className="text-center mb-4">Minha Lista de Tarefas</h1>
        <TodoForm />
        <TodoFilters />
        <ListaTarefas />
      </div>
    </TodoProvider>
  );
}

export default App;
