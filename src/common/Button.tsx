import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../styles/theme";

interface Props {
  children: any;
  to?: string;
  href?: string;
  onClick?: any;
  style?: Object;
  type?: string;
  disabled?: boolean;
}

const ButtonContainer = styled.div`
  display: inline-block;
  position: relative;
  & a,
  input,
  button {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 182px;
    padding: 7px 24px 10px;
    min-height: 35px;
    max-width: 100%;
    border-radius: 4px;
    background-color: ${colors.blue};
    font: 400 29px/35px Lato;
    letter-spacing: 0.72px;
    color: #fff;
    appearance: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 250ms ease;
    &:hover {
      opacity: 0.85;
    }
  }
`;

const Button: React.FC<Props> = ({
  children,
  to,
  href,
  onClick,
  style,
  type,
  disabled
}) => {
  if (to) {
    return (
      <ButtonContainer>
        <Link onClick={onClick} role="button" to={to} style={style}>
          {children}
        </Link>
      </ButtonContainer>
    );
  }

  if (href) {
    return (
      <ButtonContainer>
        <a href={href} onClick={onClick} role="button" style={style}>
          {children}
        </a>
      </ButtonContainer>
    );
  }

  if (type === "submit") {
    return (
      <ButtonContainer>
        <input
          type="submit"
          value={children}
          style={style}
          disabled={disabled}
        />
      </ButtonContainer>
    );
  }

  return (
    <ButtonContainer>
      <button onClick={onClick} style={style}>
        {children}
      </button>
    </ButtonContainer>
  );
};

export default Button;
