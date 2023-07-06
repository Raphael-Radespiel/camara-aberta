export default function Navbar(){
  return (
    <nav className="flex flex-wrap justify-between items-center p-0 bg-black text-white text-base font-bold font-roboto
                    lg:flex-nowrap lg:px-24 lg:text-lg">
      <a href="/" className="flex items-center gap-1 border-2 border-white ml-6 my-4 p-1
        md:ml-10 lg:ml-0 lg:my-0">
        <div className="">Câmara</div>
        <div className="bg-cyan text-black px-2 py-1">Aberta</div>
      </a>
      <ul className="flex order-last items-center w-full border-t-4 border-white 
                    lg:order-none lg:border-none lg:w-min">
        {
          window.location.pathname == "/search/deputados" 
          ? 
          <li className="bg-gray-800 text-center flex-auto py-4 lg:p-6"><a href="/search/deputados">Deputados</a></li> 
          :
          <li className="text-center flex-auto py-4 lg:p-6"><a href="/search/deputados">Deputados</a></li>
        }
        {
          window.location.pathname == "/search/partidos" 
          ? 
          <li className="bg-gray-800 text-center flex-auto py-4 lg:p-6"><a href="/search/partidos">Partidos</a></li> 
          : 
          <li className="text-center flex-auto py-4 lg:p-6"><a href="/search/partidos">Partidos</a></li>
        }
        {
          window.location.pathname == "/search/proposicoes" 
          ? 
          <li className="bg-gray-800 text-center flex-auto py-4 lg:p-6"><a href="/search/proposicoes">Proposições</a></li> 
          : 
          <li className="text-center flex-auto py-4 lg:p-6"><a href="/search/proposicoes">Proposições</a></li>
        }
        {
          window.location.pathname == "/search/eventos" 
          ? 
          <li className="bg-gray-800 text-center flex-auto py-4 lg:p-6"><a href="/search/eventos">Eventos</a></li> 
          : 
          <li className="text-center flex-auto py-4 lg:p-6"><a href="/search/eventos">Eventos</a></li>
        }
      </ul>
      <a href="/sobre" className="border-b-4 border-yellow mr-6 md:mr-10 lg:mr-0">Sobre o Projeto</a>
    </nav>
  )
}
