import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  margin: 50px auto;
  h1 {
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
  }

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 10px 0 20px;
  }

  ul {
    list-style-type: none;
    margin: 10px;
    li {
      font-size: 16px;
      display: flex;
      align-items: center;
      background: #eee;
      border-radius: 5px;
      margin: 10px;

      img {
        width: 40px;
        height: 40px;
        margin: 5px;
        border-radius: 50%;
      }
    }
  }
`;

export const BadgeEdit = styled.button`
  width: 15px;
  height: 15px;
  font-weight: bold;
  background: none;
  margin: 5px;
  border: 0;
  margin-left: 400px;
  position: absolute;

  p {
    color: #7159c1;
  }
`;

export const BadgeDelete = styled.button`
  width: 15px;
  height: 15px;
  font-weight: bold;
  background: none;
  margin: 5px;
  border: 0;
  position: relative;
  margin-left: 425px;
  position: absolute;

  p {
    color: #7159c1;
  }
`;
