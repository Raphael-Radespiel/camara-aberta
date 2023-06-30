import {useRef, useState} from "react"

export default function Home() {
  const selectRef = useRef(null);
  const searchStringRef = useRef(null);
  
  function homepageSearch(){
    window.location = encodeURI("./search/" + selectRef.current.value + "?query-string=" + searchStringRef.current.value.toLowerCase());
  }

  return (
    <>
      <header className="flex flex-col gap-0 
                        text-5xl font-bold text-center
                        font-roboto
                        mt-24
                        md:gap-4
                        lg:text-6xl
                        lg:gap-6">
        <h1 className="leading-snug md:leading-tight">Câmara dos Deputados,</h1>
        <div className="text-4xl md:text-5xl lg:text-6xl">agora 
          <span className="w-fit block mx-auto mt-4 md:ml-3 md:inline bg-black text-white py-0.5 px-4">+ Transparente</span>
        </div>
      </header>
      <section className="flex justify-center text-base mt-16 mb-32 md:text-lg font-bold font-roboto">
        <select ref={selectRef} className="bg-cyan md:px-4 md:py-2 text-center hover:cursor-pointer border-black border-4 border-r-0 rounded-l-xl">
          <option value="deputados">Deputados</option>
          <option value="partidos">Partidos</option>
          <option value="proposicoes">Proposições</option>
          <option value="eventos">Eventos</option>
        </select>
        <input ref={searchStringRef} type="text" className="w-48 md:w-56 lg:w-64 bg-gray-300 text-gray-800 border-gray-500 border-4 border-r-0 focus:outline-none px-2"></input>
        <button onClick={homepageSearch} className="bg-yellow px-4 py-2 border-black border-4 rounded-r-xl">Buscar</button>
      </section>
    </>
  )
}
