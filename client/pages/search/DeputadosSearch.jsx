import {useState, useEffect } from "react"
import axios from "axios"

const baseURL = "http://localhost:5000";

export default function DeputadosSearch() {

  const [deputados, setDeputados] = useState([]);

  // PESQUISAR POR NOME E LEGISLATURA
  
  useEffect(() => {
    axios.get(`${baseURL}/deputados`)
      .then(res => {
        console.log(res.data.dados);
        setDeputados(res.data.dados);
      })
      .catch(err => console.log(err));
  }, []);




  return (
    <>
      {/*SEARCH COMPONENTS AREA*/}
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      {
        deputados.map((value, index) => {
          return (
            <div key={index}>
              <h1>{value.nome}</h1>
              <p>email: {value.email}</p>
              <p>partido: {value.siglaPartido}</p>
              <img src={value.urlFoto} className="w-20"></img>
            </div>
          )
        })
      }
    </>

  )
}
