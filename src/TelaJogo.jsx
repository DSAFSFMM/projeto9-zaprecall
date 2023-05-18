import styled from "styled-components";
import CaixaCards from "./CaixaCards";
import RodaPe from "./RodaPe";
import logo from "./assets/logo.png";

export default function TelaJogo(props) {
    return (
        <Tela>
            <Header>
                <img src={logo} alt="logo" />
                <p>ZapRecall</p>
            </Header>
            <CaixaCards cards={props.cards}/>
            <RodaPe />
        </Tela>
    );
}

const Tela = styled.div`
    padding-bottom: 70px;
    display: flex;
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