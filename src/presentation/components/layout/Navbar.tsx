const Navbar = () => {
  return (
    <nav className="mt-16 mx-16 border border-black rounded-2xl min-h-16 bg-light shadow-lg">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary font-cormorant">
            Mentugo
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-6 py-2 text-dark font-semibold rounded-xl bg-transparent">
            Já tenho acesso
          </button>
          <button className="px-6 py-2 text-light font-semibold rounded-xl border-2 border-primary bg-primary hover:bg-dark hover:border-dark transition-all duration-300 transform hover:scale-105 shadow-md">
            Criar conta gratuita
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
