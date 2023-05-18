import styled from "styled-components";

export default function RodaPe(){
    return(
        <Footer>
            <p>0/4 CONCLUÍDOS</p>
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
    justify-content: center;
    align-items: center;
    p{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
`;