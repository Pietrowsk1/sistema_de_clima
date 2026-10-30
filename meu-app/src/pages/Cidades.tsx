import { useState } from "react";
import { useCidades } from "../services/useCidades";

export default function Cidades() {
  const { cidades, adicionar, remover, limpar } = useCidades();
  const [nome, setNome] = useState("");
  const [regiao, setRegiao] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const resultado = adicionar(nome, regiao);

    if (resultado) {
      setErro(resultado);
      return;
    }

    setErro("");
    setNome("");
    setRegiao("");
  }

  function handleLimpar() {
    if (window.confirm("Remover todas as cidades da lista?")) {
      limpar();
    }
  }

  return (
    <div className="grid gap-5 pb-10 lg:grid-cols-[1fr_1.4fr]">
      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="flex h-fit flex-col gap-4 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md"
      >
        <div>
          <h1 className="font-display text-2xl font-semibold">Minhas cidades</h1>
          <p className="mt-1 text-sm text-white/60">
            Cadastre quantas cidades quiser para acompanhar o clima.
          </p>
        </div>

        <label className="flex flex-col gap-2 text-sm">
          Cidade
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex.: Juiz de Fora"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-white/40 outline-none focus:border-white/40"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm">
          Estado ou país (opcional)
          <input
            value={regiao}
            onChange={(e) => setRegiao(e.target.value)}
            placeholder="Ex.: MG, Brasil"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-white/40 outline-none focus:border-white/40"
          />
        </label>

        {erro && <p className="text-sm text-red-300">{erro}</p>}

        <button
          type="submit"
          className="cursor-pointer rounded-xl bg-amber-300 py-3 font-semibold text-amber-950 transition hover:brightness-110 active:scale-95"
        >
          Adicionar cidade
        </button>
      </form>

      {/* Lista */}
      <section className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm tracking-widest text-white/60">
            CIDADES REGISTRADAS ({cidades.length})
          </h2>

          {cidades.length > 0 && (
            <button
              onClick={handleLimpar}
              className="cursor-pointer text-sm text-white/60 transition hover:text-white"
            >
              Limpar tudo
            </button>
          )}
        </div>

        {cidades.length === 0 ? (
          <p className="py-10 text-center text-white/50">
            Nenhuma cidade registrada ainda.
          </p>
        ) : (
          <ul className="divide-y divide-white/10">
            {cidades.map((cidade) => (
              <li
                key={cidade.id}
                className="flex items-center justify-between gap-4 py-3"
              >
                <div>
                  <p className="text-lg">{cidade.nome}</p>
                  {cidade.regiao && (
                    <p className="text-sm text-white/60">{cidade.regiao}</p>
                  )}
                </div>

                <button
                  onClick={() => remover(cidade.id)}
                  aria-label={`Remover ${cidade.nome}`}
                  className="cursor-pointer rounded-full border border-white/10 px-3 py-1 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
