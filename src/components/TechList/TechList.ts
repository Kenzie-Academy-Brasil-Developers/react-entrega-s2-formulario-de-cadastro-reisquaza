import styled from "styled-components";

const TechList = styled.div`
  background: var(--color-gray-2);
  padding: 5px;
  margin-top: 15px;
  border-radius: 5px;

  button {
    width: 97%;
    padding: 10px;
    margin: 10px;

    display: flex;
    justify-content: space-between;

    background: var(--color-gray-4);
    color: var(--color-gray-1);

    border: none;
    border-radius: 8px;
  }

  button:hover {
    background: var(--color-gray-3);
  }

  p {
    width: 35%;
  }

  @media screen and (min-width: 768px) {
    p {
      width: 20%;
    }
  }
`;

export default TechList;
