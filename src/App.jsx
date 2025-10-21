import ImcCalc from './components/ImcCalc.jsx'
import ImcTable from './components/ImcTable.jsx'

import { useState } from 'react'

import './App.css'

import './data/data.js'

function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if(!height && !weight) return;
    
    const weightFloat = +weight.replace(',', '.'); 
    const heightFloat = +height.replace(',', '.');

    const imc = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(imc);

  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div className='Container'>
      {!imc ? <ImcCalc calcImc = {calcImc}/> : <ImcTable />}
    </div>
  )
}

export default App
