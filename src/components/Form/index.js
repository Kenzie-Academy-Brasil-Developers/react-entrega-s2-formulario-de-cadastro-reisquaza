import styled from "styled-components";

export const Form = styled.form`
  padding: 20px;
  margin: 15px;
  width: 95%;
  height: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: var(--color-gray-3);

  label {
    width: 100%;
    height: 10%;
  }

  input {
    width: 100%;
    padding: 15px;
    background-color: var(--color-gray-2);
    color: var(--color-gray-0);
    border: 1px solid var(--color-gray-0);
    margin: 2px;
  }

  select {
    width: 100%;
    padding: 15px;
    background-color: var(--color-gray-2);
    color: var(--color-gray-0);
    border: 1px solid var(--color-gray-0);
    margin: 2px;
  }

  div {
    width: 100%;
    height: 20%;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    height: 55%;

    label {
      height: 25%;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 40%;
    height: 50%;
  }

  @media screen and (min-width: 1440px) {
    width: 30%;
    height: 45%;
  }
`;

export const FormRegister = styled(Form)`
  height: 95%;
`;
