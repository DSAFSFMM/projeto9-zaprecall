import { useState } from 'react'
import cards from './cards'
import GlobalStyle from './globalStyles'
import TelaJogo from './TelaJogo'

export default function App() {
  
  return (
    <>
      <GlobalStyle/>
      <TelaJogo cards={cards}/>
    </>
  )
}
