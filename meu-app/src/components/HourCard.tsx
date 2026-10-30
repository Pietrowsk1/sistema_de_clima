type Props = {
  hora: string;
  icone: string;
  temperatura: number;
};

export default function HourCard({ hora, icone, temperatura }: Props) {
  return (
    <div className="flex min-w-22 flex-1 flex-col items-center gap-2 rounded-2xl bg-white/10 py-4">
      <span className="text-sm text-white/70">{hora}</span>
      <span className="text-3xl">{icone}</span>
      <span className="text-xl font-semibold">{temperatura}°</span>
    </div>
  );
}