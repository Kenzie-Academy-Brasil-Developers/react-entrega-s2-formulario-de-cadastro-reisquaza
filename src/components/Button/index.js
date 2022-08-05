import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  margin: 5px;

  border: none;
  border-radius: 8px;

  background: var(--color-primary);
  color: var(--color-gray-0);

  :hover {
    background: var(--color-primary-focus);
  }
`;

export const ButtonGray = styled(Button)`
  background: var(--color-gray-1);
  
  :hover {
    background: var(--color-gray-2)
  }
`;
