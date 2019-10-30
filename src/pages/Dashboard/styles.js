// import styled from 'styled-components';

// export const Container = styled.div`
//   max-width: 600px;
//   margin: 50px auto;

//   display: flex;
//   flex-direction: column;

//   header {
//     display: flex;
//     align-self: center;
//     align-items: center;

//     button {
//       border: 0;
//       background: none;
//     }

//     strong {
//       color: #fff;
//       font-size: 24px;
//       margin: 0 15px;
//     }
//   }

//   ul {
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     grid-gap: 15px;
//     margin-top: 30px;
//     list-style: none;
//   }
// `;

// export const Time = styled.li`
//   padding: 20px;
//   border-radius: 4px;
//   background: #fff;

//   opacity: ${props => (props.past ? 0.6 : 1)};

//   strong {
//     display: block;
//     color: ${props => (props.available ? '#999' : '#7159c1')};
//     font-size: 20px;
//     font-weight: normal;
//   }

//   span {
//     display: block;
//     margin-top: 3px;
//     color: ${props => (props.available ? '#999' : '#666')};
//   }
// `;

import styled from 'styled-components';
// import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

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

  button {
    width: 150px;
    height: 150px;
    background: #fff;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: #d6d6d6;
    }
  }
`;
