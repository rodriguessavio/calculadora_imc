import ImcCalc from './components/ImcCalc.jsx'
import ImcTable from './components/ImcTable.jsx'

import { useState } from 'react'

import './App.css'

import {data} from './data/data.js'

function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if(!height && !weight) return;
    
    const weightFloat = +weight.replace(',', '.'); 
    const heightFloat = +height.replace(',', '.');

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(imcResult);

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

    if(!info) return;


  }

  const resetCalc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div className='container'>
      {!imc ? <ImcCalc calcImc = {calcImc}/> : <ImcTable data = {data} imc={imc} infoClass={infoClass} info={info} resetCalc={resetCalc}/>}
    </div>
  )
}

export default App
