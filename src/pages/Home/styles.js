import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const Box = styled.div`
  width: 400px;
  height: 300px;
  > p {
    margin-top: 10px;
    font-size: 13px;
    color: red;
  }
`;
export const BotBar = styled.div`
  display: flex;

  > button {
    background: var(--gray);
    border: 1px solid black;
    box-sizing: border-box;
    width: 90px;
    height: 30px;
    border-radius: 3px;
    font-weight: 350;
    font-size: 18px;
    letter-spacing: 1px;
    color: var(--primary);
    &:hover {
     background: var(--gray-light);
    }
    &:active {
      transform: translateY(0.8px);
    }
  }

  > input {
    background: var(--search);
    border: 1px solid black;
    border-radius: 6px;
    padding: 7px 12px;
  }
`;
