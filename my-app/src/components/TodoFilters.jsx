//TodoFilters – para filtrar entre todas, concluídas ou pendentes.
import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TodoFilters() {
  const { filtroTexto, setFiltroTexto, filtroStatus, setFiltroStatus } = useContext(TodoContext);

  return (
    <div className="mb-3">
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Filtrar tarefas"
        value={filtroTexto}
        onChange={(e) => setFiltroTexto(e.target.value)}
      />

      <div className="d-flex btn-group mt-3" role="group">
        <button className={`btn btn-outline-primary ${filtroStatus === 'todas' ? 'active' : ''}`} onClick={() => setFiltroStatus('todas')}>Todas</button>
        <button className={`btn btn-outline-success ${filtroStatus === 'concluidas' ? 'active' : ''}`} onClick={() => setFiltroStatus('concluidas')}>Concluídas</button>
        <button className={`btn btn-outline-warning ${filtroStatus === 'pendentes' ? 'active' : ''}`} onClick={() => setFiltroStatus('pendentes')}>Pendentes</button>
      </div>
    </div>
  );
};

export default TodoFilters;