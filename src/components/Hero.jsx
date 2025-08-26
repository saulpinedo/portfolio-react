export default function Hero() {
  return (
    <section className="h-[82vh] flex flex-col justify-center items-center text-center">
      <p className="text-sm tracking-widest text-gray-600">PORTFOLIO · DESARROLLADOR FULL STACK</p>
      <h1 className="mt-3 text-5xl md:text-6xl font-extrabold text-primary">
        Hola, soy <span className="text-accent">Saúl Pinedo</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-700">
        Full Stack (Angular · React · .NET · Node) con experiencia en
        sistemas de farmacias, almacenes oficiales y redes ISP (MikroTik/Ubiquiti).
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-accent text-white rounded-2xl shadow-soft hover:opacity-90 transition"
        >
          Ver proyectos
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-primary text-primary rounded-2xl hover:bg-primary hover:text-white transition"
        >
          Contacto
        </a>
      </div>
    </section>
  )
}
