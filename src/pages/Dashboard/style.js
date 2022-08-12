import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 15%;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--color-gray-3);
`;

export const Tech = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;

    border-radius: 5px;
    padding: 2px;

    color: var(--color-gray-0);
    background: var(--color-gray-2);
  }

  button:hover {
    background: var(--color-gray-1)
  }
`;
