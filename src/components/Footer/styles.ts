import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const FooterBar = styled.footer`
  width: 100vw;
  height: 50px;
  background-color: #222;
  margin: initial;
  margin-top: auto;
  margin-bottom: -40px;
  position: relative;
  left: calc(-50vw + 50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: #f4ede8;
  font-weight: bold;

  svg {
    margin: 0 4px;
  }

  .dropdown {
    position: relative;
    margin: 0 16px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .dropdown-content {
    visibility: hidden;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    position: absolute;
    top: calc(-210%);
    right: 0;
    overflow: hidden;
    width: 136px;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 8px;
    opacity: 0;
    transition: opacity 0.4s;

    a {
      text-decoration: none;
      color: #3a3a3a;

      & + a {
        margin-top: 8px;
      }
    }
  }

  .dropdown:hover .dropdown-content {
    visibility: visible;
    opacity: 1;
  }
`;
