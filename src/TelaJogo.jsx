import styled from "styled-components";
import CaixaCards from "./CaixaCards";
import RodaPe from "./RodaPe";
import logo from "./assets/logo.png";
import { useState } from "react";

export default function TelaJogo(props) {
    const [lista, setLista] = useState([]);
    const [fim, setFim] = useState(false);
    return (
        <Tela inicio={props.inicio} fim={fim}>
            <Header>
                <img src={logo} alt="logo" />
                <p>ZapRecall</p>
            </Header>
            <CaixaCards setRespondidos={props.setRespondidos} respondidos={props.respondidos} cards={props.cards} lista={lista} setLista={setLista} setFim={setFim}/>
            <RodaPe lista={lista} cards={props.cards} respondidos={props.respondidos} fim={fim}/>
        </Tela>
    );
}

const Tela = styled.div`
    padding-bottom: ${(props)=> props.fim ? "170px": "70px"};
    display: ${(props)=> props.inicio ? "flex": "none"};
    flex-direction: column;
    align-items: center;
    position: absolute;
    top:0;
    width: 100%;
    background-color: #FB6B6B;
    min-height: 100vh;
`;

const Header = styled.div`
    margin-top: 42px;
    display: flex;
    img{
        width: 52px;
        height: 60px;
    }
    p{
        width: 200px;
        font-family: 'Righteous';
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
    }
`;