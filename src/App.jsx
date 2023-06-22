function App() {

  return (
    <>
      <nav className="flex justify-between items-center 
                       px-24
                       bg-black text-white 
                       text-lg font-bold font-roboto">
        <a href="/" className="flex items-center gap-1
                                border-2 border-white 
                                my-4 p-1">
          <div className="">Câmara</div>
          <div className="bg-cyan text-black px-2 py-1">Aberta</div>
        </a>
        <ul className="flex gap-12 items-center">
          <li><a href="/search/deputados">Deputados</a></li>
          <li><a href="/search/partidos">Partidos</a></li>
          <li><a href="/search/proposições">Proposições</a></li>
          <li><a href="/search/eventos">Eventos</a></li>
        </ul>
        <a href="/sobre" className="border-b-4 border-yellow">Sobre o Projeto</a>
      </nav>
      <main>
        <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      </main>
    </>
  )
}

export default App
