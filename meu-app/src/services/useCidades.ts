import { useEffect, useState } from "react";

export interface Cidade {
  id: string;
  nome: string;
  regiao: string;
}

const CHAVE = "cidades";

function carregar(): Cidade[] {
  try {
    const salvo = localStorage.getItem(CHAVE);
    return salvo ? JSON.parse(salvo) : [];
  } catch {
    return [];
  }
}

export function useCidades() {
  const [cidades, setCidades] = useState<Cidade[]>(carregar);

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(cidades));
    } catch {
      // se o armazenamento estiver bloqueado, a lista só vale nesta sessão
    }
  }, [cidades]);

  // Devolve uma mensagem de erro, ou null se deu certo.
  function adicionar(nome: string, regiao: string): string | null {
    const nomeLimpo = nome.trim();
    const regiaoLimpa = regiao.trim();

    if (!nomeLimpo) return "Digite o nome da cidade.";

    const jaExiste = cidades.some(
      (c) =>
        c.nome.toLowerCase() === nomeLimpo.toLowerCase() &&
        c.regiao.toLowerCase() === regiaoLimpa.toLowerCase()
    );
    if (jaExiste) return "Essa cidade já está na lista.";

    setCidades((atual) => [
      ...atual,
      { id: crypto.randomUUID(), nome: nomeLimpo, regiao: regiaoLimpa },
    ]);
    return null;
  }

  function remover(id: string) {
    setCidades((atual) => atual.filter((c) => c.id !== id));
  }

  function limpar() {
    setCidades([]);
  }

  return { cidades, adicionar, remover, limpar };
}
