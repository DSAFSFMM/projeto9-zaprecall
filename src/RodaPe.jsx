import styled from "styled-components";
import iconeCerto from "./assets/icone_certo.png";
import iconeErrado from "./assets/icone_erro.png";
import iconeQuase from "./assets/icone_quase.png";

export default function RodaPe(props){
    function renderizaLista(item, index){
        switch (item) {
            case 1:
                return(<img key={index} src={iconeCerto} alt="iconeCerto" />);
            case 0:
                return(<img key={index} src={iconeQuase} alt="iconeQuase" />);
            case -1:
                return(<img key={index} src={iconeErrado} alt="iconeErrado" />);
            default:
                break;
        }
    }
    return(
        <Footer data-test="footer">
            <p>{props.respondidos}/{props.cards.length} CONCLUÍDOS</p>
            <div>
                {props.lista.map(renderizaLista)}
            </div>
        </Footer>
    );
}

const Footer = styled.div`
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    height: 70px;
    background-color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    img{
        margin-right: 5px;
    }
`;