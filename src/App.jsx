import { useState } from 'react'
import cards from './cards'
import GlobalStyle from './globalStyles'
import TelaJogo from './TelaJogo'

export default function App() {
  const [respondidos, setRespondidos] = useState(0);
  return (
    <>
      <GlobalStyle/>
      <TelaJogo respondidos={respondidos} setRespondidos={setRespondidos} cards={cards}/>
    </>
  )
}
