import { NavLink } from "react-router";

const links = [
  { to: "/", label: "Previsão" },
  { to: "/radar", label: "Radar" },
  { to: "/alertas", label: "Alertas" },
  { to: "/mapas", label: "Mapas" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-5">
      <span className="text-2xl font-semibold">C&T</span>

      <nav className="hidden gap-8 md:flex">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "text-sm text-white"
                : "text-sm text-white/60 transition hover:text-white"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <input
        placeholder="Buscar cidade..."
        className="w-56 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm placeholder:text-white/50 outline-none focus:border-white/40"
      />
    </header>
  );
}