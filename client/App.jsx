import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

import Navbar from "./components/Navbar"

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
      <Navbar/>
      <main>
        {page}
      </main>
      <footer className="bg-black text-white text-center text-sm lg:text-lg font-roboto py-4 mt-auto">
        Copyright © 2023 Raphael Radespiel
      </footer>
    </>
  )
}

export default App
