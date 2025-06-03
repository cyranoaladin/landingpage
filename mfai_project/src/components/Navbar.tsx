export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Money Factory</h1>
          <div className="space-x-4">
            <a href="/" className="hover:text-blue-600">Accueil</a>
            <a href="/dashboard" className="hover:text-blue-600">Tableau de bord</a>
          </div>
        </div>
      </div>
    </nav>
  )
} 