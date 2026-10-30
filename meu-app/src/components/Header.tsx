export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-5">
      <span className="font-display text-2xl font-semibold">C&T</span>

      <div>
        <a href="/cidades">
          <button className="cursor-pointer px-3 py-2 hover:bg-blue-400 rounded-2xl transition-colors">Cidades</button>
        </a>
      </div>

      <input
        placeholder="Buscar cidade..."
        className="w-56 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm placeholder:text-white/50 outline-none focus:border-white/40"
      />
    </header>
  );
}
