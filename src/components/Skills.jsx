const badges = {
  frontend: ["Angular (v18)", "React", "TypeScript", "JavaScript", "HTML", "CSS/Tailwind"],
  backend: [".NET 7/8", "Node.js", "NestJS", "REST APIs"],
  db: ["PostgreSQL", "SQL Server"],
  devops: ["Git", "Vite", "CI/CD básico"],
  networks: ["MikroTik", "Ubiquiti"]
}

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-primary">Habilidades</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {Object.entries(badges).map(([title, items]) => (
          <div key={title} className="p-6 bg-white rounded-2xl shadow-soft">
            <h3 className="text-xl font-semibold text-accent capitalize">{title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((i) => (
                <span key={i} className="px-3 py-1 text-sm bg-neutral rounded-full text-primary">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
