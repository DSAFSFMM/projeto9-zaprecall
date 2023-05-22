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

    function responder(valor){
        const list = [...props.lista, valor];
        props.setLista(list);
        setRespondido(true); 
        props.setRespondidos(props.respondidos + 1)
        switch (valor) {
            case 1:
                setAcerto(iconeCerto); 
                setCor("#2FBE34");
                break;
            case 0:
                setAcerto(iconeQuase); 
                setCor("#FF922E"); 
                break;
            case -1:
                setAcerto(iconeErro); 
                setCor("#FF3030"); 
                break;
            default:
                break;
        }
        if (props.respondidos + 1 === props.tamanho) {
            props.setFim(true);
        }
    }

    return(
    <Conteudo play={play} resposta={resposta} respondido={respondido} cor={cor}>
        <Texto play={play} resposta={resposta} index={props.index + 1} question={props.card.question} answer={props.card.answer} respondido={respondido}/>
        <Imagem play={play} setPlay={setPlay} setResposta={setResposta} respondido={respondido} acerto={acerto}/>
        <div>
            <Botao data-test="no-btn" color="#FF3030" onClick={()=> responder(-1)}>Não Lembrei</Botao>
            <Botao data-test="partial-btn" color="#FF922E" onClick={()=> responder(0)}>Quase não lembrei</Botao>
            <Botao data-test="zap-btn" color="#2FBE34" onClick={()=> responder(1)}>Zap!</Botao>
        </div>
       </Conteudo>
    )
}

function Imagem(props){
    if (!props.play) {
        return (
            <img src={setaPlay} alt="setaPlay" onClick={() => props.setPlay(true)}/>
        );
    }else if(!props.respondido){
        return (
            <img src={setaVirar} alt="setaVirar" onClick={() => props.setResposta(true)}/>
        );
    }else{
        return(
            <img src={props.acerto} alt="setaPlay"/>
        );
    }
}

function Texto(props){
    if (!props.play) {
        return (
            <p data-test="flashcard-text">Pergunta {props.index}</p>
        );
    }else if(!props.resposta){
        return (
            <p data-test="flashcard-text">{props.question}</p>
        );  
    }else if(!props.respondido){
        return(<p data-test="flashcard-text">{props.answer}</p>);
    }else{
        return(<p data-test="flashcard-text">Pergunta {props.index}</p>);
    }
}

const Conteudo = styled.div`
    position: relative;
    background-color: ${(props)=> props.play && !props.respondido? "#FFFFD4" : "white"};
    min-height: ${(props)=> props.play && !props.respondido? "135px" : "65px"};
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: ${(props)=> props.play && !props.respondido? "" : "center"};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: ${(props)=> props.play && !props.respondido? "18px 15px 6px 15px" : "0 15px 0 15px"};
    flex-direction: ${(props)=> props.resposta && !props.respondido? "column" : "row"};
    p{
        font-family: 'Recursive';
        font-weight: ${(props)=> props.play && !props.respondido? "400" : "700"};
        font-size: ${(props)=> props.play && !props.respondido? "18px" : "16px"};
        line-height: ${(props)=> props.play && !props.respondido? "22px" : "19px"};
        color: ${(props)=> props.respondido? props.cor: "#333333"};
        text-decoration: ${(props)=> props.respondido ? "line-through":"" };
    }
    img{
        display: ${(props)=> props.resposta && !props.respondido? "none" : ""};
        width: ${(props)=> props.play? "30px" : "20px"};
        height: ${(props)=> props.play? "#20px" : "23px"};
        width: ${(props)=> props.respondido? "23px" : ""};
        height: ${(props)=> props.respondido? "#23px" : ""};
        position: ${(props)=> props.play && !props.respondido? "absolute" : ""};
        right: 15px;
        bottom: 6px;
    }
    button{
        display: ${(props)=> props.resposta && !props.respondido? "" : "none"};
    }
    div{
        display: ${(props)=> props.resposta && !props.respondido? "flex" : "none"};
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