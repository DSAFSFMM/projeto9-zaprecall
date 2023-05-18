import styled from "styled-components";
import setaPlay from "./assets/seta_play.png"
import setaVirar from "./assets/seta_virar.png"
import { useState } from "react";

export default function Card(props){
    const [play, setPlay] = useState(false);
    const [resposta, setResposta] = useState(false);
    return(
        <>
            <Pergunta play={play}> 
                <p>Pergunta {props.index + 1}</p>
                <img src={setaPlay} alt="setaPlay" onClick={() => setPlay(true)}/>
            </Pergunta>
            <Enunciado play={play} resposta={resposta}>
                <p>{props.card.question}</p>
                <img src={setaVirar} alt="setaPlay" onClick={() => setResposta(true)}/>
            </Enunciado>
            <Resposta resposta={resposta}>
                <p>{props.card.answer}</p>
                <div>
                    <Botao color="#FF3030">Não Lembrei</Botao>
                    <Botao color="#FF922E">Quase não lembrei</Botao>
                    <Botao color="#2FBE34">Zap!</Botao>
                </div>
            </Resposta>
        </>
    );
}

const Pergunta = styled.div`
    background-color: white;
    min-height: 65px;
    width: 300px;
    display: ${(props)=> props.play ? "none" : "flex"};
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 0 15px 0 15px;
    p{
        font-family: 'Recursive';
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
    img{
        width: 20px;
        height: 23px;
    }
`;

const Enunciado = styled.div`
    position: relative;
    background-color: #FFFFD4;
    min-height: 130px;
    width: 300px;
    display: ${(props)=> !props.play || props.resposta ? "none" : "flex"};
    flex-direction: column;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 18px 15px 6px 15px;
    p{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    img{
        position: absolute;
        right: 15px;
        bottom: 6px;
        width: 30px;
        height: 20px;
    }
`;

const Resposta = styled.div`
    position: relative;
    background-color: #FFFFD4;
    min-height: 130px;
    width: 300px;
    display: ${(props)=> !props.resposta ? "none" : "flex"};
    flex-direction: column;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 18px 15px 6px 15px;
    p{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    div{
        display: flex;
        gap: 0 8px;
    }
`;

const Botao = styled.button`
    margin-top: 22px;
    border-radius: 5px;
    border: none;
    background-color: ${props => props.color};
    height: 37px;
    width: 85px;
    padding: 0 8px 0 8px;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
`;
