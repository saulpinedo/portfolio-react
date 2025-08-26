export default function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Saúl Pinedo Ramallo</p>
        <p className="text-gray-500">Hecho con React + Tailwind</p>
      </div>
    </footer>
  )
}
