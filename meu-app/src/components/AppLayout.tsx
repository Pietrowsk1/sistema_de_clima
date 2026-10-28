import { Outlet } from "react-router";
import Header from "./header";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-linear-to-b from-sky-700 to-slate-950 text-white">
      <Header />
      <main className="mx-auto max-w-6xl px-6">
        <Outlet />
      </main>
    </div>
  );
}