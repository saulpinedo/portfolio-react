export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold text-primary">Contacto</h2>
      <p className="mt-2 text-gray-700">¿Tienes un proyecto o quieres conversar? Escríbeme:</p>
      <form
        className="mt-6 grid gap-4 max-w-xl"
        onSubmit={(e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(e.currentTarget));
          window.location.href = `mailto:saul.pinedo@example.com?subject=Contacto%20desde%20portfolio&body=${encodeURIComponent(
            `Hola Saúl,%0D%0A%0D%0A${data.mensaje || ""}%0D%0A%0D%0A— ${data.nombre || ""} (${data.email || ""})`
          )}`;
        }}
      >
        <input required name="nombre" placeholder="Tu nombre" className="px-4 py-3 bg-white rounded-2xl shadow-soft outline-none focus:ring-2 focus:ring-accent" />
        <input required type="email" name="email" placeholder="Tu email" className="px-4 py-3 bg-white rounded-2xl shadow-soft outline-none focus:ring-2 focus:ring-accent" />
        <textarea required name="mensaje" placeholder="Tu mensaje" rows="4" className="px-4 py-3 bg-white rounded-2xl shadow-soft outline-none focus:ring-2 focus:ring-accent"></textarea>
        <button className="px-6 py-3 bg-accent text-white rounded-2xl shadow-soft hover:opacity-90 transition w-fit">Enviar</button>
      </form>
      <div className="mt-6 text-sm text-gray-600">
        También puedes encontrarme en:{" "}
        <a className="underline text-primary" href="https://github.com/saulpinedo" target="_blank" rel="noreferrer">GitHub</a> ·{" "}
        <a className="underline text-primary" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}
