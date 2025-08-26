const data = [
  {
    title: "TotalPharma",
    period: "2022 – 2024",
    desc: "Sistema de gestión de farmacias: múltiples sucursales, almacenes locales, transferencias y actualización de stock.",
    impact: "Mejoró el control de inventarios y la trazabilidad entre sucursales.",
    tech: ["Angular", ".NET", "PostgreSQL"],
    link: null
  },
  {
    title: "Sistema de Almacén",
    period: "2022 – 2024",
    desc: "Software de almacenes oficial, con manual y sistema aprobados por Resolución Departamental 1622 (30/04/2024).",
    impact: "Estandarizó procesos y permitió auditorías más rápidas.",
    tech: ["C#", "SQL Server", "Angular"],
    link: null
  },
  {
    title: "ISP Manager (MikroTik)",
    period: "2024 – 2025",
    desc: "Aplicación web para administración de usuarios, velocidades y configuraciones en routers MikroTik.",
    impact: "Automatizó tareas repetitivas y disminuyó errores de configuración.",
    tech: ["NestJS", "Node.js", "MikroTik API", "React"],
    link: null
  },
  {
    title: "Shooter 3D con Three.js",
    period: "2024",
    desc: "Juego web 3D donde el jugador destruye pilares; incluye figura tipo tanque y reinicio con tecla Control.",
    impact: "Demostración de gráficos 3D, input y lógica de juego en el navegador.",
    tech: ["Three.js", "JavaScript"],
    link: null
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-primary">Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {data.map((p) => (
          <article key={p.title} className="p-6 bg-white rounded-2xl shadow-soft">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xl font-semibold text-accent">{p.title}</h3>
              <span className="text-xs text-gray-500">{p.period}</span>
            </div>
            <p className="mt-2 text-gray-700">{p.desc}</p>
            <p className="mt-2 text-sm text-gray-600"><strong>Impacto:</strong> {p.impact}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="px-2 py-1 text-sm bg-neutral rounded-md text-primary">
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a href={p.link} className="inline-block mt-4 text-primary underline hover:no-underline">
                Ver demo
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
