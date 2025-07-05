const Header = () => {
  return (
    <div className="relative py-20 px-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 rounded-3xl"></div>

      <div className="relative max-w-6xl">
        <h2 className="text-7xl font-bold text-dark mb-6 leading-tight">
          <span className="bg-gradient-to-r from-dark via-primary to-dark bg-clip-text text-transparent">
            Mentugo é seu aliado inteligente
          </span>
        </h2>

        <p className="text-4xl text-primary font-semibold leading-relaxed mb-8">
          rumo à aprovação no vestibular
        </p>

        <div className="mb-12">
          <p className="text-xl text-texto/80 max-w-3xl mb-8 leading-relaxed">
            Transforme seus sonhos em realidade com a plataforma 🐢{" "}
            <span style={{ color: "#02a408" }}>
              mais avançada de preparação para vestibulares.
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-dark rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-dark mb-2">
                  Tecnologia de Ponta
                </h3>
                <p className="text-texto/70 text-sm">
                  IA avançada e algoritmos inteligentes para personalizar
                  seu estudo
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-dark mb-2">
                  Metodologia Comprovada
                </h3>
                <p className="text-texto/70 text-sm">
                  Métodos testados e aprovados por especialistas em educação
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-dark mb-2">
                  Resultados Extraordinários
                </h3>
                <p className="text-texto/70 text-sm">
                  Milhares de estudantes já conquistaram suas vagas com
                  sucesso
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-dark font-semibold">Taxa de Aprovação</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-dark font-semibold">
              Estudantes Aprovados
            </div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-dark font-semibold">
              Suporte Inteligente
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button className="px-10 py-4 bg-gradient-to-r from-primary to-dark text-light font-bold text-lg rounded-2xl shadow-2xl transform hover:scale-105 hover:shadow-3xl transition-all duration-300 border-2 border-primary/20">
            Começar Agora - Grátis
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary hover:text-light transition-all duration-300">
            Ver Demonstração
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
