import {useState, useEffect } from "react"
import axios from "axios"

const baseURL = "http://localhost:5000";

export default function DeputadosSearch() {
  
  useEffect(() => {
    axios.get(`${baseURL}/deputados`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);




  return (
    <>
      {/*SEARCH COMPONENTS AREA*/}
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <p>what</p>
    </>

  )
}
