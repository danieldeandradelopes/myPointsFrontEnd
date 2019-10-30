import React, { useState } from 'react';
import { FaUsersCog, FaUser, FaSmileWink, FaProductHunt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import history from '~/services/history';

import {
  Container,
  BadgeProvider,
  BadgeClient,
  BadgePoints,
  BadgeProducts,
  NotificationListProvider,
  NotificationListClient,
  NotificationListProducts,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visibleProvider, setVisibleProvier] = useState(false);
  const [visibleClient, setVisibleClient] = useState(false);
  const [visiblePoints, setVisiblePoints] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(false);

  function handleToggleVisibleProvider() {
    setVisibleProvier(!visibleProvider);
    setVisibleClient(false);
    setVisiblePoints(false);
    setVisibleProducts(false);
  }
  function handleToggleVisibleClient() {
    setVisibleClient(!visibleClient);
    setVisibleProvier(false);
    setVisiblePoints(false);
    setVisibleProducts(false);
  }
  function handleToggleVisiblePoints() {
    setVisiblePoints(!visiblePoints);
    setVisibleProvier(false);
    setVisibleClient(false);
    setVisibleProducts(false);

    history.push('/registerPoints');
  }

  function handleToggleVisibleProducts() {
    setVisibleProducts(!visibleProducts);
    setVisibleProvier(false);
    setVisiblePoints(false);
    setVisibleClient(false);
  }

  return (
    <Container>
      <BadgeProvider onClick={handleToggleVisibleProvider}>
        <FaUsersCog color="#7159c1" size={30} />
        <p>Colaboradores</p>
      </BadgeProvider>
      <NotificationListProvider visible={visibleProvider}>
        <Scroll>
          <Notification key="addProvider">
            <Link to="/registerProvider">
              <button onClick={() => {}} type="button">
                Adicionar
              </button>
            </Link>
          </Notification>

          <Notification key="listProvider">
            <Link to="/listProviders">
              <button onClick={() => {}} type="button">
                Listar
              </button>
            </Link>
          </Notification>
        </Scroll>
      </NotificationListProvider>

      <BadgeClient onClick={handleToggleVisibleClient}>
        <FaUser color="#7159c1" size={30} />
        <p>Clientes</p>
      </BadgeClient>
      <NotificationListClient visible={visibleClient}>
        <Scroll>
          <Notification key="addClient">
            <Link to="/registerClient">
              <button onClick={() => {}} type="button">
                Adicionar
              </button>
            </Link>
          </Notification>

          <Notification key="listClient">
            <Link to="/listClients">
              <button onClick={() => {}} type="button">
                Listar
              </button>
            </Link>
          </Notification>
        </Scroll>
      </NotificationListClient>

      <BadgePoints onClick={handleToggleVisiblePoints}>
        <FaSmileWink color="#7159c1" size={30} />
        <p>Pontos</p>
      </BadgePoints>

      <BadgeProducts onClick={handleToggleVisibleProducts}>
        <FaProductHunt color="#7159c1" size={30} />
        <p>Produtos</p>
      </BadgeProducts>

      <NotificationListProducts visible={visibleProducts}>
        <Scroll>
          <Notification key="addProducts">
            <Link to="/registerProduct">
              <button onClick={() => {}} type="button">
                Adicionar
              </button>
            </Link>
          </Notification>

          <Notification key="listProducts">
            <button onClick={() => {}} type="button">
              Listar
            </button>
          </Notification>
        </Scroll>
      </NotificationListProducts>
    </Container>
  );
}
