import styled from 'styled-components';

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

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;

      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  &.dark header {
    div {
      strong {
        color: #c2bdb2;
      }

      p {
        color: #94918c;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }

  &.dark ul {
    li {
      strong {
        color: #c2bdb2;
      }

      span {
        color: #94918c;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
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
