//useLocalStorage para salvar e recuperar do localStorage.
import { useState } from 'react';

function useLocalStorage(key, valorInicial) {
  const [armazenarValor, setArmazenarValor] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
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
      window.localStorage.setItem(key, JSON.stringify(valorParaSalvar));
    } catch (error) {
      console.log(error);
    }
  };

  return [armazenarValor, setValue];
}

export default useLocalStorage;