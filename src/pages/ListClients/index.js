import React, { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';

import api from '~/services/api';

import { Container, BadgeSee } from './styles';

export default function ListClients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function loadClients() {
      const response = await api.get('users');

      setClients(response.data);
    }
    loadClients();
  }, []);

  return (
    <Container>
      <h1>Clientes</h1>
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            <img
              src={
                client.avatar !== null
                  ? client.avatar.url
                  : 'https://api.adorable.io/avatars/49/abott@adorable.png'
              }
              alt="Profile"
            />
            {client.name}

            <BadgeSee onClick={() => {}}>
              <FaEye color="#7159c1" />
            </BadgeSee>
          </li>
        ))}
      </ul>
    </Container>
  );
}
