type Props = {
  dia: string;
  icone2: string;
  temperaturaminima: number;
  temperaturamaxima: number;
};

export default function HourCard({ dia, icone2, temperaturaminima, temperaturamaxima }: Props) {
  return (
    <div className="flex min-w-22 flex-1 flex-col items-center gap-2 rounded-2xl bg-white/10 py-4">
      <span className="text-sm text-white/70">{dia}</span>
      <span className="text-3xl">{icone2}</span>
      <span className="text-xl font-semibold">{temperaturaminima}°</span>
      <span className="text-xl font-semibold">{temperaturamaxima}°</span>
    </div>
  );
}