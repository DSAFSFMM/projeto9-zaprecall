import styled from "styled-components";
import iconeCerto from "./assets/icone_certo.png";
import iconeErrado from "./assets/icone_erro.png";
import iconeQuase from "./assets/icone_quase.png";
import party from "./assets/party.png";
import sad from "./assets/sad.png";

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
        <Footer data-test="footer" fim={props.fim}>
            <MsgFim fim={props.fim}>
                <Final lista={props.lista}/>
            </MsgFim>
            <p>{props.respondidos}/{props.cards.length} CONCLUÍDOS</p>
            <div>
                {props.lista.map(renderizaLista)}
            </div>
        </Footer>
    );
}

function Final(props){
    if (props.lista.includes(-1)) {
        return(
            <>
                <div>
                    <img src={sad} alt="sad" />
                    <h1>Putz...</h1>
                </div>
                <p>Ainda faltam alguns... Mas não desanime!</p>
            </>
        );
    }else{
        return(
            <>
                <div>
                    <img src={party} alt="party" />
                    <h1>Parabéns!</h1>
                </div>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </>
        );
    }
}

const MsgFim = styled.div`
    display: ${(props)=> props.fim? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    img{
        width: 23px;
        height: 23px
    }
    p{
        margin: 14px 0 14px 0;
        width: 222px;
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        text-align: center;
    }
    div{
        display: flex;
        justify-content: center
        
    }
    h1{
        font-family: 'Recursive';
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        }
`;

const Footer = styled.div`
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    height: ${(props)=> props.fim? "171px" : "70px"};
    background-color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        margin-bottom: 6px;
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