// Campo de Input e botao de adicionar
import { todoListState } from "../atoms/todoListAtom";
import { useState } from "react";
import { useSetRecoilState } from "recoil";


function TodoForm() {
  const [input, setInput] = useState("");
  const setTarefas = useSetRecoilState(todoListState);
  const adicionarTarefa = (texto) =>{
    const novaTarefa = {
      id: Date.now(),
      texto,
      concluida: false,
    };
            setTarefas((prev) => [...prev, novaTarefa]);
  };

  const adicionar = (e) => {
    e.preventDefault();
    adicionarTarefa(input);
    setInput("");
  };

  return (
    <form className="input-group mb-3" onSubmit={adicionar}>
      <label className="input-group-text" htmlFor="novaTarefa">
        Nova tarefa:{" "}
      </label>
      <input
        className="form-control"
        type="text"
        placeholder="Digite sua tarefa"
        id="novaTarefa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Adicionar
      </button>
    </form>
  );
}

export default TodoForm;