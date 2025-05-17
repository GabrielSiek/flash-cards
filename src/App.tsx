import { useEffect, useState } from 'react'
import { remedios, emptyRemedio } from './remedios'
import type { Remedio } from './remedios'
import './App.css'

function App() {
  const [remedio, setRemedio] = useState<Remedio>(emptyRemedio)
  const [explicacao, setExplicacao] = useState<string>('')
  const [textoBotao, setTextoBotao] = useState('Revelar')

  const switchRemedio = () => {
    const number = Math.floor(Math.random() * (remedios.length - 1))
    setRemedio(remedios[number])

    setExplicacao('')
    setTextoBotao('Revelar')
  }

  const showExplicacao = () => {
    setExplicacao(remedio.explicacao)
    setTextoBotao('Trocar remédio')
  }

  const handleClick = () => {
    if (textoBotao === 'Revelar')
      showExplicacao()
    else
      switchRemedio()
  }

  useEffect(() => {
    switchRemedio()
  }, [])

  return (
    <div className='container'>
      <div className='conteudo'>
        <h1 className='remedio'>Remédio: {remedio.nome}</h1>
        <div className='explicacao'> <strong>Explicação:</strong> {explicacao}</div>
      </div>
      <div className='botoes'>
        <button className='botao' onClick={handleClick}>{textoBotao}</button>
      </div>
    </div>
  )
}

export default App
