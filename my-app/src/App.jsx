import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "./atoms/todoListAtom";
import { tarefasFiltradasState } from "./selectors/filteredTodos";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import TodoFilters from "./components/TodoFilters";
import "./App.css";


function ListaTarefas() {
  const tarefasFiltradas = useRecoilValue(tarefasFiltradasState);
  const setTarefas = useSetRecoilState(todoListState);

  const marcarConcluida = (id) => {
    setTarefas((tarefas) =>
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const removerTarefa = (id) => {
    setTarefas((tarefas) => tarefas.filter((tarefa) => tarefa.id !== id));
  };



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
    <div>
      <div className="container py-4">
        <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>
          <h1 className="text-center mb-4">Minha Lista de Tarefas</h1>
          <TodoForm />
          <TodoFilters />
          <ListaTarefas />
        </div>
      </div>
    </div>
  );
}

export default App;