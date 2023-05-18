import styled from "styled-components";
import setaPlay from "./assets/seta_play.png"

export default function Card(props){
    return(
        <CardStyle>
            <p>Pergunta {props.index + 1}</p>
            <img src={setaPlay} alt="setaPlay" />
        </CardStyle>
    );
}

const CardStyle = styled.div`
    background-color: white;
    height: 65px;
    width: 300px;
    display: flex;
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