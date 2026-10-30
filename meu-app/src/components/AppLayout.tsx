import { Outlet } from "react-router";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-6xl px-6">
        <Outlet />
      </main>
    </div>
  );
}