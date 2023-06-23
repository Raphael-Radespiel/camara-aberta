import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

import DeputadosSearch from "./pages/search/DeputadosSearch"
import PartidosSearch from "./pages/search/PartidosSearch"
import ProposicoesSearch from "./pages/search/ProposiçõesSearch"
import EventosSearch from "./pages/search/EventosSearch"

function App() {

  let page;

  switch(window.location.pathname){
    case "/":
      page = <Home/>;
      break;
    case "/sobre":
      page = <About/>;
      break;
    case "/search/deputados":
      page = <DeputadosSearch/>;
      break;
    case "/search/partidos":
      page = <PartidosSearch/>;
      break;
    case "/search/proposicoes":
      page = <ProposicoesSearch/>;
      break;
    case "/search/eventos":
      page = <EventosSearch/>;
      break;
    default: 
      page = <NotFound/>;
      break;
  }

  return (
    <>
      <nav className="flex justify-between items-center px-24 bg-black text-white text-lg font-bold font-roboto">
        <a href="/" className="flex items-center gap-1 border-2 border-white my-4 p-1">
          <div className="">Câmara</div>
          <div className="bg-cyan text-black px-2 py-1">Aberta</div>
        </a>
        <ul className="flex gap-12 items-center">
          <li><a href="/search/deputados">Deputados</a></li>
          <li><a href="/search/partidos">Partidos</a></li>
          <li><a href="/search/proposicoes">Proposições</a></li>
          <li><a href="/search/eventos">Eventos</a></li>
        </ul>
        <a href="/sobre" className="border-b-4 border-yellow">Sobre o Projeto</a>
      </nav>
      <main>
        {page}
      </main>
      <footer className="bg-black text-white text-center text-lg font-roboto py-4 mt-auto">
        Copyright © 2023 Raphael Radespiel
      </footer>
    </>
  )
}

export default App
