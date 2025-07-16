import { selector } from "recoil";
import { todoListState } from "../atoms/todoListAtom";
import { filtroTextoState, filtroStatusState } from "../atoms/filterAtom";

export const tarefasFiltradasState = selector({
  key: "tarefasFiltradasState",
  get: ({ get }) => {
    const tarefas = get(todoListState);
    const filtroTexto = get(filtroTextoState).toLowerCase();
    const filtroStatus = get(filtroStatusState);

    return tarefas.filter((tarefa) => {
      const passaTexto = tarefa.texto.toLowerCase().includes(filtroTexto);
      const passaStatus =
        filtroStatus === "todas" ||
        (filtroStatus === "concluidas" && tarefa.concluida) ||
        (filtroStatus === "pendentes" && !tarefa.concluida);

      return passaTexto && passaStatus;
    });
  },
});
