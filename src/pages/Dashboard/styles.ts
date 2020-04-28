import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;

  transition: color 0.4s;

  &.dark {
    color: #8a8a8a;
  }
`;

export const Form = styled.form<FormProps>`
  width: 100%;
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;

    color: #3a3a3a;

    border: 2px solid #fff;
    border-right: 0;

    transition: all 0.4s;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.5s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }

  &.dark {
    input {
      background-color: #333;
      border-color: #333;

      color: #ccc;

      ${(props) =>
        props.hasError &&
        css`
          border-color: #c53030;
        `}

      &::placeholder {
        color: #6d6d6f;
      }
    }

    button {
      background: #e68200;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: all 0.4s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(16px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
        transition: color 0.4s;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
      transition: color 0.4s;
    }
  }

  a:last-child {
    margin-bottom: 64px;
  }

  &.dark a {
    background-color: #333;
  }

  &.dark a div {
    strong {
      color: #c2bdb2;
    }

    p {
      color: #575750;
    }
  }

  &.dark a svg {
    color: #999;
  }
`;

export const DarkSwitcher = styled.div`
  position: absolute;
  right: 0;
  margin: 0 16px;
  display: flex;
  align-items: center;

  .switch {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 16px;
    margin-left: 4px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 10px;
    width: 10px;
    left: 5px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(12px);
    -ms-transform: translateX(12px);
    transform: translateX(12px);
  }

  input:checked + .slider {
    background-color: #e68200;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  color: #3a3a3a;
  transition: color 0.4s;

  &.dark {
    color: #8a8a8a;
  }
`;
