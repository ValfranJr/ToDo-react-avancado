import { createContext, useState } from 'react';
import { useMemo } from 'react';
// Criação do contexto
const TodoContext = createContext();

export function TodoProvider({ children }) {
const [tarefas, setTarefas] = useState([]);
const [filtroTexto, setFiltroTexto] = useState('');
const [filtroStatus, setFiltroStatus] = useState('todas'); // 'todas', 'concluidas', 'pendentes'

const tarefasFiltradas = useMemo(() => {
  return tarefas.filter((tarefa) => {
    const passaTexto = tarefa.texto.toLowerCase().includes(filtroTexto.toLowerCase());
    const passaStatus =
      filtroStatus === 'todas' ||
      (filtroStatus === 'concluidas' && tarefa.concluida) ||
      (filtroStatus === 'pendentes' && !tarefa.concluida);
    return passaTexto && passaStatus;
  });
}, [tarefas, filtroTexto, filtroStatus]);

  const adicionarTarefa = (texto) => {
    const novaTarefa = {
      id: Date.now(),
      texto,
      concluida: false,
    };
    setTarefas((prev) => [...prev, novaTarefa]);
  };

  const marcarConcluida = (id) => {
    setTarefas((prev) =>
      prev.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const removerTarefa = (id) => {
    setTarefas((prev) => prev.filter((tarefa) => tarefa.id !== id));
  };

  return (
  <TodoContext.Provider value={{
    tarefas,
    tarefasFiltradas,
    adicionarTarefa,
    marcarConcluida,
    removerTarefa,
    filtroTexto,
    setFiltroTexto,
    filtroStatus,
    setFiltroStatus
  }}>
    {children}
  </TodoContext.Provider>

  );
}
export default TodoContext;
