import { useState } from 'react'
import cards from './cards'
import GlobalStyle from './globalStyles'
import TelaJogo from './TelaJogo'
import TelaInicio from './TelaInicio';

export default function App() {
  const [respondidos, setRespondidos] = useState(0);
  const [inicio, setInicio] = useState(false);
  return (
    <>
      <GlobalStyle/>
      <TelaJogo respondidos={respondidos} setRespondidos={setRespondidos} cards={cards} inicio={inicio}/>
      <TelaInicio inicio={inicio} setInicio={setInicio}/>
    </>
  )
}
