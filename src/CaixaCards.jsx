import styled from "styled-components";
import Card from "./Card";

export default function CaixaCards(props){
    const cards = props.cards;
    return(
        <ConteinerCards>
            {cards.map((card,index)=><Card key={index} card={card} index={index}/>)}
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