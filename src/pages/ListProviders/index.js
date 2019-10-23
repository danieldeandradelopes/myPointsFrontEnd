import React, { useState, useEffect } from 'react';
import { FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa';

import api from '~/services/api';

import { Container, BadgeEdit, BadgeDelete } from './styles';

export default function ListProvider() {
  const [providers, setProvider] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');

      setProvider(response.data);
    }
    loadProviders();
  }, []);

  return (
    <Container>
      <h1>Colaboradores</h1>
      <ul>
        {providers.map(provider => (
          <li key={provider.id}>
            <img
              src={
                provider.avatar !== null
                  ? provider.avatar.url
                  : 'https://api.adorable.io/avatars/49/abott@adorable.png'
              }
              alt="Profile"
            />
            {provider.name}
            <BadgeEdit onClick={() => {}}>
              <FaPencilAlt color="#7159c1" />
            </BadgeEdit>
            <BadgeDelete onClick={() => {}}>
              <FaRegTrashAlt color="#7159c1" />
            </BadgeDelete>
          </li>
        ))}
      </ul>
    </Container>
  );
}
