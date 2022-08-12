import styled from "styled-components";

const TechList = styled.ul`
  background: var(--color-gray-2);
  padding: 5px;
  margin-top: 15px;
  border-radius: 5px;

  li {
    display: flex;
    width: 97%;
    justify-content: space-between;
    padding: 10px;
    margin: 10px;
    background: var(--color-gray-4);
    border-radius: 8px;
  }

  h3 {
    width: 65%;
  }
  p {
    width: 35%;
  }

  button {
    color: var(--color-gray-1);
    background: none;
  }

  @media screen and (min-width: 768px) {
    p {
      width: 20%;
    }
  }
`;

export default TechList;
