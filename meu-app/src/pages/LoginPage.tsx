import { useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm flex-col gap-5 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md"
      >
        <div className="text-center">
          <span className="font-display text-7xl font-semibold">C&T</span>
          <h2 className="flex flex-col gap-2 text-sm">Fique por dentro do céu</h2>
        </div>

        <label className="flex flex-col gap-2 text-sm">
          E-mail
          <input
            type="email"
            placeholder="voce@email.com"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-white/40"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm">
          Senha
          <input
            type="password"
            placeholder="Ex: 123456"
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-white/40"
          />
        </label>

        <button
          type="submit"
          className="cursor-pointer rounded-xl bg-blue-300/50 py-3 font-semibold text-white transition hover:bg-blue-500"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}