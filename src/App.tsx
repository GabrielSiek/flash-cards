import { useEffect, useState } from 'react'
import { cards, emptyCard } from './content'
import type { Card } from './content'
import './App.css'

function App() {
  const [content, setContent] = useState<Card>(emptyCard)
  const [defition, setDefition] = useState<string>('')
  const [textButton, setTextButton] = useState('Revelar')

  const switchContent = () => {
    const number = Math.floor(Math.random() * (cards.length - 1))
    setContent(cards[number])

    setDefition('')
    setTextButton('Revelar')
  }

  const showDefition = () => {
    setDefition(content.definition)
    setTextButton('Próximo')
  }

  const handleClick = () => {
    if (textButton === 'Revelar')
      showDefition()
    else
      switchContent()
  }

  useEffect(() => {
    switchContent()
  }, [])

  return (
    <div className='container'>
      <div className='card'>
        <h1 className='content'>Remédio: {content.content}</h1>
        <div className='definition'> <strong>Explicação:</strong> {defition}</div>
      </div>
      <div className='buttons'>
        <button className='button' onClick={handleClick}>{textButton}</button>
      </div>
    </div>
  )
}

export default App
