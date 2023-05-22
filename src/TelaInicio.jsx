import styled from "styled-components";
import img from "./assets/logo.png"

export default function TelaInicio(props){
    return(
        <Tela inicio={props.inicio}>
            <img src={img} alt="icone"/>
            <p>ZapRecall</p>
            <button data-test="start-btn"  onClick={()=>props.setInicio(true)}>Iniciar Recall!</button>
        </Tela>
    );
}

const Tela = styled.div`
    display: ${(props)=> props.inicio ? "none": "flex"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #FB6B6B;
    min-height: 100vh;
    img{
        width: 136px;
        height: 161px;
    }
    p{
        margin-top: 13px;
        font-family: 'Righteous';
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-bottom: 30px;
    }
    button{
        width: 246px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #D70900;
    }
    button:hover{
        filter: brightness(0.9);
        cursor: pointer;
    }
`;