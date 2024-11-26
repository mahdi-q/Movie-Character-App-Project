import styled, { css } from "styled-components";

const varients = {
  favorites: css`
    font-size: 0.9rem;
    position: absolute;
    top: 0;
    right: -6px;
    display: inline-block;
    background-color: var(--rose-500);
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px 4px;
  `,

  secondary: css`
    background-color: var(--slate-600);
  `,
};

const Badge = styled.span`
  white-space: nowrap;
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 700;

  ${(props) => varients[props.varient]}
`;

export default Badge;
