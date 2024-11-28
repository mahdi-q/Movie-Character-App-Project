import styled, { css } from "styled-components";

const varients = {
  primary: css`
    background-color: var(--slate-500);
    color: var(--slate-100);
  `,

  secondary: css`
    border: 1px solid var(--slate-100);
    color: var(--slate-100);
  `,
};

const Button = styled.button`
  padding: 0.8rem 1rem;
  border-radius: 1rem;
  font-weight: 700;

  ${(props) => varients[props.varient]}
`;

export default Button;
