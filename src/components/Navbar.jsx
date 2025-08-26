export default function Navbar() {
  const links = [
    { href: "#about", label: "Sobre mí" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ]
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-neutral/70 border-b">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-primary font-bold text-xl">SP<span className="text-accent">.</span></a>
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-700 hover:text-primary transition">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-3 py-2 bg-accent text-white rounded-2xl shadow-soft hover:opacity-90 transition"
          >
            Hablemos
          </a>
        </div>
      </nav>
    </header>
  )
}
