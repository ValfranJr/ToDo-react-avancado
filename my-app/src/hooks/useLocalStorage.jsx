//useLocalStorage para salvar e recuperar do localStorage.
import { useState } from 'react';

function useLocalStorage(chave, valorInicial) {
  const [armazenarValor, setArmazenarValor] = useState(() => {
    try {
      const item = window.localStorage.getItem(chave);
      return item ? JSON.parse(item) : valorInicial;
    } catch (error) {
      console.log(error);
      return valorInicial;
    }
  });

  const setValue = (value) => {
    try {
      const valorParaSalvar =
        value instanceof Function ? value(armazenarValor) : value;
      setArmazenarValor(valorParaSalvar);
      window.localStorage.setItem(chave, JSON.stringify(valorParaSalvar));
    } catch (error) {
      console.log(error);
    }
  };

  return [armazenarValor, setValue];
}

export default useLocalStorage;