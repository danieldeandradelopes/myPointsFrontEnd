import styled from 'styled-components';
import { lighten } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BadgeProvider = styled.button`
  margin: 5px;
  background: none;
  border: 0;
  position: relative;

  p {
    color: #7159c1;
  }
`;

export const NotificationListProvider = styled.ul`
  position: absolute;
  width: 260px;
  left: calc(10% - 115px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 9;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const BadgeClient = styled.button`
  background: none;
  border: 0;
  position: relative;
  margin: 5px;

  p {
    color: #7159c1;
  }
`;

export const NotificationListClient = styled.ul`
  position: absolute;
  width: 260px;
  left: calc(40% - 145px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 9;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const BadgePoints = styled.button`
  background: none;
  margin: 5px;
  border: 0;
  position: relative;

  p {
    color: #7159c1;
  }
`;

export const NotificationListPoints = styled.ul`
  position: absolute;
  width: 260px;
  left: calc(60% - 115px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 9;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const BadgeProducts = styled.button`
  margin: 5px;
  background: none;
  border: 0;
  position: relative;

  p {
    color: #7159c1;
  }
`;

export const NotificationListProducts = styled.ul`
  position: absolute;
  width: 260px;
  left: calc(100% - 205px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 9;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    display: block;
    font-size: 12px;
    opacity: 0.6;
    margin-bottom: 5px;
  }

  button {
    font-size: 12px;
    border: 0;
    height: 15px;
    background: none;
    color: ${lighten(0.2, '#7159c1')};

    &:hover {
      background: none;
      color: #8f79e0;
    }
  }
`;

// export const Button = styled.a`
//   font-size: 12px;
//   border: 0;
//   height: 15px;
//   background: none;
//   color: ${lighten(0.2, '#7159c1')};
//   cursor: pointer;

//   &:hover {
//     background: none;
//     color: #8f79e0;
//   }
// `;
