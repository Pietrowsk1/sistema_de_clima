const horas = [
  { hora: "Agora", icone: "☀️", temperatura: 28 },
  { hora: "21h", icone: "🌤️", temperatura: 26 },
  { hora: "22h", icone: "⛅", temperatura: 24 },
  { hora: "23h", icone: "☁️", temperatura: 23 },
  { hora: "00h", icone: "🌧️", temperatura: 21 },
  { hora: "01h", icone: "🌧️", temperatura: 20 },
  { hora: "02h", icone: "☁️", temperatura: 20 },
  { hora: "03h", icone: "🌙", temperatura: 19 },
];

const semana = [
  { dia: "Ter", icone2: "🌧️", temperaturaminima: 18, temperaturamaxima: 22 },
  { dia: "Qua", icone2: "⛈️", temperaturaminima: 14, temperaturamaxima: 20 },
  { dia: "Qui", icone2: "⛅", temperaturaminima: 19, temperaturamaxima: 24 },
  { dia: "Sex", icone2: "☀️", temperaturaminima: 22, temperaturamaxima: 31 },
  { dia: "Sáb", icone2: "☀️", temperaturaminima: 21, temperaturamaxima: 29 },
  { dia: "Dom", icone2: "☁️", temperaturaminima: 19, temperaturamaxima: 25 },
];

export default function Home() {
  return (
    <div>
      <div className="mb-5 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border bg-gray-400/20 p-5">
          <p className="text-sm text-gray-300">JUIZ DE FORA, BR - TERÇA</p>
          <p>
            <span className="font-display text-8xl">28º</span>
            <span className="text-6xl">☀️</span>
          </p>
          <p className="mt-4 text-2xl">Ensolarado, chuva prevista à noite</p>
          <p className="mt-1">Máx 31ºC - Mín 19ºC</p>
        </div>

        <div className="rounded-2xl grid gap-5 bg-amber-300 p-5 text-amber-950">
          <p className="text-base">ALERTA!</p>
          <h2 className="text-3xl">Tempestade a partir das 22h</h2>
          <p className="text-amber-900">
            Rajadas de até 60km/h e acumulado de 35mm. Evite áreas alagáveis.
          </p>
          <button className="h-10 w-30 cursor-pointer rounded-2xl bg-amber-950 text-amber-300">
            Ver detalhes
          </button>
        </div>
      </div>

      <div className="mb-5 rounded-2xl border p-5">
        <h2 className="mb-4 text-sm text-white/60">PRÓXIMAS HORAS</h2>
        <div className="flex gap-3 overflow-x-auto">
          {horas.map((item) => (
            <div
              key={item.hora}
              className="flex min-w-22 flex-1 flex-col items-center gap-2 rounded-2xl bg-white/10 py-4"
            >
              <span className="text-sm text-white/70">{item.hora}</span>
              <span className="text-3xl">{item.icone}</span>
              <span className="font-display text-xl font-semibold">
                {item.temperatura}°C
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-5 rounded-2xl border p-5">
        <h2 className="mb-4 text-sm text-white/60">DURANTE A SEMANA</h2>
        <div className="flex flex-col gap-3">
          {semana.map((item) => (
            <div key={item.dia} className="flex items-center gap-4 py-3">
              <span className="w-10 text-sm text-white">{item.dia}</span>
              <span className="text-2xl">{item.icone2}</span>
              <span className="w-8 text-sm text-white">
                {item.temperaturaminima}°C
              </span>

              <div className="h-1.5 flex-1 rounded-full bg-linear-to-r from-cyan-300 via-amber-300 to-orange-500" />

              <span className="w-8 text-right text-sm">
                {item.temperaturamaxima}°C
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 auto-rows-fr gap-4">
        <div className="rounded-2xl border p-4 text-center">
          <h2 className="mb-2 text-sm text-white/60">UMIDADE</h2>
          <p className="text-2xl text-white">68%</p>
        </div>
        <div className="rounded-2xl border p-4 text-center">
          <h2 className="mb-2 text-sm text-white/60">VENTO</h2>
          <p className="text-2xl text-white">14 km/h NE</p>
        </div>
        <div className="rounded-2xl border p-4 text-center">
          <h2 className="mb-2 text-sm text-white/60">ÍNDICE UV</h2>
          <p className="text-2xl text-white">7 Alto</p>
        </div>
        <div className="rounded-2xl border p-4 text-center">
          <h2 className="mb-2 text-sm text-white/60">PRESSÃO</h2>
          <p className="text-2xl text-white">1013 hPa</p>
        </div>
        <div className="rounded-2xl border p-4 text-center">
          <h2 className="mb-2 text-sm text-white/60">VISIBILIDADE</h2>
          <p className="text-2xl text-white">10 km</p>
        </div>
        <div className="rounded-2xl border p-4 text-center">
          <h2 className="mb-2 text-sm text-white/60">SENSAÇÃO</h2>
          <p className="text-2xl text-white">30ºC</p>
        </div>
      </div>
    </div>
  );
}
