import { atom } from "recoil";

const localStorageEffect =
  (chave) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(chave);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((novoValor) => {
      localStorage.setItem(chave, JSON.stringify(novoValor));
    });
  };

export const todoListState = atom({
  key: "todoListState",
  default: [],
  effects_UNSTABLE: [localStorageEffect("tarefas")],
});
