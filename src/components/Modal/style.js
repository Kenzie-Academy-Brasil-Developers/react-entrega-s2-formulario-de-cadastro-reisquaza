import styled from "styled-components";

export const ModalBox = styled.div`
  width: 95%;
  background: var(--color-gray-2);

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  position: relative;

  border-radius: 5px 5px 0 0;

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 1024px) {
    width: 40%;
  }

  @media screen and (min-width: 1440px) {
    width: 30%;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 15%;
  padding: 10px;

  button {
    width: 21px;
    height: 15px;

    background: transparent;

    color: var(--color-gray-0);

    border: none;
    border-radius: 50%;
  }
`;
