import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    width: 60%;
  }
`;

export const ContainerNav = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: var(--color-gray-3);
    color: var(--color-gray-0);
    width: 20%;
  }

  button:hover {
    background: var(--color-gray-2);
  }

  @media screen and (min-width: 768px) {
    button {
      width: 10%;
    }
  }
`;

export const ContainerHeader = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const ContainerForm = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
