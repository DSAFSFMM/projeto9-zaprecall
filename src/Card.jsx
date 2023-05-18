import styled from "styled-components";
import setaPlay from "./assets/seta_play.png";
import setaVirar from "./assets/seta_virar.png";
import { useState } from "react";
import iconeCerto from "./assets/icone_certo.png";
import iconeErro from "./assets/icone_erro.png";
import iconeQuase from "./assets/icone_quase.png";

export default function Card(props){
    const [play, setPlay] = useState(false);
    const [resposta, setResposta] = useState(false);
    const [respondido, setRespondido] = useState(false);
    const [acerto, setAcerto] = useState(iconeCerto);
    const [cor, setCor] = useState();
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
            <Resposta resposta={resposta} respondido={respondido}>
                <p>{props.card.answer}</p>
                <div>
                    <Botao color="#FF3030" onClick={()=> {setRespondido(true); setAcerto(iconeErro); setCor("#FF3030"); props.setRespondidos(props.respondidos + 1)}}>Não Lembrei</Botao>
                    <Botao color="#FF922E" onClick={()=> {setRespondido(true); setAcerto(iconeQuase); setCor("#FF922E"); props.setRespondidos(props.respondidos + 1)}}>Quase não lembrei</Botao>
                    <Botao color="#2FBE34" onClick={()=> {setRespondido(true); setAcerto(iconeCerto); setCor("#2FBE34"); props.setRespondidos(props.respondidos + 1)}}>Zap!</Botao>
                </div>
            </Resposta>
            <Final respondido={respondido} cor={cor}>
                <p>Pergunta {props.index + 1}</p>
                <img src={acerto} alt="setaPlay"/>
            </Final>
        </>
    );
}

const Pergunta = styled.div`
    background-color: white;
    min-height: 65px;
    width: 300px;
    display: ${(props)=> props.play? "none" : "flex"};
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
    display: ${(props)=> !props.resposta || props.respondido? "none" : "flex"};
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

const Final = styled.div`
    background-color: white;
    min-height: 65px;
    width: 300px;
    display: ${(props)=> !props.respondido? "none" : "flex"};
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 0 15px 0 15px;
    p{
        text-decoration: line-through;
        font-family: 'Recursive';
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${(props)=> props.cor};
    }
    img{
        width: 23px;
        height: 23px;
    }
`;