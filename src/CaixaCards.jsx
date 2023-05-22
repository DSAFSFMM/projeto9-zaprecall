import styled from "styled-components";
import Card from "./Card";

export default function CaixaCards(props){
    const cards = props.cards;
    const tamanho = cards.length;
    return(
        <ConteinerCards>
            {cards.map((card,index)=><Card key={index} card={card} index={index} setRespondidos={props.setRespondidos} respondidos={props.respondidos} lista={props.lista} setLista={props.setLista} tamanho={tamanho} setFim={props.setFim}/>)}
        </ConteinerCards>
    );
}

const ConteinerCards = styled.div`
    margin-bottom: 25px;
    margin-top: 51px;
    gap: 25px 0;
    display: flex;
    flex-direction: column;
`;